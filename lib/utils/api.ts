/**
 * @fileoverview API utility functions
 * Provides helper functions for API calls and data fetching
 */

/**
 * Enhanced fetch with error handling
 * Wraps native fetch with consistent error handling
 *
 * @template T - Response data type
 * @param {string} url - API endpoint URL
 * @param {RequestInit} options - Fetch options
 * @returns {Promise<T>} Parsed response data
 * @throws {Error} If fetch fails or response is not ok
 */
export async function fetchData<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    return (await response.json()) as T
  } catch (error) {
    console.error("Fetch error:", error)
    throw error
  }
}

/**
 * Delay execution for specified milliseconds
 * Useful for animations and debouncing
 *
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise<void>} Promise that resolves after delay
 */
export async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Debounce function execution
 * Prevents rapid repeated calls
 *
 * @template T - Function type
 * @param {T} func - Function to debounce
 * @param {number} wait - Debounce delay in milliseconds
 * @returns {(...args: Parameters<T>) => void} Debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
