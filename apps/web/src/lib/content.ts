import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Article, TimelineEvent, EvidenceDocument, Category } from '@/types';

const contentDirectory = path.join(process.cwd(), 'src/content');

// Utility function to read and parse markdown files
export function readMarkdownFile(filePath: string) {
  const fullPath = path.join(contentDirectory, filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { frontMatter: data, content };
}

// Utility function to read JSON files
export function readJsonFile(filePath: string) {
  const fullPath = path.join(contentDirectory, filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(fileContents);
}

// Get all files in a directory
export function getContentFiles(directory: string): string[] {
  const fullPath = path.join(contentDirectory, directory);
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  return fs.readdirSync(fullPath).filter(file => 
    file.endsWith('.md') || file.endsWith('.json')
  );
}

// Load articles from markdown files
export function loadArticlesFromFiles(): Article[] {
  const articleFiles = getContentFiles('articles');
  const articles: Article[] = [];

  for (const file of articleFiles) {
    if (file.endsWith('.md')) {
      const { frontMatter, content } = readMarkdownFile(`articles/${file}`);
      const article: Article = {
        id: frontMatter.id || file.replace('.md', ''),
        title: frontMatter.title,
        slug: frontMatter.slug || file.replace('.md', ''),
        date: frontMatter.date,
        content,
        excerpt: frontMatter.excerpt,
        category: frontMatter.category,
        tags: frontMatter.tags || [],
        publishedAt: new Date(frontMatter.publishedAt),
        updatedAt: new Date(frontMatter.updatedAt || frontMatter.publishedAt),
        featured: frontMatter.featured || false,
        readTime: frontMatter.readTime || estimateReadTime(content),
      };
      articles.push(article);
    }
  }

  return articles.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

// Load timeline events from JSON files
export function loadTimelineFromFiles(): TimelineEvent[] {
  const timelineFiles = getContentFiles('timeline');
  const events: TimelineEvent[] = [];

  for (const file of timelineFiles) {
    if (file.endsWith('.json')) {
      const data = readJsonFile(`timeline/${file}`);
      if (Array.isArray(data)) {
        events.push(...data.map((event: any) => ({
          ...event,
          date: new Date(event.date),
          createdAt: new Date(event.createdAt || Date.now()),
          updatedAt: new Date(event.updatedAt || Date.now()),
        })));
      }
    }
  }

  return events.sort((a, b) => b.date.getTime() - a.date.getTime());
}

// Load evidence documents from markdown files
export function loadEvidenceFromFiles(): EvidenceDocument[] {
  const evidenceFiles = getContentFiles('evidence');
  const documents: EvidenceDocument[] = [];

  for (const file of evidenceFiles) {
    if (file.endsWith('.md')) {
      const { frontMatter, content } = readMarkdownFile(`evidence/${file}`);
      const document: EvidenceDocument = {
        id: frontMatter.id || file.replace('.md', ''),
        title: frontMatter.title,
        description: frontMatter.description,
        documentType: frontMatter.documentType,
        source: frontMatter.source,
        sourceUrl: frontMatter.sourceUrl,
        verificationStatus: frontMatter.verificationStatus || 'pending',
        tags: frontMatter.tags || [],
        content,
        publishedAt: new Date(frontMatter.publishedAt),
        createdAt: new Date(frontMatter.createdAt || frontMatter.publishedAt),
        updatedAt: new Date(frontMatter.updatedAt || frontMatter.publishedAt),
        category: frontMatter.category,
      };
      documents.push(document);
    }
  }

  return documents.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

// Load categories from JSON file
export function loadCategoriesFromFiles(): Category[] {
  try {
    const categories = readJsonFile('categories/categories.json');
    return categories.sort((a: Category, b: Category) => a.order - b.order);
  } catch (error) {
    console.warn('Categories file not found, using default categories');
    return [];
  }
}

// Utility function to estimate reading time
function estimateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Search function for static content
export function searchStaticContent(
  query: string,
  options: {
    articles?: Article[];
    timeline?: TimelineEvent[];
    evidence?: EvidenceDocument[];
  } = {}
) {
  const searchTerm = query.toLowerCase();
  
  const articles = (options.articles || loadArticlesFromFiles()).filter(article =>
    article.title.toLowerCase().includes(searchTerm) ||
    article.content.toLowerCase().includes(searchTerm) ||
    article.excerpt.toLowerCase().includes(searchTerm) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );

  const timelineEvents = (options.timeline || loadTimelineFromFiles()).filter(event =>
    event.title.toLowerCase().includes(searchTerm) ||
    event.description.toLowerCase().includes(searchTerm)
  );

  const evidenceDocuments = (options.evidence || loadEvidenceFromFiles()).filter(doc =>
    doc.title.toLowerCase().includes(searchTerm) ||
    doc.description.toLowerCase().includes(searchTerm) ||
    doc.content.toLowerCase().includes(searchTerm) ||
    doc.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );

  return {
    articles,
    timelineEvents,
    evidenceDocuments,
    total: articles.length + timelineEvents.length + evidenceDocuments.length,
  };
}

