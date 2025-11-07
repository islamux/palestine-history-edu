# Contributing to Olive Branch (غصن الزيتون)

Thank you for your interest in contributing to Olive Branch! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Adding Content](#adding-content)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9.14.1+
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/islamux/palastine-history.git
cd palastine-history
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Workflow

### Using Turborepo

This is a monorepo managed by Turborepo. Common commands:

```bash
# Run all packages in development
pnpm run dev

# Build all packages
pnpm run build

# Type check all packages
pnpm run type-check

# Lint all packages
pnpm run lint

# Run tests
pnpm test
```

### Package Structure

- **apps/web**: Next.js application
- **packages/db**: Database package (Prisma)
- **packages/ui**: UI components package
- **packages/config**: Shared configurations

## Adding Content

### Database Content

This project uses SQLite with Prisma ORM. To add content:

1. Use Prisma Studio:
```bash
cd packages/db
npx prisma studio
```

2. Or use the seed script:
```bash
cd packages/db
npx prisma db seed
```

### Content Models

#### Category
- Groups content by theme
- Fields: name, slug, description, color, icon, order

#### Article
- Educational articles
- Fields: title, slug, content, excerpt, category, tags

#### TimelineEvent
- Historical events
- Fields: title, description, date, category, importance (1-5)

#### EvidenceDocument
- Verified documents
- Fields: title, description, documentType, source, verificationStatus

## Coding Standards

### TypeScript

- Use strict TypeScript
- Define proper types for all functions
- Use Prisma generated types

### React Components

- Use functional components with hooks
- Use 'use client' directive for client components
- Follow the existing component structure
- Use Tailwind for styling
- Ensure RTL support for all components

### RTL Support

All components must support Arabic RTL layout:

```tsx
// Good ✅
<div className="flex items-center space-x-2 rtl:space-x-reverse">

// Avoid ❌
<div className="ml-4">
```

### Styling

- Use Tailwind CSS classes
- Use CSS variables for theming
- Support dark mode
- Use the color scheme defined in globals.css

## Testing

### Running Tests

```bash
# Run tests in watch mode
pnpm test

# Run tests once
pnpm test:run

# Run with coverage
pnpm test:coverage
```

### Writing Tests

- Place test files next to the source: `Component.test.tsx`
- Use Vitest and Testing Library
- Test component rendering and behavior
- Mock external dependencies

Example test:
```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

## Submitting Changes

### Branch Naming

- Feature: `feature/description-of-feature`
- Bug fix: `fix/description-of-bug`
- Improvement: `improve/description-of-improvement`

### Commit Messages

Follow conventional commits:

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

Example:
```
feat: add timeline page with interactive events
```

### Pull Requests

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Ensure all tests pass
5. Update documentation if needed
6. Submit a pull request

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Improvement
- [ ] Documentation

## Testing
- [ ] Tests pass locally
- [ ] Added tests for new functionality

## Checklist
- [ ] Code follows project standards
- [ ] Self-reviewed code
- [ ] RTL support verified
- [ ] Dark mode support verified
```

## Project Structure

```
apps/web/src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── layout/      # Layout components
│   └── ui/          # Shared UI components
├── hooks/           # Custom React hooks
├── lib/             # Utilities
│   ├── db.ts        # Database functions
│   └── content.ts   # Static content loader
├── styles/          # CSS files
└── types/           # TypeScript types
```

## Questions?

- Open an issue on GitHub
- Contact: fathi733@gmail.com

## License

By contributing, you agree that your contributions will be licensed under the GNU GPL v3.0 License.
