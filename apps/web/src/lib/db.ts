import { PrismaClient } from '@olive-branch/db';
import type {
  Category,
  Article,
  TimelineEvent,
  EvidenceDocument,
  ArticleFilters,
  TimelineEventFilters,
  EvidenceDocumentFilters,
  ArticleWithCategory,
  TimelineEventWithCategory,
  EvidenceDocumentWithCategory,
  SearchResult,
  SearchFilters
} from '@/types';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Database utility functions
export async function getCategories(): Promise<Category[]> {
  return await prisma.category.findMany({
    orderBy: { order: 'asc' },
  });
}

export async function getArticles(filters?: ArticleFilters): Promise<ArticleWithCategory[]> {
  return await prisma.article.findMany({
    where: {
      ...(filters?.category && { category: filters.category }),
      ...(filters?.featured !== undefined && { featured: filters.featured }),
    },
    orderBy: { publishedAt: 'desc' },
    take: filters?.limit,
    include: {
      categoryRef: true,
    },
  });
}

export async function getArticleBySlug(slug: string): Promise<ArticleWithCategory | null> {
  return await prisma.article.findUnique({
    where: { slug },
    include: {
      categoryRef: true,
    },
  });
}

export async function getTimelineEvents(filters?: TimelineEventFilters): Promise<TimelineEventWithCategory[]> {
  return await prisma.timelineEvent.findMany({
    where: {
      ...(filters?.category && { category: filters.category }),
    },
    orderBy: [
      { importance: 'desc' },
      { date: 'desc' },
    ],
    take: filters?.limit,
    include: {
      categoryRef: true,
    },
  });
}

export async function getEvidenceDocuments(filters?: EvidenceDocumentFilters): Promise<EvidenceDocumentWithCategory[]> {
  return await prisma.evidenceDocument.findMany({
    where: {
      ...(filters?.category && { category: filters.category }),
      ...(filters?.documentType && { documentType: filters.documentType }),
      ...(filters?.verificationStatus && { verificationStatus: filters.verificationStatus }),
    },
    orderBy: { publishedAt: 'desc' },
    take: filters?.limit,
    include: {
      categoryRef: true,
    },
  });
}

export async function searchContent(
  query: string,
  filters?: SearchFilters
): Promise<SearchResult> {
  const [articles, timelineEvents, evidenceDocuments] = await Promise.all([
    prisma.article.findMany({
      where: {
        AND: [
          {
            OR: [
              { title: { contains: query } },
              { content: { contains: query } },
              { excerpt: { contains: query } },
            ],
          },
          ...(filters?.category ? [{ category: filters.category }] : []),
        ],
      },
      take: filters?.limit,
      include: { categoryRef: true },
    }),
    prisma.timelineEvent.findMany({
      where: {
        AND: [
          {
            OR: [
              { title: { contains: query } },
              { description: { contains: query } },
            ],
          },
          ...(filters?.category ? [{ category: filters.category }] : []),
        ],
      },
      take: filters?.limit,
      include: { categoryRef: true },
    }),
    prisma.evidenceDocument.findMany({
      where: {
        AND: [
          {
            OR: [
              { title: { contains: query } },
              { description: { contains: query } },
              { content: { contains: query } },
            ],
          },
          ...(filters?.category ? [{ category: filters.category }] : []),
        ],
      },
      take: filters?.limit,
      include: { categoryRef: true },
    }),
  ]);

  return {
    articles,
    timelineEvents,
    evidenceDocuments,
    total: articles.length + timelineEvents.length + evidenceDocuments.length,
  };
}

