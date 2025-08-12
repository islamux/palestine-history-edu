import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create categories
  const categories = [
    {
      name: 'History',
      slug: 'history',
      description: 'Historical background and context',
      color: '#8B5A3C',
      icon: 'BookOpen',
      order: 1,
    },
    {
      name: 'Timeline',
      slug: 'timeline',
      description: 'Chronological events and milestones',
      color: '#2563EB',
      icon: 'Clock',
      order: 2,
    },
    {
      name: 'Evidence',
      slug: 'evidence',
      description: 'Documented reports and testimonies',
      color: '#DC2626',
      icon: 'FileText',
      order: 3,
    },
    {
      name: 'Culture',
      slug: 'culture',
      description: 'Cultural heritage and traditions',
      color: '#059669',
      icon: 'Heart',
      order: 4,
    },
    {
      name: 'Current Events',
      slug: 'current-events',
      description: 'Recent developments and news',
      color: '#7C3AED',
      icon: 'Globe',
      order: 5,
    },
    {
      name: 'Resources',
      slug: 'resources',
      description: 'Educational materials and references',
      color: '#EA580C',
      icon: 'Library',
      order: 6,
    },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }

  // Create sample articles
  const articles = [
    {
      title: 'The Ancient History of Palestine',
      slug: 'ancient-history-palestine',
      content: `# The Ancient History of Palestine

Palestine has been inhabited continuously for thousands of years, with archaeological evidence showing human presence dating back to the Paleolithic period. The region has been home to numerous civilizations and peoples throughout history.

## Early Civilizations

The land of Palestine has been a crossroads of civilizations, connecting Africa, Asia, and Europe. Ancient Canaanites, Philistines, Israelites, and many other peoples have called this land home.

## Archaeological Evidence

Archaeological discoveries throughout Palestine reveal a rich tapestry of cultures and civilizations that have flourished in this region for millennia.`,
      excerpt: 'Explore the ancient history of Palestine, from early civilizations to archaeological discoveries that reveal thousands of years of continuous human habitation.',
      category: 'history',
      tags: JSON.stringify(['ancient', 'archaeology', 'civilizations', 'canaanites']),
      publishedAt: new Date('2024-01-15'),
      featured: true,
      readTime: 8,
    },
    {
      title: 'Palestinian Cultural Heritage',
      slug: 'palestinian-cultural-heritage',
      content: `# Palestinian Cultural Heritage

Palestinian culture is rich and diverse, encompassing traditions, arts, cuisine, and customs that have been preserved and passed down through generations.

## Traditional Arts

Palestinian embroidery (tatreez), pottery, and handicrafts represent centuries of artistic tradition and cultural identity.

## Cuisine and Traditions

Palestinian cuisine reflects the agricultural abundance of the land and the cultural exchanges that have occurred throughout history.`,
      excerpt: 'Discover the rich cultural heritage of Palestine, including traditional arts, cuisine, and customs that define Palestinian identity.',
      category: 'culture',
      tags: JSON.stringify(['culture', 'traditions', 'arts', 'cuisine', 'tatreez']),
      publishedAt: new Date('2024-01-20'),
      featured: true,
      readTime: 6,
    },
    {
      title: 'Understanding the Modern Context',
      slug: 'understanding-modern-context',
      content: `# Understanding the Modern Context

To understand the current situation, it's important to examine the historical events and political developments that have shaped the region.

## Key Historical Events

The 20th century brought significant changes to Palestine, including the end of Ottoman rule, the British Mandate period, and subsequent political developments.

## International Law and Human Rights

Various international bodies and human rights organizations have documented and reported on the situation in Palestine.`,
      excerpt: 'An overview of the modern context and key historical events that have shaped contemporary Palestine.',
      category: 'current-events',
      tags: JSON.stringify(['modern', 'politics', 'international-law', 'human-rights']),
      publishedAt: new Date('2024-02-01'),
      featured: false,
      readTime: 10,
    },
  ];

  for (const article of articles) {
    await prisma.article.upsert({
      where: { slug: article.slug },
      update: {},
      create: article,
    });
  }

  // Create sample timeline events
  const timelineEvents = [
    {
      title: 'Ancient Canaanite Civilization',
      description: 'Archaeological evidence shows the presence of Canaanite civilization in Palestine.',
      date: new Date('1200-01-01'),
      category: 'history',
      importance: 4,
      sources: JSON.stringify(['Archaeological surveys', 'Historical records']),
    },
    {
      title: 'Ottoman Period Begins',
      description: 'Palestine becomes part of the Ottoman Empire.',
      date: new Date('1517-01-01'),
      category: 'history',
      importance: 3,
      sources: JSON.stringify(['Ottoman archives', 'Historical documents']),
    },
    {
      title: 'End of Ottoman Rule',
      description: 'The Ottoman Empire ends, leading to significant changes in Palestine.',
      date: new Date('1918-01-01'),
      category: 'history',
      importance: 5,
      sources: JSON.stringify(['Historical records', 'International documents']),
    },
  ];

  for (const event of timelineEvents) {
    await prisma.timelineEvent.create({
      data: event,
    });
  }

  // Create sample evidence documents
  const evidenceDocuments = [
    {
      title: 'UN Human Rights Report 2023',
      description: 'Comprehensive report on human rights situation in Palestine.',
      documentType: 'report',
      source: 'United Nations Human Rights Council',
      sourceUrl: 'https://example.com/un-report-2023',
      verificationStatus: 'verified',
      tags: JSON.stringify(['UN', 'human-rights', '2023', 'report']),
      content: 'This is a summary of the UN Human Rights Report documenting various human rights concerns in Palestine.',
      publishedAt: new Date('2023-12-01'),
      category: 'evidence',
    },
    {
      title: 'Historical Land Records',
      description: 'Documentation of historical land ownership and usage patterns.',
      documentType: 'document',
      source: 'Historical Archives',
      verificationStatus: 'verified',
      tags: JSON.stringify(['land', 'historical', 'ownership', 'archives']),
      content: 'Historical documentation showing patterns of land ownership and agricultural use in Palestine.',
      publishedAt: new Date('2024-01-10'),
      category: 'history',
    },
  ];

  for (const doc of evidenceDocuments) {
    await prisma.evidenceDocument.create({
      data: doc,
    });
  }

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

