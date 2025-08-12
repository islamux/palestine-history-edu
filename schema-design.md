# Database Schema Design

## Tables Overview

### Articles
Educational content and historical information
```sql
- id: String (UUID)
- title: String
- slug: String (unique)
- content: String (Markdown)
- excerpt: String
- category: String
- tags: String[] (JSON)
- publishedAt: DateTime
- updatedAt: DateTime
- featured: Boolean
- readTime: Int (minutes)
```

### Timeline Events
Historical events with dates and context
```sql
- id: String (UUID)
- title: String
- description: String
- date: DateTime
- category: String
- importance: Int (1-5 scale)
- sources: String[] (JSON)
- createdAt: DateTime
- updatedAt: DateTime
```

### Evidence Documents
Reports, documents, and verified information
```sql
- id: String (UUID)
- title: String
- description: String
- documentType: String (report, document, testimony, etc.)
- source: String
- sourceUrl: String?
- verificationStatus: String (verified, pending, disputed)
- tags: String[] (JSON)
- content: String (Markdown)
- publishedAt: DateTime
- createdAt: DateTime
- updatedAt: DateTime
```

### Categories
Content organization
```sql
- id: String (UUID)
- name: String
- slug: String (unique)
- description: String
- color: String (hex color)
- icon: String
- order: Int
```

## Content Categories
1. **History** - Historical background and context
2. **Timeline** - Chronological events
3. **Evidence** - Documented reports and testimonies
4. **Culture** - Cultural heritage and traditions
5. **Current Events** - Recent developments
6. **Resources** - Educational materials and references

## Search Strategy
- Full-text search across title, content, and tags
- Category-based filtering
- Date range filtering for timeline events
- Tag-based filtering
- Importance-based sorting for timeline events

