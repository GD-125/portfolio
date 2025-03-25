"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface ParticleBackgroundProps {
  className?: string
  density?: "low" | "medium" | "high"
  speed?: "slow" | "medium" | "fast"
  interactive?: boolean
}

export function ParticleBackground({
  className,
  density = "medium",
  speed = "medium",
  interactive = true,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size to match container
    const resizeCanvas = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Determine particle count based on density
    const getParticleCount = () => {
      const area = canvas.width * canvas.height
      const baseDensity = area / 10000

      switch (density) {
        case "low":
          return Math.floor(baseDensity * 50)
        case "high":
          return Math.floor(baseDensity * 150)
        default:
          return Math.floor(baseDensity * 100) // medium
      }
    }

    // Determine speed factor based on speed setting
    const getSpeedFactor = () => {
      switch (speed) {
        case "slow":
          return 0.5
        case "fast":
          return 2
        default:
          return 1 // medium
      }
    }

    const particleCount = getParticleCount()
    const speedFactor = getSpeedFactor()

    // Determine colors based on theme
    const getColors = () => {
      if (theme === "dark") {
        return {
          particle: "rgba(0, 204, 204, 0.8)",
          connection: "rgba(0, 102, 204, 0.2)",
        }
      } else {
        return {
          particle: "rgba(25, 70, 150, 0.8)",
          connection: "rgba(25, 70, 150, 0.2)",
        }
      }
    }

    const colors = getColors()

    // Create particles
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
    }[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * speedFactor,
        speedY: (Math.random() - 0.5) * speedFactor,
      })
    }

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0
    const mouseRadius = 100

    if (interactive) {
      canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect()
        mouseX = e.clientX - rect.left
        mouseY = e.clientY - rect.top
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (const particle of particles) {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Mouse interaction
        if (interactive) {
          const dx = mouseX - particle.x
          const dy = mouseY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouseRadius) {
            const angle = Math.atan2(dy, dx)
            const force = (mouseRadius - distance) / mouseRadius

            particle.speedX -= Math.cos(angle) * force * 0.2
            particle.speedY -= Math.sin(angle) * force * 0.2
          }
        }

        // Draw particle
        ctx.fillStyle = colors.particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw connections
      ctx.strokeStyle = colors.connection
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.globalAlpha = 1 - distance / 100
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [density, speed, interactive, theme])

  return (
    <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden", className)}>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}

