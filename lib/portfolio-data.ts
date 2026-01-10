/**
 * @fileoverview Portfolio data and configuration
 * Contains all portfolio content including skills, projects, and personal information
 */

import type { Skill, Project, SocialLink, PortfolioConfig } from "./types"

/**
 * Portfolio configuration with personal information
 */
export const portfolioConfig: PortfolioConfig = {
  name: "Ananda Firmansyah",
  age: 17,
  title: "Full Stack Developer",
  bio: "Passionate full-stack developer with expertise in modern web technologies and programming languages. Focused on building scalable, performant applications with clean, maintainable code.",
  email: "firrthecreator@gmail.com",
}

/**
 * Array of technical skills organized by category
 * Skills are rated 1-5 for proficiency level
 */
export const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    proficiency: 5,
    keywords: ["JSX", "Hooks", "Component Design", "Performance Optimization"],
  },
  {
    name: "Next.js",
    category: "Frontend",
    proficiency: 5,
    keywords: ["Server Components", "API Routes", "SSG", "SSR"],
  },
  {
    name: "TypeScript",
    category: "Languages",
    proficiency: 5,
    keywords: ["Type Safety", "Generics", "Decorators", "Interfaces"],
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    proficiency: 5,
    keywords: ["Responsive Design", "Utility Classes", "Customization"],
  },
  {
    name: "JavaScript",
    category: "Languages",
    proficiency: 5,
    keywords: ["ES6+", "Async/Await", "DOM API", "Event Handling"],
  },

  // Backend
  {
    name: "Go",
    category: "Backend",
    proficiency: 4,
    keywords: ["Concurrency", "REST APIs", "goroutines", "Microservices"],
  },
  {
    name: "Python",
    category: "Backend",
    proficiency: 4,
    keywords: ["FastAPI", "Django", "Data Processing", "Scripting"],
  },
  {
    name: "Node.js",
    category: "Backend",
    proficiency: 5,
    keywords: ["Express", "Async", "npm ecosystem", "Server Architecture"],
  },
  {
    name: "C++",
    category: "Languages",
    proficiency: 4,
    keywords: ["OOP", "STL", "Performance Critical", "Game Development"],
  },
  {
    name: "Rust",
    category: "Languages",
    proficiency: 3,
    keywords: ["Memory Safety", "Concurrency", "Systems Programming"],
  },

  // Database & DevOps
  {
    name: "PostgreSQL",
    category: "Backend",
    proficiency: 4,
    keywords: ["SQL", "Normalization", "Indexing", "Transactions"],
  },
  {
    name: "MongoDB",
    category: "Backend",
    proficiency: 4,
    keywords: ["NoSQL", "Document Model", "Aggregation"],
  },
  {
    name: "Docker",
    category: "DevOps",
    proficiency: 4,
    keywords: ["Containerization", "Docker Compose", "Images"],
  },
  {
    name: "Git",
    category: "Tools",
    proficiency: 5,
    keywords: ["Version Control", "Branching", "Collaboration"],
  },

  // Tools
  {
    name: "VS Code",
    category: "Tools",
    proficiency: 5,
    keywords: ["Extensions", "Debugging", "Workflow"],
  },
]

/**
 * Featured projects showcasing technical expertise
 * Each project includes technologies, features, and links
 */
export const projects: Project[] = [
  {
    id: "project-1",
    title: "MyAnimeList Wrapper",
    description: "A refined TypeScript interface for the MyAnimeList API, engineered for seamless data fetching and full type safety.",
    image: "/myanimelist-wrapper-interface.png",
    technologies: ["Node.js", "TypeScript", "NPM"],
    link: "https://www.npmjs.com/package/myanimelist-wrapper",
    github: "https://github.com/firrthecreator/myanimelist-wrapper",
    features: [
      "Full TypeScript support with end-to-end type safety",
      "OAuth2 authentication flow simplified",
      "Built-in caching mechanism to reduce API calls",
      "Automatic rate-limit handling and request queuing",
      "Comprehensive methods for Anime, Manga, and User data",
      "Lightweight with zero heavy dependencies",
    ],
  },
  {
    id: "project-2",
    title: "Anilist Wrapper",
    description: "A sophisticated TypeScript interface for AniList, utilizing GraphQL to deliver a seamless and fully type-safe experience.",
    image: "/anilist-wrapper-interface.png",
    technologies: ["Node.js", "TypeScript", "GraphQL", "NPM"],
    link: "https://www.npmjs.com/package/anilist-wrapper",
    github: "https://github.com/firrthecreator/anilist-wrapper",
    features: [
      "Native GraphQL query builder for complex data fetching",
      "End-to-end type safety for all AniList media types",
      "Efficient handling of paginated results and media lists",
      "Optimized OAuth2 authentication for user-specific actions",
      "Advanced filtering system for Anime, Manga, and Characters",
    ],
  },
  {
    id: "project-3",
    title: "PixelArtify",
    description: "A refined C++ engine that distills images into minimalist pixel art. High-performance, header-only, and engineered for simplicity.",
    image: "/pixelartify-interface.png",
    technologies: ["C++", "STL", "Google Test"],
    link: "https://github.com/firrthecreator/PixelArtify",
    github: "https://github.com/firrthecreator/PixelArtify",
    features: [
      "Header-only C++ library (no build complexity)",
      "High-performance pixel art generation",
      "Image downscaling with color preservation",
      "Minimalist and clean pixel-art output",
      "Configurable pixel size and resolution",
      "Lightweight with zero external dependencies",
      "Cross-platform support (Windows, Linux, macOS)",
      "Easy integration into existing C++ projects",
    ],
  },
  {
    id: "project-4",
    title: "TermiPixel",
    description: "Lightweight C++ image-to-ASCII converter featuring adjustable resolution, brightness inversion, and URL-to-ASCII automation.",
    image: "/termipixel-interface.png",
    technologies: ["C++", "STL", "Google Test"],
    link: "https://github.com/firrthecreator/TermiPixel",
    github: "https://github.com/firrthecreator/TermiPixel",
    features: [
      "Fast image-to-ASCII conversion for terminal output",
      "Adjustable resolution and character density",
      "Cross-platform support (Windows, Linux, macOS)",
      "Brightness inversion for dark and light terminal themes",
      "Direct URL-to-ASCII image processing",
      "Lightweight and dependency-free C++ implementation",
    ],
  },
]

/**
 * Social media and contact links
 * Used for footer and contact sections
 */
export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/firrthecreator",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/firrthecreator",
    icon: "linkedin",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/firrthecreator",
    icon: "twitter",
  },
  {
    platform: "Email",
    url: "mailto:firrthecreator@gmail.com",
    icon: "mail",
  },
]
