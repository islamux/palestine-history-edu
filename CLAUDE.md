# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Olive Branch (غصن الزيتون) is a censorship-resistant Progressive Web App (PWA) for Palestinian history and cultural education. It's a Next.js monorepo using Turborepo with Arabic RTL support and dark mode.

## Repository Structure

```
├── apps/
│   └── web/                          # Next.js 14 web application
│       ├── src/
│       │   ├── app/                  # App Router pages (layout.tsx, page.tsx)
│       │   ├── components/           # React components
│       │   │   ├── layout/           # Layout components (Header)
│       │   │   └── ui/               # Shared UI components (Button, Card, Badge)
│       │   ├── lib/                  # Core utilities
│       │   │   ├── content.ts        # Static content loader (markdown/JSON)
│       │   │   └── db.ts             # Database query helpers (Prisma)
│       │   ├── styles/               # CSS files
│       │   └── types/                # TypeScript type definitions
│       ├── prisma/                   # Database schema and migrations
│       ├── public/                   # Static assets
│       └── package.json
├── packages/
│   ├── db/                           # Database package
│   │   ├── prisma/schema.prisma      # Prisma schema (SQLite)
│   │   └── src/                      # Database exports
│   ├── ui/                           # Shared UI components package
│   │   └── src/                      # UI component library
│   └── config/                       # Shared configs
├── turbo.json                        # Turborepo configuration
├── pnpm-workspace.yaml               # PNPM workspace setup
└── package.json                      # Root workspace package
```

## High-Level Architecture

### Monorepo Structure
This is a Turborepo monorepo with:
- **apps/web**: The main Next.js application
- **packages/db**: Database package exporting PrismaClient
- **packages/ui**: Shared UI component library

### Data Layer
The app supports **two data sources**:

1. **Prisma Database** (SQLite at `/apps/web/prisma/dev.db`):
   - Categories, Articles, TimelineEvents, EvidenceDocuments
   - Located in `packages/db/prisma/schema.prisma`
   - Helper functions in `apps/web/src/lib/db.ts`

2. **Static Files** (markdown/JSON):
   - Content loaded from `apps/web/src/content/`
   - Articles (`.md`), Timeline (`.json`), Evidence (`.md`), Categories (`.json`)
   - Loader functions in `apps/web/src/lib/content.ts`

### Key Technologies
- **Next.js 14** with App Router (`apps/web/src/app/`)
- **Prisma ORM** with SQLite database
- **TypeScript** throughout
- **Tailwind CSS** for styling with dark mode
- **Framer Motion** for animations
- **Arabic RTL** support configured in `next.config.js`

## Common Commands

### Development
```bash
# Start all apps in development mode
pnpm run dev

# Start only the web app
cd apps/web && pnpm run dev

# Start with specific port
pnpm dev --port 3000
```

### Building & Production
```bash
# Build all apps
pnpm run build

# Build only the web app
cd apps/web && pnpm run build

# Start production server (after build)
pnpm run start
cd apps/web && pnpm run start
```

### Code Quality
```bash
# Lint all code
pnpm run lint

# Type check all code
pnpm run type-check

# Clean build artifacts
pnpm run clean
```

### Database Operations
```bash
# Generate Prisma client
cd packages/db && npx prisma generate

# View database in Prisma Studio
cd packages/db && npx prisma studio

# Create and run migrations
cd packages/db && npx prisma migrate dev --name init

# Reset database (dev only)
cd packages/db && npx prisma migrate reset
```

## Important Configuration Files

- **apps/web/next.config.js**: Next.js config with i18n (Arabic) settings
- **apps/web/tailwind.config.js**: Tailwind config with custom animations and dark mode
- **packages/db/prisma/schema.prisma**: Database schema with 4 main models
- **turbo.json**: Turborepo pipeline configuration
- **pnpm-workspace.yaml**: Workspace dependency management

## Type Definitions

TypeScript types are defined in:
- `apps/web/src/types/index.ts` - Main app types
- `packages/db/prisma/schema.prisma` - Database types (auto-generated)

## Key Models (Prisma)

- **Category**: Groups content by theme (History, Culture, etc.)
- **Article**: Educational articles with markdown content
- **TimelineEvent**: Historical events with importance levels
- **EvidenceDocument**: Verified documents with source tracking

## Development Guidelines

### Adding New Content
1. **Database content**: Add via Prisma Studio or seed script
2. **Static content**: Create `.md`/`.json` files in `apps/web/src/content/`
3. Use existing loaders in `content.ts` or `db.ts`

### UI Components
- Shared components live in `packages/ui/src/`
- App-specific components in `apps/web/src/components/`
- Use Tailwind classes and shadcn/ui patterns

### Database Changes
1. Modify schema in `packages/db/prisma/schema.prisma`
2. Run `npx prisma migrate dev`
3. Update TypeScript types if needed

### RTL/Arabic Support
- App uses `dir="rtl"` for Arabic layout
- Tailwind `rtl:` prefix for RTL-specific styles
- Navigation items defined in Arabic in `page.tsx:20-27`

## Testing
No explicit test configuration found. Follow Next.js testing patterns if tests are added.

## Deployment
Configured for Vercel (recommended). See README.md for deployment options.

## Package Dependencies

**Root**: `turbo` for monorepo orchestration
**apps/web**: Next.js, React, Prisma, Tailwind, Framer Motion
**packages/db**: Prisma client
**packages/ui**: Shared components library

## Environment Variables

Required in `apps/web/.env`:
- `DATABASE_URL`: SQLite database path (default: `file:./dev.db`)

## Notes

- The app has both static and dynamic content loading
- PWA capabilities should be configured in Next.js config
- Dark mode implemented with Tailwind's `class` strategy
- Database is SQLite, so no external database setup required