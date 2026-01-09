/**
 * @fileoverview About section component
 * Showcases developer background, experience, and journey
 */

"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

/**
 * About section component with timeline and professional background
 * Demonstrates experience and growth as a developer
 *
 * @component
 * @returns {React.ReactElement} About section element
 */
export function About(): React.ReactElement {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  /**
   * Intersection observer for scroll-triggered animations
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      year: "2026",
      title: "Freelance Full Stack Developer",
      description: "Building web applications for startups and small businesses using modern stack.",
    },
    {
      year: "2025",
      title: "Started Learning Backend Development",
      description: "Explored Go, Rust, and advanced Node.js patterns for scalable systems.",
    },
    {
      year: "2024",
      title: "Mastered React & Next.js",
      description: "Became proficient in modern React patterns and Next.js full-stack development.",
    },
    {
      year: "2023",
      title: "Began Programming Journey",
      description: "Started with JavaScript and built first interactive web projects.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <div ref={sectionRef} className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-bold">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer who loves creating beautiful and functional web experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                At 17 years old, I've developed a deep passion for full-stack web development. My journey started with
                curiosity about how the web works, and now I'm proficient in multiple programming languages and
                frameworks.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I believe in writing clean, maintainable code with proper documentation. My focus is on creating
                solutions that are not only technically sound but also user-friendly and performant.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                When I'm not coding, I'm learning new technologies, contributing to open-source projects, or exploring
                emerging web technologies.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
            </div>
          </div>

          {/* Right - Timeline */}
          <div
            className={`space-y-8 transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-bold mb-8">My Journey</h3>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-2.5" />
                <div className="absolute left-0 top-6 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
                <div className="space-y-2">
                  <p className="text-sm text-primary font-semibold">{exp.year}</p>
                  <h4 className="text-lg font-semibold">{exp.title}</h4>
                  <p className="text-foreground/70 text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
