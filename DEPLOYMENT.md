# Deployment Guide

This guide covers how to deploy the Olive Branch PWA to various platforms.

## Table of Contents

- [Vercel (Recommended)](#vercel-recommended)
- [Netlify](#netlify)
- [Self-hosted](#self-hosted)
- [Docker](#docker)

## Vercel (Recommended)

Vercel provides the easiest deployment for Next.js applications.

### Prerequisites

- Vercel account
- GitHub repository

### Steps

1. **Install Vercel CLI** (optional):
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy from project root**:
```bash
vercel
```

4. **Follow the prompts**:
   - Set up and deploy: Yes
   - Which scope: Your account
   - Link to existing project: No
   - Project name: olive-branch (or your preference)
   - Directory: ./

5. **Environment Variables**:

In the Vercel dashboard, add these environment variables:

```
DATABASE_URL=file:./dev.db
```

Note: For production, consider using a persistent database like PostgreSQL or MySQL instead of SQLite.

6. **Deploy**:
```bash
vercel --prod
```

### Automatic Deployment

Connect your GitHub repository to Vercel for automatic deployments:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure project settings
5. Click "Deploy"

## Netlify

### Using Netlify CLI

1. **Build the project**:
```bash
pnpm run build
```

2. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

3. **Login**:
```bash
netlify login
```

4. **Deploy**:
```bash
netlify deploy --prod --dir=apps/web/.next
```

### Using Git Integration

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Choose GitHub and select your repository
5. Build settings:
   - Build command: `pnpm run build`
   - Publish directory: `apps/web/.next`
6. Add environment variables in Site settings
7. Click "Deploy site"

## Self-hosted

### Using Node.js

1. **Build the application**:
```bash
pnpm run build
```

2. **Start the production server**:
```bash
pnpm run start
```

3. **The app will be available at**:
   - http://localhost:3000

### Using PM2 (Process Manager)

1. **Install PM2**:
```bash
npm install -g pm2
```

2. **Create ecosystem file**:
```javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'olive-branch',
    cwd: './',
    script: 'pnpm',
    args: 'run start',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

3. **Start the application**:
```bash
pm2 start ecosystem.config.js
```

4. **Manage the application**:
```bash
pm2 status
pm2 logs olive-branch
pm2 restart olive-branch
pm2 stop olive-branch
```

## Docker

### Dockerfile

Create a `Dockerfile` in the project root:

```dockerfile
# Use Node.js 18 Alpine
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install -g pnpm && pnpm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder /app/apps/web/public ./apps/web/public

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "apps/web/server.js"]
```

### Build and Run

1. **Build the Docker image**:
```bash
docker build -t olive-branch .
```

2. **Run the container**:
```bash
docker run -p 3000:3000 olive-branch
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=file:./dev.db
    volumes:
      - ./apps/web/prisma:/app/apps/web/prisma
```

Run with:
```bash
docker-compose up -d
```

## Environment Variables

Required environment variables:

```env
# Database
DATABASE_URL=file:./dev.db

# Optional: For production databases
# DATABASE_URL=postgresql://user:password@host:port/database
```

## Database Considerations

### SQLite (Development)

The default SQLite database works for development but has limitations for production:
- File-based (not shared across instances)
- Limited concurrent writes
- No built-in backups

### PostgreSQL (Production)

For production, use PostgreSQL:

1. **Update DATABASE_URL**:
```
DATABASE_URL=postgresql://user:password@host:5432/dbname
```

2. **Run migrations**:
```bash
cd packages/db
npx prisma migrate deploy
```

## PWA Considerations

The app is configured as a PWA. For proper offline functionality:

1. **HTTPS Required**: Service workers only work over HTTPS
2. **Manifest**: Already configured in `apps/web/public/manifest.json`
3. **Service Worker**: Registered in `layout.tsx`

## Performance Optimization

### Build Optimization

1. **Analyze bundle**:
```bash
npm install @next/bundle-analyzer
ANALYZE=true pnpm run build
```

2. **Image Optimization**:
   - Already configured in `next.config.js`
   - Supports AVIF and WebP

3. **Compression**:
   - Enabled in `next.config.js`
   - Gzip/Brotli compression

### Caching

- Static assets: Cached by CDN
- API routes: Configurable caching headers
- Service Worker: Caches content for offline use

## Monitoring

### Vercel Analytics

Enable in Vercel dashboard for:
- Core Web Vitals
- Page views
- Performance metrics

### Error Tracking

Consider integrating:
- Sentry
- LogRocket
- DataDog

## Troubleshooting

### Build Fails

1. Check Node.js version (should be 18+)
2. Clear `.next` cache
3. Delete `node_modules` and reinstall
4. Check environment variables

### Database Issues

1. Verify DATABASE_URL
2. Run migrations: `npx prisma migrate deploy`
3. Check database connectivity

### PWA Not Working

1. Ensure HTTPS (required for service workers)
2. Check manifest.json is accessible
3. Verify service worker registration in browser dev tools

## Support

- Issues: [GitHub Issues](https://github.com/islamux/palastine-history/issues)
- Email: fathi733@gmail.com
