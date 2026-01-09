/**
 * @fileoverview Scroll to top button component
 * Provides quick navigation back to page top
 */

"use client"

import type React from "react"

import { useEffect, useState } from "react"

/**
 * Scroll to top button component
 * Shows button when user scrolls down, animates back to top
 *
 * @component
 * @returns {React.ReactElement | null} Scroll to top button or null if not needed
 */
export function ScrollToTop(): React.ReactElement | null {
  const [isVisible, setIsVisible] = useState(false)

  /**
   * Handle scroll event to show/hide button
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /**
   * Smooth scroll to top
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:opacity-90 transition-opacity animate-fade-in-up"
      aria-label="Scroll to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0l-7 7m7-7v12" />
      </svg>
    </button>
  )
}
