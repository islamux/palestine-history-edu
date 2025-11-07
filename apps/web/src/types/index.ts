// Re-export all Prisma types for convenience
import type {
  Article,
  Category,
  TimelineEvent,
  EvidenceDocument,
} from '@prisma/client';

export type {
  Article,
  Category,
  TimelineEvent,
  EvidenceDocument,
};

// Re-export Prisma namespace
export { Prisma } from '@prisma/client';

// Custom type for database query results with relations
export type ArticleWithCategory = Article & {
  categoryRef: Category | null;
};

export type TimelineEventWithCategory = TimelineEvent & {
  categoryRef: Category | null;
};

export type EvidenceDocumentWithCategory = EvidenceDocument & {
  categoryRef: Category | null;
};

// Database query filters
export type ArticleFilters = {
  category?: string;
  featured?: boolean;
  limit?: number;
};

export type TimelineEventFilters = {
  category?: string;
  limit?: number;
};

export type EvidenceDocumentFilters = {
  category?: string;
  documentType?: string;
  verificationStatus?: string;
  limit?: number;
};

// Search result types
export type SearchResult = {
  articles: Article[];
  timelineEvents: TimelineEvent[];
  evidenceDocuments: EvidenceDocument[];
  total: number;
};

export type SearchFilters = {
  category?: string;
  limit?: number;
};
