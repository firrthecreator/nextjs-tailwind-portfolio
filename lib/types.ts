/**
 * @fileoverview Type definitions and interfaces for the portfolio application
 * Provides comprehensive type safety across all portfolio components
 */

/**
 * Represents a skill with category and proficiency level
 * @interface Skill
 * @property {string} name - Name of the skill
 * @property {string} category - Category of the skill (e.g., 'Frontend', 'Backend', 'DevOps')
 * @property {number} proficiency - Proficiency level (1-5)
 * @property {string[]} keywords - Related keywords/tags
 */
export interface Skill {
  name: string
  category: "Frontend" | "Backend" | "DevOps" | "Tools" | "Languages"
  proficiency: number
  keywords: string[]
}

/**
 * Represents a portfolio project
 * @interface Project
 * @property {string} id - Unique identifier for the project
 * @property {string} title - Project title
 * @property {string} description - Project description
 * @property {string} image - Project thumbnail image URL
 * @property {string[]} technologies - Array of technologies used
 * @property {string} link - External link to project
 * @property {string} github - GitHub repository link
 * @property {string[]} features - Key features of the project
 */
export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  github: string
  features: string[]
}

/**
 * Represents social media or contact links
 * @interface SocialLink
 * @property {string} platform - Platform name (e.g., 'GitHub', 'LinkedIn')
 * @property {string} url - URL to the social profile
 * @property {string} icon - Icon identifier
 */
export interface SocialLink {
  platform: string
  url: string
  icon: string
}

/**
 * Portfolio configuration and metadata
 * @interface PortfolioConfig
 * @property {string} name - Developer name
 * @property {number} age - Developer age
 * @property {string} title - Professional title
 * @property {string} bio - Short biography
 * @property {string} email - Contact email
 */
export interface PortfolioConfig {
  name: string
  age: number
  title: string
  bio: string
  email: string
}
