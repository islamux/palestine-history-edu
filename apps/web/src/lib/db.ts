import { PrismaClient } from '@olive-branch/db';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Database utility functions
export async function getCategories() {
  return await prisma.category.findMany({
    orderBy: { order: 'asc' },
  });
}

export async function getArticles(filters?: {
  category?: string;
  featured?: boolean;
  limit?: number;
}) {
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

export async function getArticleBySlug(slug: string) {
  return await prisma.article.findUnique({
    where: { slug },
    include: {
      categoryRef: true,
    },
  });
}

export async function getTimelineEvents(filters?: {
  category?: string;
  limit?: number;
}) {
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

export async function getEvidenceDocuments(filters?: {
  category?: string;
  documentType?: string;
  verificationStatus?: string;
  limit?: number;
}) {
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

export async function searchContent(query: string, filters?: {
  category?: string;
  limit?: number;
}) {
  const searchQuery = `%${query}%`;
  
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

