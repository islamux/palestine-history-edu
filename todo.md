# Project Planning: Olive Branch PWA
# Clean Project For the dublicated and unncessary files.
## Project Name: "Olive Branch"
- Subtle reference to Palestine (olive trees are iconic to the region)
- Peaceful, non-political connotation
- Memorable and brandable

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite with Prisma ORM
- **Tooling**: ESLint, Turborepo
- **PWA**: Service Worker, Web App Manifest

### Project Structure
```
olive-branch/
├── apps/
│   └── web/                 # Next.js app
│       ├── app/            # App Router pages
│       ├── components/     # Reusable components
│       ├── lib/           # Utilities and database
│       ├── content/       # JSON/Markdown content
│       └── public/        # Static assets
├── packages/
│   └── database/          # Prisma schema and utilities
├── docs/                  # Documentation
└── README.md
```

### Core Features Implementation Plan
1. **Landing Page**: Hero section, feature highlights, navigation
2. **Educational Content**: History timeline, Gaza events, key facts
3. **Evidence & Reports**: Document viewer, categorized content
4. **Search & Filter**: Full-text search, category filters, date ranges
5. **PWA Features**: Offline caching, installable, responsive

### Content Structure
- History articles in Markdown
- Timeline data in JSON
- Evidence documents with metadata
- Search index for fast filtering

## Phase 1 Tasks
- [x] Choose project name and architecture
- [x] Set up project directory structure
- [x] Plan database schema
- [x] Define content organization

## Phase 2 Tasks
- [x] Initialize Next.js project with App Router
- [x] Set up TypeScript configuration
- [x] Configure Tailwind CSS
- [x] Set up ESLint and basic tooling
- [x] Create basic project structure
- [x] Set up Turborepo configuration
- [x] Create TypeScript type definitions

## Phase 3 Tasks
- [x] Set up Prisma ORM
- [x] Create database schema
- [x] Configure SQLite database
- [x] Create database utilities
- [x] Set up database migrations
- [x] Create and run seed script

## Phase 4 Tasks
- [x] Create content structure in JSON/Markdown
- [x] Organize content files by category
- [x] Create content management utilities
- [x] Set up content loading functions
- [x] Create sample content files
- [x] Install gray-matter for markdown parsing

## Phase 5 Tasks
- [x] Create base UI components (Button, Card, etc.)
- [x] Set up layout components (Header, Footer, Sidebar)
- [x] Create responsive navigation system
- [x] Implement theme provider for dark mode
- [x] Create loading and error states
- [x] Install additional UI libraries
- [x] Create utility functions
- [ ] Fix Next.js server issues (in progress)

## Phase 6 Tasks
- [ ] Create landing page with hero section
- [ ] Implement navigation menu
- [ ] Add responsive design
- [ ] Create feature cards
- [ ] Add call-to-action sections

