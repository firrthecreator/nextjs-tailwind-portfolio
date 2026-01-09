/**
 * @fileoverview Footer component
 * Displays copyright information and quick navigation links
 */

import type React from "react"
import Link from "next/link"
import { portfolioConfig } from "@/lib/portfolio-data"

/**
 * Footer component with copyright and links
 *
 * @component
 * @returns {React.ReactElement} Footer element
 */
export function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              AF
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              {portfolioConfig.name} - Full Stack Developer specializing in modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: "GitHub", href: "https://github.com/firrthecreator" },
                { label: "LinkedIn", href: "https://linkedin.com/in/firrthecreator" },
                { label: "Twitter", href: "https://twitter.com/firrthecreator" },
                { label: "Email", href: "mailto:firrthecreator@gmail.com" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {portfolioConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-primary font-semibold">Next.js</span>,{" "}
            <span className="text-primary font-semibold">TypeScript</span>, and{" "}
            <span className="text-primary font-semibold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
