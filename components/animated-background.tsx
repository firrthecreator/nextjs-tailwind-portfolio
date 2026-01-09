/**
 * @fileoverview Animated background effects component
 * Provides decorative animated elements for visual enhancement
 */

"use client"

import type React from "react"

/**
 * Animated background gradient orbs component
 * Creates a subtle, animated background effect
 *
 * @component
 * @returns {React.ReactElement} Animated background element
 */
export function AnimatedBackground(): React.ReactElement {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient Orbs - animated background */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
      <div className="absolute -bottom-40 left-40 w-80 h-80 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000" />
    </div>
  )
}
