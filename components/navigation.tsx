/**
 * @fileoverview Navigation component for portfolio
 * Displays header with responsive navigation menu
 */

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"

/**
 * Navigation component with smooth scrolling and responsive design
 * Includes dark background and accent color styling
 *
 * @component
 * @returns {React.ReactElement} Navigation header element
 */
export function Navigation(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  /**
   * Handle scroll event to add background when scrolled
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /**
   * Navigation items with section links
   */
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            AF
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <div className={`w-6 h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <div
              className={`w-6 h-0.5 bg-foreground transition-all ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="block mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center text-sm font-medium"
            >
              Get In Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
