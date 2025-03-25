"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface TypewriterEffectProps {
  texts: string[]
  className?: string
  speed?: number
  delay?: number
}

export function TypewriterEffect({ texts, className, speed = 50, delay = 2000 }: TypewriterEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex]

      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1))

        // If we've typed the full text, start deleting after delay
        if (currentText === fullText) {
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true)
          }, delay)
          return
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1))

        // If we've deleted everything, move to next text
        if (currentText === "") {
          setIsDeleting(false)
          setCurrentTextIndex((currentTextIndex + 1) % texts.length)
          return
        }
      }

      // Set the next timeout with variable speed
      const typingSpeed = isDeleting ? speed / 2 : speed
      timeoutRef.current = setTimeout(handleTyping, typingSpeed)
    }

    timeoutRef.current = setTimeout(handleTyping, speed)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [currentText, currentTextIndex, isDeleting, texts, speed, delay])

  return (
    <p className={cn("", className)}>
      {currentText}
      <span className="inline-block w-1 h-5 ml-1 bg-primary animate-blink"></span>
    </p>
  )
}

