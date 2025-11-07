# Content Guide

This guide explains how to add and manage content in the Olive Branch PWA.

## Table of Contents

- [Content Types](#content-types)
- [Adding Content via Prisma Studio](#adding-content-via-prisma-studio)
- [Adding Content via Seed Script](#adding-content-via-seed-script)
- [Content Models](#content-models)
- [Content Guidelines](#content-guidelines)
- [Media and Images](#media-and-images)

## Content Types

The Olive Branch PWA supports four main content types:

1. **Categories** - Group content by theme
2. **Articles** - Educational articles and content
3. **Timeline Events** - Historical events with dates
4. **Evidence Documents** - Verified documents and sources

## Adding Content via Prisma Studio

Prisma Studio provides a visual interface for managing database content.

### Getting Started

```bash
cd packages/db
npx prisma studio
```

This will open Prisma Studio in your browser at `http://localhost:5555`.

### Adding a New Category

1. Open Prisma Studio
2. Click on "Category" in the left sidebar
3. Click "Add record"
4. Fill in the fields:
   - **name**: Display name (e.g., "التاريخ")
   - **slug**: URL-friendly identifier (e.g., "history")
   - **description**: Short description
   - **color**: Hex color code (e.g., "#22c55e")
   - **icon**: Icon identifier
   - **order**: Display order (1, 2, 3, etc.)
5. Click "Save 1 change"

### Adding a New Article

1. Click on "Article" in the sidebar
2. Click "Add record"
3. Fill in the fields:
   - **title**: Article title
   - **slug**: URL-friendly identifier
   - **content**: Full article content (Markdown or HTML)
   - **excerpt**: Short summary
   - **category**: Select from dropdown
   - **tags**: JSON array (e.g., `["تاريخ", "قديم"]`)
   - **publishedAt**: Publication date
   - **featured**: Check if featured
   - **readTime**: Estimated reading time in minutes
4. Click "Save 1 change"

### Adding a Timeline Event

1. Click on "TimelineEvent" in the sidebar
2. Click "Add record"
3. Fill in the fields:
   - **title**: Event title
   - **description**: Event description
   - **date**: Event date
   - **category**: Select from dropdown
   - **importance**: Importance level (1-5, 5 being most important)
   - **sources**: JSON array of source references
4. Click "Save 1 change"

### Adding Evidence Document

1. Click on "EvidenceDocument" in the sidebar
2. Click "Add record"
3. Fill in the fields:
   - **title**: Document title
   - **description**: Document description
   - **documentType**: Type (report, document, testimony, media, other)
   - **source**: Source organization
   - **sourceUrl**: URL to original source (optional)
   - **verificationStatus**: Status (verified, pending, disputed)
   - **tags**: JSON array
   - **content**: Document content
   - **publishedAt**: Publication date
   - **category**: Select from dropdown
4. Click "Save 1 change"

## Adding Content via Seed Script

For bulk content addition or reproducible setups, use the seed script.

### Location

```
packages/db/prisma/seed.ts
```

### How to Run

```bash
cd packages/db
npx prisma db seed
```

### Seed Script Structure

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const history = await prisma.category.upsert({
    where: { slug: 'history' },
    update: {},
    create: {
      name: 'التاريخ',
      slug: 'history',
      description: 'التاريخ والتراث الفلسطيني',
      color: '#22c55e',
      icon: 'book',
      order: 1,
    },
  });

  // Create articles
  await prisma.article.create({
    data: {
      title: 'عنوان المقال',
      slug: 'article-slug',
      content: 'محتوى المقال...',
      excerpt: 'ملخص المقال',
      category: history.slug,
      tags: JSON.stringify([' tag1', ' tag2']),
      publishedAt: new Date(),
      featured: false,
      readTime: 5,
    },
  });

  // Add more content...
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

### Running Custom Seeds

To run a custom seed, modify `seed.ts` and run:

```bash
npx prisma db seed
```

## Content Models

### Category

Groups content by theme.

```typescript
{
  id: string;           // Auto-generated
  name: string;         // Display name
  slug: string;         // URL identifier (unique)
  description: string;  // Short description
  color: string;        // Hex color code
  icon: string;         // Icon identifier
  order: number;        // Display order
  createdAt: Date;      // Auto-generated
  updatedAt: Date;      // Auto-generated
}
```

### Article

Educational articles.

```typescript
{
  id: string;        // Auto-generated
  title: string;     // Article title
  slug: string;      // URL identifier (unique)
  content: string;   // Full content
  excerpt: string;   // Short summary
  category: string;  // Category slug
  tags: string;      // JSON array
  publishedAt: Date; // Publication date
  updatedAt: Date;   // Auto-generated
  featured: boolean; // Is featured
  readTime: number;  // Reading time (minutes)
}
```

### TimelineEvent

Historical events.

```typescript
{
  id: string;        // Auto-generated
  title: string;     // Event title
  description: string; // Event description
  date: Date;        // Event date
  category: string;  // Category slug
  importance: number; // 1-5 scale
  sources: string;   // JSON array
  createdAt: Date;   // Auto-generated
  updatedAt: Date;   // Auto-generated
}
```

### EvidenceDocument

Verified documents.

```typescript
{
  id: string;                // Auto-generated
  title: string;             // Document title
  description: string;       // Document description
  documentType: string;      // Type
  source: string;            // Source organization
  sourceUrl?: string;        // Optional URL
  verificationStatus: string;// Status
  tags: string;              // JSON array
  content: string;           // Document content
  publishedAt: Date;         // Publication date
  createdAt: Date;           // Auto-generated
  updatedAt: Date;           // Auto-generated
  category: string;          // Category slug
}
```

## Content Guidelines

### Writing Style

- Write in Arabic
- Use clear, concise language
- Be objective and factual
- Include proper citations
- Write for a general audience

### Article Content

- **Length**: 500-3000 words
- **Structure**: Use headings (H2, H3)
- **Citations**: Include sources
- **Tags**: Use 3-5 relevant tags
- **Read Time**: Estimate 200 words per minute

### Timeline Events

- **Accuracy**: Verify dates and facts
- **Importance**: Use 1-5 scale appropriately
  - 1: Minor event
  - 2: Local significance
  - 3: Regional importance
  - 4: National significance
  - 5: Historic importance
- **Sources**: Include credible sources
- **Neutrality**: Present facts objectively

### Evidence Documents

- **Verification**: Only include verified documents
- **Sources**: Credible organizations only
- **Transparency**: Clear verification status
- **Document Types**:
  - **report**: Official reports
  - **document**: Historical documents
  - **testimony**: Personal accounts
  - **media**: Photos, videos
  - **other**: Other evidence

### Categories

Keep categories focused and useful:

- التاريخ (History)
- الثقافة (Culture)
- الجدول الزمني (Timeline)
- الأدلة (Evidence)
- الجغرافيا (Geography)
- الشخصيات (Personalities)

## Media and Images

### Current Limitations

- No built-in image upload
- Images must be in `public/` directory
- Reference by path: `/image-name.png`

### Future Enhancements

Planned features:
- Image upload via Prisma
- CDN integration
- Automatic optimization
- Alt text support

## Best Practices

### Data Validation

1. **Required Fields**: Don't leave required fields empty
2. **Unique Slugs**: Ensure all slugs are unique
3. **Valid Dates**: Use proper date formats
4. **JSON Arrays**: Use valid JSON syntax

### Content Management

1. **Backup**: Export data before bulk changes
2. **Version Control**: Keep seed.ts updated
3. **Consistency**: Follow naming conventions
4. **Testing**: Verify content displays correctly

### Performance

1. **Images**: Optimize before adding
2. **Content Length**: Balance detail with performance
3. **Read Time**: Provide accurate estimates

## Troubleshooting

### Common Issues

1. **Slug Already Exists**
   - Solution: Use a unique slug

2. **Invalid JSON in Tags**
   - Solution: Check JSON syntax
   - Example: `["tag1", "tag2"]` ✓
   - Example: `["tag1", "tag2"` ✗ (missing bracket)

3. **Category Not Found**
   - Solution: Create category first, then reference it

4. **Date Format Issues**
   - Solution: Use ISO format or Date constructor

### Getting Help

- Check Prisma documentation
- Review existing content for examples
- Open an issue on GitHub

## Content Workflow

### Adding New Content

1. Plan your content
2. Create or verify category
3. Add content via Prisma Studio or seed
4. Test display in app
5. Update seed.ts if needed

### Updating Content

1. Open Prisma Studio
2. Find the record
3. Update fields
4. Save changes
5. Clear any caches

### Deleting Content

1. Open Prisma Studio
2. Find the record
3. Click delete
4. Confirm deletion
5. Check for related content

## Content License

All content must be:
- Original or properly attributed
- Verified for accuracy
- Licensed for public use
- Free of copyright restrictions

## Support

For questions about content:
- Email: fathi733@gmail.com
- GitHub Issues
- Documentation: See README.md
