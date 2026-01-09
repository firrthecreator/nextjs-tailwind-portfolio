/**
 * @fileoverview Scroll progress indicator component
 * Shows progress through the page as user scrolls
 */

"use client"

import type React from "react"

import { useEffect, useState } from "react"

/**
 * Scroll progress bar component
 * Displays a progress indicator at the top of the page
 *
 * @component
 * @returns {React.ReactElement} Scroll progress bar
 */
export function ScrollProgress(): React.ReactElement {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / scrollHeight) * 100
      setProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary z-50 transition-all duration-300"
      style={{ width: `${progress}%` }}
    />
  )
}
