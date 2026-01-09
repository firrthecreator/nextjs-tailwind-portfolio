/**
 * @fileoverview Application constants and configuration
 * Centralized constant values used throughout the application
 */

/**
 * Navigation sections for smooth scrolling
 */
export const NAV_SECTIONS = {
  ABOUT: "#about",
  SKILLS: "#skills",
  PROJECTS: "#projects",
  CONTACT: "#contact",
} as const

/**
 * Animation timing values in milliseconds
 */
export const ANIMATION_TIMINGS = {
  FAST: 300,
  MEDIUM: 500,
  SLOW: 700,
  VERY_SLOW: 1000,
} as const

/**
 * Breakpoints for responsive design (matching Tailwind)
 */
export const BREAKPOINTS = {
  MOBILE: 320,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE: 1280,
} as const

/**
 * SEO and metadata
 */
export const SEO = {
  SITE_NAME: "Ananda Firmansyah",
  SITE_DESCRIPTION: "Full Stack Developer Portfolio - JavaScript, TypeScript, Go, C++, Rust, Python",
  SITE_URL: "https://firrthecreator.vercel.app", // Update with your domain
  TWITTER_HANDLE: "@firrthecreator",
  GITHUB_URL: "https://github.com/firrthecreator",
} as const

/**
 * Social media configuration
 */
export const SOCIAL_MEDIA = {
  GITHUB: "https://github.com/firrthecreator",
  LINKEDIN: "https://linkedin.com/in/firrthecreator",
  TWITTER: "https://twitter.com/firrthecreator",
  EMAIL: "firrthecreator@gmail.com",
} as const
