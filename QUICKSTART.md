# Quick Start Guide

Get the portfolio up and running in 5 minutes.

## Installation

```bash
# 1. Clone repository
git clone https://github.com/firrthecreator/nextjs-tailwind-portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### 1. Update Personal Information

Edit `lib/portfolio-data.ts`:

```typescript
export const portfolioConfig = {
  name: "Your Name",
  age: 25,
  title: "Your Title",
  bio: "Your bio...",
  email: "your.email@example.com",
}
```

### 2. Add Your Projects

Add to `projects` array in `lib/portfolio-data.ts`:

```typescript
{
  id: "my-project",
  title: "Project Name",
  description: "What does it do",
  image: "/project-image.jpg",
  technologies: ["Next.js", "React"],
  link: "https://project-link.com",
  github: "https://github.com/you/repo",
  features: ["Feature 1", "Feature 2"],
}
```

### 3. Update Skills

Add to `skills` array in `lib/portfolio-data.ts`:

```typescript
{
  name: "Skill Name",
  category: "Frontend",
  proficiency: 5,
  keywords: ["related", "keywords"],
}
```

### 4. Change Colors

Edit `app/globals.css` - update color values:

```css
:root {
  --primary: oklch(0.7 0.25 280); /* Your primary color */
  --accent: oklch(0.75 0.2 15);   /* Your accent color */
}
```

### 5. Update Social Links

Edit `lib/portfolio-data.ts`:

```typescript
export const socialLinks = [
  {
    platform: "GitHub",
    url: "https://github.com/yourname",
    icon: "github",
  },
  // Add more...
]
```

## Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Run production server

# Code Quality
npm run lint         # Run linter
npm run type-check   # Check TypeScript

# Deployment
npm run build && npm start  # Full production flow
```

## Deploy

### Vercel (Recommended)

1. Push to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

### Other Platforms

- **Netlify**: Connect GitHub repo
- **AWS Amplify**: Connect GitHub repo
- **Docker**: Build and deploy container

## Folder Structure

```
├── app/           # Pages and layouts
├── components/    # React components
├── lib/           # Utilities and data
├── public/        # Static assets
└── styles/        # Global styles
```

## Next Steps

1. Update all personal information
2. Add your projects with images
3. Customize colors and fonts
4. Add social media links
5. Deploy to production
6. Set up custom domain
7. Monitor analytics

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Styles not showing?**
```bash
rm -rf .next && npm run dev
```

**TypeScript errors?**
```bash
npm install
npm run type-check
```

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Full Development Guide](./DEVELOPMENT.md)
- [Deployment Guide](./DEPLOYMENT.md)

---

Happy coding! 🚀
