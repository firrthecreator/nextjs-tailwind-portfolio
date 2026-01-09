/**
 * @fileoverview Main portfolio page
 * Combines all sections into a complete portfolio website
 */

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

/**
 * Home page component that assembles all portfolio sections
 * Provides a complete scrollable portfolio experience
 *
 * @component
 * @returns {React.ReactElement} Complete portfolio page
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  )
}
