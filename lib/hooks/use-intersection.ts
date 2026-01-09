"use client"

/**
 * @fileoverview Custom hook for Intersection Observer API
 * Simplifies scroll-triggered animations
 */

import { useEffect, useRef, useState } from "react"

/**
 * Custom hook for intersection observer
 * Triggers callback when element enters viewport
 *
 * @param {Object} options - Intersection observer options
 * @returns {Object} Ref to attach and visibility state
 * @returns {React.RefObject} ref - Ref to attach to element
 * @returns {boolean} isVisible - Whether element is in viewport
 */
export function useIntersection(options = { threshold: 0.1 }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options])

  return { ref, isVisible }
}
