<div align="center">

# 🚀 Full Stack Developer Portfolio

### A Modern, Production-Ready Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06b6d4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=flat-square)]()

**[🌐 Live Demo](https://firrthecreator.vercel.app)** • **[📖 Documentation](DEVELOPMENT.md)** • **[🤝 Contributing](CONTRIBUTING.md)** • **[⚡ Quick Start](#-quick-start)**

</div>

---

## 📌 About This Project

A modern portfolio website designed specifically for professional developers who want to showcase their expertise, projects, and technical skills in an engaging and interactive way.

Built with cutting-edge technologies and industry best practices, this portfolio provides optimal performance, SEO excellence, and an outstanding user experience. Perfect for freelancers, software engineers, full-stack developers, or tech enthusiasts who want to make a strong first impression.

---

## ✨ Key Features

<table>
  <tr>
    <td>✅ Modern Design System</td>
    <td>Dark-mode aesthetic with gradient accents</td>
  </tr>
  <tr>
    <td>✅ Fully Responsive</td>
    <td>Mobile-first approach (320px - 4K+)</td>
  </tr>
  <tr>
    <td>✅ Performance Optimized</td>
    <td>Next.js 16 App Router for lightning-fast loading</td>
  </tr>
  <tr>
    <td>✅ Type-Safe Development</td>
    <td>Full TypeScript with comprehensive JSDoc documentation</td>
  </tr>
  <tr>
    <td>✅ Smooth Animations</td>
    <td>Scroll-triggered effects & intersection observers</td>
  </tr>
  <tr>
    <td>✅ Production Ready</td>
    <td>Accessibility compliant & security hardened</td>
  </tr>
  <tr>
    <td>✅ SEO Friendly</td>
    <td>Meta tags, Open Graph, sitemap integration</td>
  </tr>
  <tr>
    <td>✅ Modular Architecture</td>
    <td>Reusable components with clear separation of concerns</td>
  </tr>
</table>

---

## 📑 Feature Overview

### 🎯 Core Sections

| Section | Description |
|---------|-----------|
| 🎯 **Navigation** | Fixed header with smooth scrolling & responsive mobile menu |
| 🌟 **Hero** | Eye-catching introduction with animated greeting & CTA buttons |
| 👤 **About** | Professional background & developer journey narrative with timeline |
| 💡 **Skills** | Categorized technical expertise with proficiency level indicators |
| 🏆 **Projects** | Featured work showcase with descriptions, tech stacks, & live links |
| 📧 **Contact** | Validated contact form with email integration & social media links |
| 🔗 **Footer** | Navigation links, social media, copyright & quick access |

---

## 🛠️ Tech Stack

| Category | Technology | Version | Purpose |
|----------|-----------|-------|---------|
| **Framework** | Next.js | 16 | React framework with App Router |
| **Language** | TypeScript | 5.3+ | Type-safe development |
| **Styling** | Tailwind CSS | 4.0 | Utility-first CSS framework |
| **UI Components** | Shadcn/ui | Latest | 30+ accessible & customizable components |
| **React** | React | 19 | Latest React features & hooks |
| **Runtime** | Node.js | 18+ | JavaScript execution |
| **Deployment** | Vercel | — | Optimized Next.js hosting |

### 📦 Development Tools

| Tool | Purpose |
|------|---------|
| **ESLint** | Code quality & linting |
| **Prettier** | Code formatting |
| **PostCSS** | CSS processing |
| **Autoprefixer** | Browser vendor prefixes |
| **pnpm** | Fast package manager |

---

## 📂 Project Structure

```
nextjs-tailwind-portfolio/
│
├── 📁 app/
│   ├── layout.tsx                 # Root layout with theme & scroll management
│   ├── page.tsx                   # Main portfolio entry point
│   └── globals.css                # Global styles & design tokens
│
├── 📁 components/
│   ├── navigation.tsx             # Responsive header navigation
│   ├── hero.tsx                   # Hero section with introduction
│   ├── about.tsx                  # About section with timeline
│   ├── skills.tsx                 # Skills showcase with proficiency
│   ├── projects.tsx               # Projects grid with featured work
│   ├── contact.tsx                # Contact form with validation
│   ├── footer.tsx                 # Footer navigation
│   ├── animated-background.tsx    # Animated gradient effects
│   ├── scroll-progress.tsx        # Progress indicator component
│   ├── scroll-to-top.tsx          # Scroll to top utility button
│   ├── theme-provider.tsx         # Theme configuration
│   └── 📁 ui/                     # Shadcn/ui components (30+)
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── badge.tsx
│       └── ... (and many more)
│
├── 📁 lib/
│   ├── types.ts                   # TypeScript type definitions
│   ├── portfolio-data.ts          # Configuration & content data
│   ├── cn.ts                      # Class name utilities
│   ├── constants.ts               # Application constants
│   ├── utils.ts                   # Helper functions
│   ├── 📁 hooks/
│   │   ├── use-intersection.ts    # Viewport detection hook
│   │   └── use-scroll-position.ts # Scroll position tracking
│   └── 📁 utils/
│       ├── api.ts                 # API utilities
│       └── validation.ts          # Form validation
│
├── 📁 public/
│   ├── 📁 images/                # Project screenshots & assets
│   └── favicon.ico               # Favicon
│
├── 📁 styles/
│   └── globals.css               # Additional stylesheets
│
├── 📄 next.config.mjs            # Next.js configuration
├── 📄 tsconfig.json              # TypeScript configuration
├── 📄 tailwind.config.ts         # Tailwind CSS configuration
├── 📄 postcss.config.mjs         # PostCSS configuration
├── 📄 components.json            # Shadcn/ui configuration
├── 📄 package.json               # Project dependencies
├── 📄 pnpm-lock.yaml             # Dependency lock file
├── 📄 README.md                  # Documentation (file ini)
├── 📄 LICENSE                    # MIT License
├── 📄 DEVELOPMENT.md             # Development guide
├── 📄 DEPLOYMENT.md              # Deployment guide
└── 📄 CONTRIBUTING.md            # Contribution guidelines
```

---

## 🎨 Design System

### Color Palette

| Element | Value | Purpose |
|---------|-------|---------|
| **Background** | `oklch(0.08 0 0)` | Deep dark primary background |
| **Foreground** | `oklch(0.95 0 0)` | High contrast text color |
| **Primary** | Purple/Violet | Main accent color |
| **Secondary** | Blue | Secondary emphasis |
| **Accent** | Orange/Warm | Interactive highlights |
| **Card** | `oklch(0.12 0 0)` | Elevated surface |
| **Border** | `oklch(0.18 0 0)` | Subtle dividers |

### Typography

```css
Font Family:      Geist (body), Geist Mono (code)
Line Height:      1.5–1.6 (optimal readability)
Border Radius:    0.625rem base with responsive variants
Spacing Scale:    4px, 8px, 16px, 24px increments
```

---

## 📱 Responsive Design

| Device | Viewport | Optimizations |
|--------|----------|---------------|
| **Mobile** | 320px+ | Touch-friendly, single column layout |
| **Tablet** | 768px+ | Two-column layouts, optimized spacing |
| **Desktop** | 1024px+ | Multi-column grids, full feature set |
| **Large** | 1280px+ | Max-width containers, expanded details |

---

## ✨ Animation Library

| Animation | Effect | Usage |
|-----------|--------|-------|
| **Fade In Up** | Fade + slide up entrance | Content reveal |
| **Slide In Left/Right** | Directional slide entrance | Section transitions |
| **Float** | Subtle vertical motion | Background elements |
| **Glow** | Pulsing shadow effect | Interactive states |
| **Hover Scale** | Scale transformation | Button interactions |
| **Scroll Progress** | Dynamic top progress bar | Page progress indication |
| **Intersection Observer** | Viewport-triggered animations | Scroll events |

---

## 🚀 Quick Start

### 📋 Prerequisites

```bash
✓ Node.js 18.17 or newer
✓ pnpm 10.27.0 (recommended) or npm/yarn
✓ Git for version control
```

### 📦 Installation

```bash
# 1. Clone repository
git clone https://github.com/firrthecreator/nextjs-tailwind-portfolio.git
cd nextjs-tailwind-portfolio

# 2. Install dependencies
pnpm install
# or if using npm:
# npm install

# 3. Create environment file (optional)
cp .env.example .env.local

# 4. Start development server
pnpm dev
# or npm run dev
```

Open your browser to **[http://localhost:3000](http://localhost:3000)** to see your portfolio! 🎉

### 🏗️ Production Build

```bash
# Create optimized production build
pnpm build

# Start production server
pnpm start

# or use preview build
pnpm build
pnpm preview
```

---

## ⚙️ Configuration & Customization

### 👤 Personal Information

Edit file [lib/portfolio-data.ts](lib/portfolio-data.ts):

```typescript
export const portfolioConfig: PortfolioConfig = {
  name: "Your Full Name",
  age: 25,
  title: "Your Professional Title",
  bio: "Your professional biography here...",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, USA",
  // ... other configuration
}
```

### 🏆 Projects Showcase

Update the `projects` array in [lib/portfolio-data.ts](lib/portfolio-data.ts):

```typescript
{
  id: "unique-project-id",
  title: "Project Name",
  description: "Brief project description",
  image: "/images/project.jpg",
  technologies: ["React", "TypeScript", "Tailwind"],
  link: "https://project-url.com",
  github: "https://github.com/username/repo",
  features: ["Feature 1", "Feature 2"],
  year: 2024,
  category: "Web Development"
}
```

### 💡 Skills & Expertise

Update the `skills` array with proficiency levels (1–5):

```typescript
{
  name: "React",
  category: "Frontend",
  proficiency: 5,
  keywords: ["Hooks", "Server Components", "Performance"],
  yearsOfExperience: 4
}
```

### 🎨 Theme Customization

Edit [app/globals.css](app/globals.css) to change the color scheme:

```css
:root {
  --primary: oklch(0.7 0.25 280);      /* Main accent color */
  --secondary: oklch(0.65 0.22 260);   /* Secondary color */
  --accent: oklch(0.75 0.2 15);        /* Highlight color */
  --background: oklch(0.08 0 0);       /* Background color */
  --foreground: oklch(0.95 0 0);       /* Text color */
  /* ... other variables */
}
```

---

## 🧩 Component Overview

| Component | Features | Location |
|-----------|-------|--------|
| **Navigation** | Fixed header, mobile menu, scroll detection | [components/navigation.tsx](components/navigation.tsx) |
| **Hero** | Animated greeting, gradient text, CTAs | [components/hero.tsx](components/hero.tsx) |
| **About** | Timeline narrative, stats, animations | [components/about.tsx](components/about.tsx) |
| **Skills** | Categorized expertise, proficiency indicators | [components/skills.tsx](components/skills.tsx) |
| **Projects** | Project cards, tech badges, live demos | [components/projects.tsx](components/projects.tsx) |
| **Contact** | Validated form, social links | [components/contact.tsx](components/contact.tsx) |
| **Footer** | Quick links, copyright information | [components/footer.tsx](components/footer.tsx) |

---

## ♿ Accessibility & Compliance

- ✓ Semantic HTML5 structure
- ✓ ARIA labels and roles
- ✓ Keyboard navigation support
- ✓ Focus states on interactive elements
- ✓ Screen reader compatible
- ✓ WCAG 2.1 AA contrast compliance
- ✓ Alt text for all images
- ✓ Skip navigation links

---

## 🔒 Security Best Practices

- ✓ Input validation on forms
- ✓ Sensitive data protection
- ✓ Environment variable configuration
- ✓ XSS protection via React escaping
- ✓ CSRF token support
- ✓ Content Security Policy ready
- ✓ Regular dependency updates

---

## ⚡ Performance Optimizations

| Optimization | Benefit | Implementation |
|--------------|---------|-----------------|
| **Image Optimization** | Reduced bundle size | Next.js Image component |
| **Code Splitting** | Lazy-loaded routes | Next.js App Router |
| **CSS Framework** | Zero-runtime CSS | Tailwind CSS v4 |
| **Animations** | Smooth 60fps rendering | Intersection Observer |
| **Font Loading** | Optimized rendering | next/font integration |
| **Analytics** | Performance tracking | Vercel Web Analytics |

**Typical Performance Metrics:**
- ⚡ Lighthouse Score: 95+
- 🚀 First Contentful Paint: < 1.0s
- 📊 Core Web Vitals: Excellent

---

## 📚 API Reference

### Custom Hooks

#### `useIntersection`
Detect when an element enters the viewport

```typescript
const { ref, isVisible } = useIntersection({
  threshold: 0.1,
  rootMargin: "0px"
});
```

#### `useScrollPosition`
Track scroll position of the page

```typescript
const { scrollY, direction } = useScrollPosition();
```

---

## 🌐 Environment Variables

Create a `.env.local` file for development:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://api.example.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X

# Contact Form (Optional)
NEXT_PUBLIC_CONTACT_EMAIL=contact@example.com
```

---

## 🚀 Deployment Guide

### ✅ Vercel (Recommended)

Vercel provides the best experience for Next.js applications:

```bash
# 1. Push repository to GitHub
git push origin main

# 2. Import in Vercel Dashboard
# https://vercel.com/new

# 3. Automatic deployment on every push!
```

### Alternative Platforms

| Platform | Setup | Best For |
|----------|-------|----------|
| **Netlify** | Connect GitHub repo | Static & JAMstack |
| **GitHub Pages** | Static export | Free hosting |
| **AWS Amplify** | AWS integration | Enterprise scale |
| **Firebase Hosting** | Google integration | Quick deployment |
| **Docker** | Container deployment | Self-hosted |

### Manual Deployment Checklist

- [ ] Update `NEXT_PUBLIC_API_URL` for production
- [ ] Set environment variables on hosting platform
- [ ] Configure custom domain
- [ ] Setup SSL certificate
- [ ] Enable compression & caching
- [ ] Setup monitoring & analytics
- [ ] Test all functionality

---

## 📖 Documentation Standards

All components and utilities include comprehensive JSDoc documentation:

```typescript
/**
 * Hero section component with animated introduction
 * 
 * Features gradient text, animated elements, and responsive design
 * with smooth scroll behavior and intersection observers.
 *
 * @component
 * @param {HeroProps} props - Component props
 * @returns {React.ReactElement} Rendered hero section
 * 
 * @example
 * return <Hero />
 */
export function Hero(props: HeroProps): React.ReactElement {
  // Implementation
}
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for complete details.

---

## 🎓 Learning Resources

This project implements best practices from:

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [React 19 Features](https://react.dev)
- [Web Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Vitals](https://web.dev/vitals/)

---

## 💡 Future Enhancements

Consider implementing the following features:

- [ ] Dark/Light theme toggle
- [ ] Blog functionality
- [ ] Testimonials section
- [ ] CMS integration (Sanity, Contentful)
- [ ] Animation library (Framer Motion)
- [ ] Email service (SendGrid, Mailgun)
- [ ] Google Analytics integration
- [ ] Search functionality
- [ ] Multi-language support (i18n)

---

## 📄 License

This project is open source and available under the **MIT License**.

See the [LICENSE](LICENSE) file for full details.

---

## 🔗 Connect with Me

For questions, feedback, or collaboration opportunities:

<div align="center">

| Platform | Link |
|----------|------|
| 📧 **Email** | [firrthecreator@gmail.com](mailto:firrthecreator@gmail.com) |
| 🐙 **GitHub** | [@firrthecreator](https://github.com/firrthecreator) |
| 💼 **LinkedIn** | [@firrthecreator](https://linkedin.com/in/firrthecreator) |
| 𝕏 **Twitter** | [@firrthecreator](https://twitter.com/firrthecreator) |
| 🌐 **Portfolio** | [firrthecreator.vercel.app](https://firrthecreator.vercel.app) |

</div>

---

## 📊 Project Stats

<div align="center">

![GitHub Stars](https://img.shields.io/github/stars/firrthecreator/nextjs-tailwind-portfolio?style=flat-square)
![GitHub Forks](https://img.shields.io/github/forks/firrthecreator/nextjs-tailwind-portfolio?style=flat-square)
![GitHub Issues](https://img.shields.io/github/issues/firrthecreator/nextjs-tailwind-portfolio?style=flat-square)

</div>

---

<div align="center">

### Built with ❤️ using Modern Web Technologies

**Portfolio v1.0.0** • **© 2026 Ananda Firmansyah**

Last Updated: January 2026 • [Star ⭐ if you find it helpful](https://github.com/firrthecreator/nextjs-tailwind-portfolio)

</div>
