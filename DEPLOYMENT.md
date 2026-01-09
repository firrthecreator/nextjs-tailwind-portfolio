# Deployment Guide

Comprehensive guide for deploying the portfolio to production.

## 📖 Table of Contents

- [Pre-deployment Checklist](#pre-deployment-checklist)
- [Environment Setup](#environment-setup)
- [Vercel Deployment](#vercel-deployment)
- [Alternative Platforms](#alternative-platforms)
- [Custom Domain](#custom-domain)
- [Performance Monitoring](#performance-monitoring)
- [Security Considerations](#security-considerations)

## Pre-deployment Checklist

Before deploying, ensure:

- [ ] All links are functional and point to correct URLs
- [ ] Portfolio data is updated with your information
- [ ] Project images are optimized and hosted
- [ ] Contact form backend is configured (if needed)
- [ ] Environment variables are set in production
- [ ] SEO metadata is updated
- [ ] Analytics is configured
- [ ] No console errors in production build
- [ ] Mobile responsiveness is verified
- [ ] Page load performance is acceptable

### Build Check

```bash
# Build for production
npm run build

# Start production server locally
npm start

# Test in browser
# Open http://localhost:3000
```

## Environment Setup

### Production Environment Variables

Create `.env.local` (development) and `.env.production.local` (production):

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Your Name
NEXT_PUBLIC_CONTACT_EMAIL=your.email@example.com
```

### SEO Configuration

Update metadata in `lib/portfolio-data.ts` and `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Full Stack Developer",
  description: "Your professional description",
  // ... other metadata
}
```

## Vercel Deployment

### Option 1: Deploy via GitHub

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Select repository and branch

3. **Configure Project**
   - Framework: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
   - Environment Variables: Add from `.env.production.local`

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site is live!

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Alternative Platforms

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables
5. Deploy

### AWS Amplify

1. Connect GitHub repository
2. Use Next.js preset
3. Add environment variables
4. Deploy

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and push:
```bash
docker build -t portfolio .
docker push your-registry/portfolio
```

## Custom Domain

### With Vercel

1. Go to Project Settings
2. Navigate to "Domains"
3. Add your domain
4. Update DNS records:
   ```
   Type: CNAME
   Name: www (or your subdomain)
   Value: cname.vercel-dns.com
   ```
5. Wait for DNS propagation (up to 48 hours)

### With Other Platforms

Update DNS records to point to provider's nameservers or CNAME.

## Performance Monitoring

### Vercel Analytics

- Automatically enabled in Vercel projects
- View at: Project → Analytics
- Monitor Core Web Vitals
- Track page performance

### Web Vitals

Check in production:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

Optimize with:
- Image optimization
- Code splitting
- Caching strategies
- Minification

### Page Speed Insights

Test your site:
- Google PageSpeed Insights
- WebPageTest
- GTmetrix

## Security Considerations

### HTTPS

- Vercel automatically enables HTTPS
- Redirect HTTP to HTTPS
- Use security headers (already configured)

### Environment Variables

- Never commit `.env.local` files
- Use production-only variables securely
- Rotate sensitive keys regularly
- Use vault services for secrets

### Content Security Policy

Consider adding CSP headers:

```typescript
// next.config.mjs
headers: async () => [
  {
    source: "/:path*",
    headers: [
      {
        key: "Content-Security-Policy",
        value: "default-src 'self'; script-src 'self' 'unsafe-inline'",
      },
    ],
  },
]
```

### Updates & Maintenance

- Keep Next.js updated: `npm update next`
- Keep dependencies updated: `npm update`
- Monitor security advisories: `npm audit`
- Review Dependabot alerts

## Monitoring & Logging

### Error Tracking (Optional)

Consider using:
- Sentry for error tracking
- LogRocket for user sessions
- Datadog for monitoring

### Health Checks

Set up monitoring:
```bash
# Monitor uptime
Use services like: UptimeRobot, Pingdom
```

## Rollback Strategy

If issues occur:

```bash
# Vercel: Revert to previous deployment
# 1. Go to Deployments tab
# 2. Click "..." on previous deployment
# 3. Select "Promote to Production"

# GitHub: Revert commit
git revert <commit-hash>
git push origin main
```

## Support & Resources

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Open for support
- Community: Vercel community forums
