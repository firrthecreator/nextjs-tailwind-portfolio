# Development Guide

Complete guide for developing and maintaining the Ananda Firmansyah portfolio.

## 📖 Table of Contents

- [Setup](#setup)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Component Development](#component-development)
- [Styling Guidelines](#styling-guidelines)
- [Performance Tips](#performance-tips)
- [Troubleshooting](#troubleshooting)

## Setup

### Prerequisites

- Node.js 18.17.0 or higher
- npm 9.0.0 or higher (or yarn/pnpm)
- Git for version control

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/firrthecreator/nextjs-tailwind-portfolio.git
cd portfolio

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles and theme
├── components/
│   ├── navigation.tsx       # Header and navigation
│   ├── hero.tsx             # Hero section
│   ├── about.tsx            # About section
│   ├── skills.tsx           # Skills section
│   ├── projects.tsx         # Projects section
│   ├── contact.tsx          # Contact section
│   ├── footer.tsx           # Footer
│   ├── animated-background.tsx
│   ├── scroll-progress.tsx
│   └── scroll-to-top.tsx
├── lib/
│   ├── types.ts             # TypeScript interfaces
│   ├── portfolio-data.ts    # Content and config
│   ├── constants.ts         # Application constants
│   ├── cn.ts                # Utility functions
│   ├── hooks/               # Custom React hooks
│   └── utils/               # Utility functions
├── public/
│   └── [assets]             # Images and static files
├── next.config.mjs          # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind configuration
└── package.json             # Dependencies
```

## Development Workflow

### Running Development Server

```bash
npm run dev
# Server runs on http://localhost:3000
```

### Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Code Quality

```bash
# Run linting
npm run lint

# Format code (requires prettier)
npm run format
```

## Code Standards

### TypeScript Usage

- Always use TypeScript for type safety
- Avoid `any` types - use proper type definitions
- Leverage union types and discriminated unions
- Create interfaces for all data structures

```typescript
// Good
interface Project {
  id: string
  title: string
  description: string
}

// Bad
const project: any = { id: "1", title: "My Project" }
```

### Naming Conventions

- **Files**: Use kebab-case for file names
  ```
  components/contact-form.tsx
  lib/portfolio-data.ts
  ```

- **Components**: Use PascalCase for React components
  ```typescript
  export function ContactForm() { }
  export function SkillCard() { }
  ```

- **Functions**: Use camelCase for utility functions
  ```typescript
  export function isValidEmail() { }
  export function sanitizeInput() { }
  ```

- **Constants**: Use UPPER_SNAKE_CASE
  ```typescript
  const MAX_FILE_SIZE = 5 * 1024 * 1024
  ```

### JSDoc Comments

All components and functions must have JSDoc comments:

```typescript
/**
 * Brief description of what the component does
 * 
 * Longer description explaining purpose, behavior,
 * and any important implementation details.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The title text
 * @param {boolean} props.isActive - Whether active
 * @returns {React.ReactElement} The rendered component
 */
export function MyComponent({ title, isActive }: Props) {
  // implementation
}
```

## Component Development

### Creating a New Component

1. **Create the file** in `components/` directory
2. **Add TypeScript types** for props
3. **Write JSDoc comment** for documentation
4. **Implement component logic**
5. **Add styling** using Tailwind CSS
6. **Export from component** file

```typescript
/**
 * Example: Creating a new section component
 */

interface ExampleSectionProps {
  title: string
  description: string
}

/**
 * Example section component
 * @component
 */
export function ExampleSection({ title, description }: ExampleSectionProps) {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-foreground/80">{description}</p>
    </section>
  )
}
```

### Component Best Practices

- Keep components focused and single-responsibility
- Use composition over inheritance
- Memoize expensive components with `React.memo`
- Use `useCallback` for stable function references
- Implement proper error boundaries
- Add keyboard navigation support
- Test component accessibility

## Styling Guidelines

### Tailwind CSS

- Use Tailwind utility classes for styling
- Prefer predefined spacing scale: `p-4`, `m-8`, `gap-6`
- Use semantic color tokens: `bg-primary`, `text-foreground`
- Mobile-first responsive design with prefixes: `md:`, `lg:`

```typescript
// Good
<div className="p-4 md:p-8 lg:p-12 bg-card rounded-lg border border-border">
  
// Bad
<div style={{ padding: '16px' }} className="border">
```

### Custom Styles

Only create custom CSS for:
- Global animations
- Complex layouts requiring CSS features
- Performance-critical styles
- CSS variables and custom properties

Add to `globals.css`:

```css
@layer utilities {
  .my-custom-class {
    @apply flex items-center justify-center;
  }
}
```

## Performance Tips

### Code Splitting

- Lazy load heavy components
- Use dynamic imports for large libraries

```typescript
const HeavyComponent = dynamic(() => import("@/components/heavy"), {
  loading: () => <div>Loading...</div>,
})
```

### Image Optimization

- Always use `next/image` for images
- Provide `width` and `height` for proper sizing
- Use appropriate image formats (WebP, AVIF)

```typescript
<Image
  src="/portfolio-image.jpg"
  alt="Portfolio project"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

### Bundle Size

- Monitor bundle size with `npm run analyze`
- Remove unused dependencies
- Tree-shake unused code
- Optimize imports

## Troubleshooting

### Common Issues

#### Styles Not Applying

1. Check if class names are spelled correctly
2. Verify Tailwind CSS is imported in `globals.css`
3. Restart development server
4. Clear `.next` folder: `rm -rf .next`

#### Build Errors

1. Run `npm install` to update dependencies
2. Check TypeScript errors: `npm run type-check`
3. Clear cache: `rm -rf node_modules .next`
4. Reinstall: `npm install`

#### Performance Issues

1. Check Network tab in DevTools
2. Use Next.js Analytics in production
3. Profile with React DevTools
4. Check for unnecessary re-renders

### Getting Help

- Check Next.js docs: https://nextjs.org/docs
- Review TypeScript docs: https://www.typescriptlang.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- Open GitHub issues for bugs
