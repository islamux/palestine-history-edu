// Core content types
export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: Date;
  updatedAt: Date;
  featured: boolean;
  readTime: number;
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  category: string;
  importance: number; // 1-5 scale
  sources: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface EvidenceDocument {
  id: string;
  title: string;
  description: string;
  documentType: 'report' | 'document' | 'testimony' | 'media' | 'other';
  source: string;
  sourceUrl?: string;
  verificationStatus: 'verified' | 'pending' | 'disputed';
  tags: string[];
  content: string;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
  order: number;
}

// Search and filter types
export interface SearchFilters {
  query?: string;
  category?: string;
  tags?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  documentType?: string;
  verificationStatus?: string;
}

export interface SearchResult {
  articles: Article[];
  timelineEvents: TimelineEvent[];
  evidenceDocuments: EvidenceDocument[];
  total: number;
}

// UI component types
export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
}

export interface ThemeConfig {
  mode: 'light' | 'dark';
  primaryColor: string;
  accentColor: string;
}

