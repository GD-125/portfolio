"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface GlitchHeadingProps {
  text: string
  className?: string
  glitchClassName?: string
  as?: React.ElementType
  glitchIntensity?: "low" | "medium" | "high"
  glitchFrequency?: "rare" | "occasional" | "frequent"
}

export function GlitchHeading({
  text,
  className,
  glitchClassName,
  as: Component = "h2",
  glitchIntensity = "medium",
  glitchFrequency = "occasional",
}: GlitchHeadingProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  // Characters to use for glitching
  const glitchChars = "!<>-_\\/[]{}—=+*^?#________"

  // Configure glitch parameters based on intensity and frequency
  const getGlitchParams = () => {
    const intensityMap = {
      low: { charChangePercent: 0.1, maxGlitchDuration: 100 },
      medium: { charChangePercent: 0.2, maxGlitchDuration: 200 },
      high: { charChangePercent: 0.4, maxGlitchDuration: 300 },
    }

    const frequencyMap = {
      rare: { minInterval: 5000, maxInterval: 10000 },
      occasional: { minInterval: 2000, maxInterval: 5000 },
      frequent: { minInterval: 500, maxInterval: 2000 },
    }

    return {
      ...intensityMap[glitchIntensity],
      ...frequencyMap[glitchFrequency],
    }
  }

  useEffect(() => {
    const params = getGlitchParams()

    // Function to create a glitched version of the text
    const glitchText = () => {
      const chars = text.split("")
      const numCharsToChange = Math.floor(chars.length * params.charChangePercent)

      for (let i = 0; i < numCharsToChange; i++) {
        const idx = Math.floor(Math.random() * chars.length)
        const glitchChar = glitchChars[Math.floor(Math.random() * glitchChars.length)]
        chars[idx] = glitchChar
      }

      return chars.join("")
    }

    // Function to trigger a glitch effect
    const triggerGlitch = () => {
      setIsGlitching(true)

      // Create a sequence of glitches
      const glitchDuration = Math.random() * params.maxGlitchDuration
      const numGlitches = Math.floor(Math.random() * 3) + 1
      const glitchInterval = glitchDuration / numGlitches

      let glitchCount = 0

      const glitchSequence = setInterval(() => {
        if (glitchCount % 2 === 0) {
          // Show glitched text
          setDisplayText(glitchText())
        } else {
          // Restore original text
          setDisplayText(text)
        }

        glitchCount++

        if (glitchCount >= numGlitches * 2) {
          clearInterval(glitchSequence)
          setDisplayText(text)
          setIsGlitching(false)
        }
      }, glitchInterval)
    }

    // Set up random glitch intervals
    const scheduleNextGlitch = () => {
      const nextGlitchDelay = params.minInterval + Math.random() * (params.maxInterval - params.minInterval)
      return setTimeout(() => {
        triggerGlitch()
        glitchTimerRef.current = scheduleNextGlitch()
      }, nextGlitchDelay)
    }

    const glitchTimerRef = { current: null as NodeJS.Timeout | null }
    glitchTimerRef.current = scheduleNextGlitch()

    // Clean up
    return () => {
      if (glitchTimerRef.current) {
        clearTimeout(glitchTimerRef.current)
      }
    }
  }, [text, glitchIntensity, glitchFrequency])

  return (
    <Component
      className={cn(
        "inline-block relative text-gradient-tri cyber-text-shadow",
        isGlitching && "animate-glitch",
        className,
      )}
      data-text={displayText}
    >
      {displayText}
      {isGlitching && (
        <>
          <span
            className={cn(
              "absolute top-0 left-0 w-full h-full",
              "before:content-[attr(data-text)] before:absolute before:left-[2px] before:text-[#ff00ff] before:overflow-hidden before:clip-path-[inset(0_0_0_0)]",
              "after:content-[attr(data-text)] after:absolute after:left-[-2px] after:text-[#00ffff] after:overflow-hidden after:clip-path-[inset(0_0_0_0)]",
              glitchClassName,
            )}
            data-text={displayText}
            aria-hidden="true"
          />
        </>
      )}
    </Component>
  )
}

