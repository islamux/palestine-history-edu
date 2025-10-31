export interface Article {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  content: string;
  publishedAt: Date;
  updatedAt: Date;
  featured: boolean;
  readTime: number;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface EvidenceDocument {
  title: string;
  url: string;
  source: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}
