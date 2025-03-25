"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function ScrollReveal({ children, className, threshold = 0.1, delay = 0, direction = "up" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "0px",
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const getDirectionStyles = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translate-y-10 opacity-0"
        case "down":
          return "translate-y-[-10px] opacity-0"
        case "left":
          return "translate-x-10 opacity-0"
        case "right":
          return "translate-x-[-10px] opacity-0"
        case "none":
          return "opacity-0"
        default:
          return "translate-y-10 opacity-0"
      }
    }
    return "translate-y-0 translate-x-0 opacity-100"
  }

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-700 ease-out", getDirectionStyles(), className)}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

