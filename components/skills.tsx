/**
 * @fileoverview Skills section component
 * Displays technical skills organized by category with proficiency levels
 */

"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { skills } from "@/lib/portfolio-data"

/**
 * Skill card component for individual skill display
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.name - Skill name
 * @param {number} props.proficiency - Proficiency level (1-5)
 * @param {string[]} props.keywords - Related keywords
 * @returns {React.ReactElement} Skill card element
 */
function SkillCard({ name, proficiency, keywords }: { name: string; proficiency: number; keywords: string[] }) {
  return (
    <div className="group p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all hover:bg-card/80 cursor-pointer">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-foreground">{name}</h4>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${i < proficiency ? "bg-primary" : "bg-border"}`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <span key={keyword} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
            {keyword}
          </span>
        ))}
      </div>
    </div>
  )
}

/**
 * Skills section component with categorized skill display
 * Groups skills by category and shows proficiency levels
 *
 * @component
 * @returns {React.ReactElement} Skills section element
 */
export function Skills(): React.ReactElement {
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

  /**
   * Group skills by category
   */
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof skills>,
  )

  const categoryOrder = ["Languages", "Frontend", "Backend", "DevOps", "Tools", "OS"]

  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
      <div ref={sectionRef} className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-bold">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and programming languages I use to build solutions
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {categoryOrder.map((category) => {
            const categorySkills = skillsByCategory[category]
            if (!categorySkills) return null

            return (
              <div
                key={category}
                className={`transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h3 className="text-xl font-bold mb-6 text-primary">{category}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySkills.map((skill) => (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      proficiency={skill.proficiency}
                      keywords={skill.keywords}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
