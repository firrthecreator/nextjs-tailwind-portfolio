/**
 * @fileoverview Utility function for conditional classname merging
 * Provides type-safe class concatenation
 */

import { clsx, type ClassValue } from "clsx"

/**
 * Merge and deduplicate Tailwind CSS classes
 * Handles conflicting class names intelligently
 *
 * @param {...ClassValue[]} inputs - Class names or conditional objects
 * @returns {string} Merged class string
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs)
}
