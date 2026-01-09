/**
 * @fileoverview Projects showcase component
 * Displays featured projects with images, descriptions, and technologies
 */

"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { projects } from "@/lib/portfolio-data"

/**
 * Individual project card component
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Project title
 * @param {string} props.description - Project description
 * @param {string} props.image - Project image URL
 * @param {string[]} props.technologies - Array of technologies used
 * @param {string[]} props.features - Project features
 * @param {string} props.link - Project external link
 * @param {string} props.github - GitHub repository link
 * @returns {React.ReactElement} Project card element
 */
function ProjectCard({
  title,
  description,
  image,
  technologies,
  features,
  link,
  github,
}: {
  title: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  link: string
  github: string
}) {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-48 sm:h-64 overflow-hidden bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 space-y-4">
        {/* Title and Description */}
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Features - Expandable */}
        {showMore && (
          <div className="space-y-2 border-t border-border pt-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase">Key Features</p>
            <ul className="space-y-1">
              {features.map((feature, idx) => (
                <li key={idx} className="text-sm text-foreground/70 flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-4">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-3 py-2 text-xs bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors flex-1"
          >
            {showMore ? "Show Less" : "Details"}
          </button>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-xs bg-border rounded hover:bg-primary/50 transition-colors"
          >
            GitHub
          </a>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-xs bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  )
}

/**
 * Projects showcase section component
 * Displays featured projects in a responsive grid with interactive cards
 *
 * @component
 * @returns {React.ReactElement} Projects section element
 */
export function Projects(): React.ReactElement {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <div ref={sectionRef} className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcase of projects that demonstrate my full-stack development capabilities and problem-solving skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isInView ? `${index * 100}ms` : "0ms",
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center pt-8">
          <p className="text-muted-foreground mb-4">Want to see more projects?</p>
          <a
            href="https://github.com/firrthecreator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-card border border-primary/50 text-foreground rounded-lg hover:bg-primary/10 transition-colors font-semibold"
          >
            View GitHub Profile →
          </a>
        </div>
      </div>
    </section>
  )
}
