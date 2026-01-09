/**
 * @fileoverview Hero section component
 * Displays the main landing section with introduction and call-to-action
 */

"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { portfolioConfig } from "@/lib/portfolio-data"

/**
 * Hero component with animated introduction and action buttons
 * Features gradient text, animated elements, and responsive design
 *
 * @component
 * @returns {React.ReactElement} Hero section element
 */
export function Hero(): React.ReactElement {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20 animate-float animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <div
          className={`transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">Hello, Welcome</p>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-foreground">I'm </span>
          <span className="text-gradient">{portfolioConfig.name.split(" ")[0]}</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl sm:text-2xl text-muted-foreground mb-8 transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {portfolioConfig.title}
        </p>

        {/* Description */}
        <p
          className={`text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {portfolioConfig.bio}
        </p>

        {/* Info badges */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary/50 transition-colors">
            <span className="text-primary font-semibold">{portfolioConfig.age} years old</span> • Developer
          </span>
          <span className="inline-block px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary/50 transition-colors">
            Full Stack • Open Source
          </span>
        </div>

        {/* Call to action buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity hover-scale"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:border-primary/50 transition-colors hover-scale"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
