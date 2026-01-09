/**
 * @fileoverview Validation utility functions
 * Provides common validation helpers for forms and data
 */

/**
 * Validate email format
 *
 * @param {string} email - Email to validate
 * @returns {boolean} Whether email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate URL format
 *
 * @param {string} url - URL to validate
 * @returns {boolean} Whether URL is valid
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Sanitize string input
 * Removes potential XSS vectors
 *
 * @param {string} input - String to sanitize
 * @returns {string} Sanitized string
 */
export function sanitizeInput(input: string): string {
  const element = document.createElement("div")
  element.textContent = input
  return element.innerHTML
}

/**
 * Validate contact form data
 *
 * @param {Object} data - Form data
 * @returns {Object} Validation result with errors
 */
export function validateContactForm(data: { name: string; email: string; message: string }) {
  const errors: Record<string, string> = {}

  if (!data.name?.trim()) {
    errors.name = "Name is required"
  }

  if (!isValidEmail(data.email)) {
    errors.email = "Valid email is required"
  }

  if (!data.message?.trim() || data.message.length < 10) {
    errors.message = "Message must be at least 10 characters"
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
