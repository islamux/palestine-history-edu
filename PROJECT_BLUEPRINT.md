# Olive Branch (غصن الزيتون) - Palestine History PWA
## Project Blueprint

---

## Overview

A **censorship-resistant Progressive Web App (PWA)** for Palestinian history and cultural education. Built as a **monorepo** using Next.js 14, featuring Arabic RTL support, offline functionality, and dual content management (static files + SQLite database).

**Key Features:**
- 📚 Educational content about Palestinian history and culture
- 🌐 PWA with offline support (works without internet)
- 🌙 Dark mode enabled
- 📱 Responsive design (mobile, tablet, desktop)
- 🌍 RTL Arabic language support
- ⚡ Static generation for fast performance
- 🔒 Privacy-focused (no tracking, no external dependencies)

---

## Tech Stack (Latest Stable Versions)

### Core Framework
- **Next.js 14.2.5** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5.4** - Type safety

### Package Manager & Build
- **pnpm 9.14.1** - Fast, space-efficient package manager
- **Turborepo 2.5.5** - Monorepo build system
- **Next.js SWC** - Fast compiler

### Styling & UI
- **Tailwind CSS 3.4.3** - Utility-first CSS framework
- **Framer Motion 11.2** - Animations (used sparingly)
- **Lucide React 0.378** - Icon library

### Data & Storage
- **Prisma 5.14** - ORM with type safety
- **SQLite** - Lightweight database (file-based)
- **gray-matter 4.0.3** - Markdown frontmatter parsing

---

## Phases

### Phase 1: Project Setup ✅ (Already Complete)

**What was done:**
1. Monorepo initialized with Turborepo
2. Next.js app created with TypeScript
3. Tailwind configured with RTL support
4. Prisma + SQLite setup
5. Basic UI components (Button, Card, Badge)
6. Root layout with Arabic navigation

**Key Files Created:**
- `apps/web/` - Next.js application
- `packages/db/` - Database package
- `packages/ui/` - UI components package
- `turbo.json` - Build pipeline configuration
- `pnpm-workspace.yaml` - Workspace setup

### Phase 2: Content Management System 📝

**Goal:** Build flexible content loading from both database and static files

**Tasks:**
1. **Database Schema Design**
   - Categories (History, Culture, Timeline, Evidence)
   - Articles (with markdown content)
   - Timeline Events (historical milestones)
   - Evidence Documents (verified sources)

2. **Static Content Loader** (`apps/web/src/lib/content.ts`)
   - Load markdown files for articles
   - Parse JSON for timeline events
   - Search functionality across all content
   - Reading time estimation

3. **Database Utilities** (`apps/web/src/lib/db.ts`)
   - Prisma query helpers
   - Category filtering
   - Search with pagination
   - Featured content queries

4. **Type Definitions** (`apps/web/src/types/index.ts`)
   - Article interface
   - TimelineEvent interface
   - EvidenceDocument interface
   - Category interface

**Native Solutions Used:**
- `fs` module for file reading (Node.js built-in)
- `path` module for file paths (Node.js built-in)
- `JSON.parse()` for JSON handling (native)
- Prisma instead of ORMs with more overhead

### Phase 3: User Interface 🎨

**Goal:** Create clean, accessible UI with Arabic RTL support

**Tasks:**
1. **Layout Components** (`apps/web/src/components/layout/`)
   - Header with navigation (Arabic labels)
   - Mobile-responsive menu
   - Dark/light mode toggle

2. **Homepage** (`apps/web/src/app/page.tsx`)
   - Hero section with gradient
   - Featured content cards
   - Category overview
   - RTL-aware layout

3. **Tailwind Configuration** (`apps/web/tailwind.config.js`)
   - Custom CSS variables for theming
   - Dark mode with class strategy
   - RTL support with `rtl:` prefix
   - Custom animations (fade-in, slide-in)

4. **Next.js Configuration** (`apps/web/next.config.js`)
   - i18n setup for Arabic locale
   - Image domain configuration
   - SWC minification enabled

**Best Practices Applied:**
- Semantic HTML for accessibility
- Mobile-first responsive design
- CSS variables for theming
- Component composition over inheritance

### Phase 4: PWA Features 📱

**Goal:** Enable offline functionality and app-like experience

**Tasks:**
1. **Service Worker** (inferred from git status)
   - Cache static assets
   - Offline page fallback
   - Background sync for content

2. **Web App Manifest**
   - App icons and splash screens
   - Display mode (standalone)
   - Theme colors matching brand

3. **Offline Strategy**
   - Cache core pages
   - Graceful degradation
   - Loading states for offline

**Note:** Some PWA files deleted per git status, may need recreation

### Phase 5: Content Population 📚

**Goal:** Add educational content about Palestinian history

**Tasks:**
1. **Create Content Structure**
   - `/src/content/articles/` - Historical articles
   - `/src/content/timeline/` - JSON timeline events
   - `/src/content/evidence/` - Document sources
   - `/src/content/categories/` - Category definitions

2. **Sample Content** (already exists in root)
   - `ancient-history.json`
   - `categories.json`
   - `palestinian-cuisine.md`
   - `unesco-heritage-sites.md`
   - `olive-trees-palestine.md`

3. **Database Seeding**
   - Parse existing content
   - Import to SQLite via Prisma
   - Create relationships

### Phase 6: Testing & Quality Assurance 🧪

**Goal:** Ensure code quality and reliability

**Tasks:**
1. **TypeScript Strict Mode**
   - Already configured in `apps/web/tsconfig.json`
   - All components typed
   - No `any` types (use unknown instead)

2. **ESLint Configuration**
   - Next.js ESLint config
   - TypeScript rules
   - Accessibility checks

3. **Manual Testing Checklist**
   - [ ] Dark/light mode toggle works
   - [ ] RTL layout renders correctly
   - [ ] Mobile menu opens/closes
   - [ ] Content loads from both sources
   - [ ] Offline functionality works
   - [ ] Arabic fonts display properly

### Phase 7: Performance Optimization ⚡

**Goal:** Achieve fast loading and smooth interactions

**Tasks:**
1. **Next.js Optimizations**
   - Image optimization (next/image)
   - Dynamic imports for heavy components
   - Server Components where possible
   - Metadata optimization

2. **Bundle Analysis**
   - Check bundle size
   - Remove unused dependencies
   - Code splitting by route

3. **Database Performance**
   - Query optimization
   - Indexing on frequently queried fields
   - Pagination for large datasets

### Phase 8: Deployment 🚀

**Goal:** Deploy to production with CI/CD

**Tasks:**
1. **Vercel Deployment** (Recommended)
   - Connect GitHub repo
   - Auto-deploy on push
   - Environment variables setup
   - Custom domain configuration

2. **Alternative Platforms**
   - Netlify
   - Railway
   - Self-hosted Docker

3. **Production Checklist**
   - [ ] Database URL configured
   - [ ] Build passes without errors
   - [ ] Environment variables set
   - [ ] Custom domain configured
   - [ ] Analytics (if needed) added

---

## Development Workflow

### Daily Development

```bash
# Start development server (all packages)
pnpm run dev

# Start only web app
cd apps/web && pnpm dev

# Build all packages
pnpm run build

# Lint code
pnpm run lint

# Type check
pnpm run type-check

# Clean build artifacts
pnpm run clean
```

### Adding New Content

**Option 1: Database (via Prisma)**
```bash
# Open Prisma Studio
cd packages/db && npx prisma studio

# Create new record in UI
# - Article with title, slug, content
# - TimelineEvent with date, title, description
# - EvidenceDocument with verification status
```

**Option 2: Static Files**
```bash
# Create markdown file
touch apps/web/src/content/articles/my-article.md

# Add frontmatter
---
title: "My Article"
slug: "my-article"
date: "2024-01-15"
category: "history"
tags: ["tag1", "tag2"]
publishedAt: "2024-01-15T00:00:00Z"
---

# Content here in markdown
```

### Database Changes

```bash
# 1. Modify schema
vim packages/db/prisma/schema.prisma

# 2. Create migration
cd packages/db && npx prisma migrate dev --name describe_change

# 3. Generate client
npx prisma generate

# 4. Update TypeScript types if needed
```

### Adding UI Components

```bash
# Create in packages/ui for shared components
touch packages/ui/src/components/MyComponent.tsx

# Or in apps/web for app-specific
touch apps/web/src/components/ui/MyComponent.tsx

# Import where needed
import { MyComponent } from '@olive-branch/ui'
# or
import MyComponent from '@/components/ui/MyComponent'
```

---

## Project Structure

```
palastine-history/
├── apps/
│   └── web/                          # Next.js application
│       ├── src/
│       │   ├── app/                  # App Router pages
│       │   │   ├── layout.tsx        # Root layout (Arabic nav)
│       │   │   └── page.tsx          # Homepage
│       │   ├── components/
│       │   │   ├── layout/           # Header, Footer
│       │   │   └── ui/               # Reusable UI components
│       │   ├── lib/
│       │   │   ├── content.ts        # Static file loader
│       │   │   └── db.ts             # Database queries
│       │   ├── types/
│       │   │   └── index.ts          # TypeScript definitions
│       │   └── styles/
│       │       └── globals.css       # Global styles
│       ├── public/                   # Static assets
│       ├── next.config.js            # Next.js config (Arabic i18n)
│       ├── tailwind.config.js        # Tailwind + RTL + dark mode
│       └── package.json
├── packages/
│   ├── db/                           # Database package
│   │   ├── prisma/
│   │   │   └── schema.prisma         # SQLite schema
│   │   └── src/
│   ├── ui/                           # Shared UI components
│   │   └── src/
│   └── config/                       # Shared configs
├── turbo.json                        # Turborepo pipeline
├── pnpm-workspace.yaml               # PNPM workspace
└── package.json                      # Root workspace
```

---

## Configuration Files

### Turborepo (`turbo.json`)
- Defines build pipeline
- Caching for faster builds
- Parallel task execution

### PNPM Workspace (`pnpm-workspace.yaml`)
- Specifies package locations
- Enables monorepo features

### Next.js (`apps/web/next.config.js`)
- Arabic i18n (locale: 'ar', defaultLocale: 'ar')
- Image optimization settings
- SWC minification

### Tailwind (`apps/web/tailwind.config.js`)
- Dark mode: 'class' strategy
- RTL support with `rtl:` prefix
- Custom color scheme
- Custom animations

---

## Best Practices

### 1. Prefer Native Solutions
- Use Node.js `fs` module for file reading (NOT additional libraries)
- Use native `JSON.parse()` for JSON (NOT `lodash`)
- Use Prisma for DB (mature, type-safe, actively maintained)

### 2. Type Safety
- All components typed with TypeScript
- No `any` types (use `unknown` with type guards)
- Prisma generates types from schema

### 3. Performance
- Static generation for content pages
- Server Components where possible
- Image optimization with `next/image`
- Lazy load non-critical components

### 4. Accessibility
- Semantic HTML (`<article>`, `<section>`, etc.)
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

### 5. Internationalization
- RTL layout with `dir="rtl"` for Arabic
- Arabic text in navigation
- Font support for Arabic glyphs
- `rtl:` prefix in Tailwind classes

---

## Troubleshooting

### Issue: Arabic text not rendering RTL
**Fix:** Ensure `dir={locale === 'ar' ? 'rtl' : 'ltr'}` on layout

### Issue: Database connection error
**Fix:** Check `DATABASE_URL` in `.env`, ensure database exists

### Issue: Build fails with Prisma errors
**Fix:** Run `npx prisma generate` to regenerate client

### Issue: Tailwind classes not working
**Fix:** Check `tailwind.config.js` content paths include all component locations

### Issue: Module not found
**Fix:** Verify path aliases in `tsconfig.json`, restart dev server

---

## Resources

### Documentation
- [Next.js App Router](https://nextjs.org/docs/app)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Turborepo](https://turbo.build/repo/docs)

### Tools
- [Prisma Studio](https://www.prisma.io/studio) - Visual database editor
- [Vercel](https://vercel.com) - Deployment platform
- [pnpm](https://pnpm.io/) - Package manager

---

## Questions for Junior Developer

1. **Do you understand the dual content system (static files + database)?**
   - Static: Markdown/JSON files loaded via `content.ts`
   - Database: SQLite via Prisma ORM

2. **Are you comfortable with Arabic RTL layout?**
   - Uses `dir="rtl"` and `rtl:` Tailwind prefix
   - Arabic navigation labels in code

3. **Have you worked with PWA before?**
   - Service workers for offline support
   - Web app manifest for installability

4. **Do you prefer database or file-based content management?**
   - Database: Better for dynamic content, queries, relationships
   - Files: Better for static content, version control, simplicity

---

## Next Steps

1. Review existing code in `apps/web/src/`
2. Understand Prisma schema in `packages/db/prisma/`
3. Explore Tailwind configuration for RTL/dark mode
4. Set up local development environment
5. Choose content management approach (DB vs files)
6. Start building additional pages (history, timeline, evidence)

**Ready to begin?** Start with Phase 2 (Content Management) or ask questions about any phase.