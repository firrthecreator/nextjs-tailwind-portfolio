"use client"

/**
 * @fileoverview Custom hook for tracking scroll position
 * Useful for triggering animations and scroll-based effects
 */

import { useEffect, useState } from "react"

/**
 * Custom hook to track scroll position
 * Returns current scroll Y position and scroll direction
 *
 * @returns {Object} Scroll information
 * @returns {number} y - Current Y scroll position
 * @returns {boolean} isScrollingDown - Whether user is scrolling down
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  useEffect(() => {
    let lastScrollPosition = 0

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY
      setScrollPosition(currentScrollPosition)

      // Determine scroll direction
      if (currentScrollPosition > lastScrollPosition) {
        setIsScrollingDown(true)
      } else {
        setIsScrollingDown(false)
      }

      lastScrollPosition = currentScrollPosition
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { y: scrollPosition, isScrollingDown }
}
