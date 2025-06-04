"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "glass-effect" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 transition-colors hover:text-primary group">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <span className="text-lg font-bold">GURUCHANDHRAN M</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/projects" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/certifications"
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            Certifications
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/publications"
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            Publications
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="default" size="sm" className="hidden md:flex cyber-button" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5 text-primary" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 glass-effect animate-in slide-in-from-top">
          <nav className="container flex flex-col gap-6 p-6">
            <Link
              href="/"
              className="flex items-center justify-between py-4 text-lg font-medium border-b border-primary/20 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="flex items-center justify-between py-4 text-lg font-medium border-b border-primary/20 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="flex items-center justify-between py-4 text-lg font-medium border-b border-primary/20 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/certifications"
              className="flex items-center justify-between py-4 text-lg font-medium border-b border-primary/20 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Certifications
            </Link>
            <Link
              href="/publications"
              className="flex items-center justify-between py-4 text-lg font-medium border-b border-primary/20 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Publications
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-between py-4 text-lg font-medium border-b border-primary/20 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button variant="default" className="mt-4 cyber-button" asChild onClick={() => setIsMobileMenuOpen(false)}>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

