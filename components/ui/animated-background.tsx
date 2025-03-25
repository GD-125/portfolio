"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedBackgroundProps {
  className?: string
  variant?: "matrix" | "circuit" | "hexagon" | "cyber"
  density?: "low" | "medium" | "high"
  speed?: "slow" | "medium" | "fast"
  color?: string
  interactive?: boolean
}

export function AnimatedBackground({
  className,
  variant = "matrix",
  density = "medium",
  speed = "medium",
  color,
  interactive = true,
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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

    // Matrix effect
    if (variant === "matrix") {
      const drops: number[] = []
      const fontSize = density === "low" ? 14 : density === "medium" ? 12 : 10
      const columns = Math.floor(canvas.width / fontSize)
      const speedFactor = speed === "slow" ? 0.5 : speed === "medium" ? 1 : 2

      // Initialize drops
      for (let i = 0; i < columns; i++) {
        drops[i] = 1
      }

      const matrix = () => {
        // Black with opacity for trail effect
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Set color and font
        ctx.fillStyle = color || "#0fa"
        ctx.font = `${fontSize}px monospace`

        // Draw characters
        for (let i = 0; i < drops.length; i++) {
          // Random character
          const text = String.fromCharCode(Math.random() * 128)

          // x = i * fontSize, y = drops[i] * fontSize
          ctx.fillText(text, i * fontSize, drops[i] * fontSize)

          // Randomly reset drop position
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }

          // Move drop
          drops[i] += speedFactor * 0.2
        }
      }

      const interval = setInterval(matrix, 33)
      return () => {
        clearInterval(interval)
        window.removeEventListener("resize", resizeCanvas)
      }
    }

    // Circuit effect
    if (variant === "circuit") {
      const nodes: { x: number; y: number; connections: number[] }[] = []
      const nodeCount = density === "low" ? 30 : density === "medium" ? 50 : 80
      const speedFactor = speed === "slow" ? 0.5 : speed === "medium" ? 1 : 2

      // Create nodes
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          connections: [],
        })
      }

      // Connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const connectionsCount = Math.floor(Math.random() * 3) + 1
        for (let j = 0; j < connectionsCount; j++) {
          const target = Math.floor(Math.random() * nodes.length)
          if (target !== i && !nodes[i].connections.includes(target)) {
            nodes[i].connections.push(target)
          }
        }
      }

      let time = 0

      const drawCircuit = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw connections
        ctx.strokeStyle = color || "rgba(0, 102, 204, 0.3)"
        ctx.lineWidth = 1

        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i]
          for (const targetIndex of node.connections) {
            const target = nodes[targetIndex]

            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(target.x, target.y)
            ctx.stroke()

            // Animate data packet
            const packetPos = (time * speedFactor) % 1
            const packetX = node.x + (target.x - node.x) * packetPos
            const packetY = node.y + (target.y - node.y) * packetPos

            ctx.fillStyle = color || "rgba(0, 204, 204, 0.8)"
            ctx.beginPath()
            ctx.arc(packetX, packetY, 2, 0, Math.PI * 2)
            ctx.fill()
          }
        }

        // Draw nodes
        for (const node of nodes) {
          ctx.fillStyle = color || "rgba(0, 102, 204, 0.5)"
          ctx.beginPath()
          ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
          ctx.fill()
        }

        time += 0.01
      }

      const interval = setInterval(drawCircuit, 33)
      return () => {
        clearInterval(interval)
        window.removeEventListener("resize", resizeCanvas)
      }
    }

    // Hexagon grid effect
    if (variant === "hexagon") {
      const hexSize = density === "low" ? 40 : density === "medium" ? 30 : 20
      const speedFactor = speed === "slow" ? 0.5 : speed === "medium" ? 1 : 2

      let time = 0

      const drawHexagons = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const cols = Math.ceil(canvas.width / (hexSize * 1.5)) + 1
        const rows = Math.ceil(canvas.height / (hexSize * Math.sqrt(3))) + 1

        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            const x = j * hexSize * 1.5
            const y = i * hexSize * Math.sqrt(3) + (j % 2 === 0 ? 0 : (hexSize * Math.sqrt(3)) / 2)

            // Pulse effect
            const pulse = Math.sin(time * speedFactor + i * 0.1 + j * 0.1) * 0.5 + 0.5

            ctx.strokeStyle = color || `rgba(0, 102, 204, ${0.1 + pulse * 0.2})`
            ctx.lineWidth = 1

            // Draw hexagon
            ctx.beginPath()
            for (let k = 0; k < 6; k++) {
              const angle = (Math.PI / 3) * k
              const hx = x + hexSize * Math.cos(angle)
              const hy = y + hexSize * Math.sin(angle)

              if (k === 0) {
                ctx.moveTo(hx, hy)
              } else {
                ctx.lineTo(hx, hy)
              }
            }
            ctx.closePath()
            ctx.stroke()
          }
        }

        time += 0.01
      }

      const interval = setInterval(drawHexagons, 33)
      return () => {
        clearInterval(interval)
        window.removeEventListener("resize", resizeCanvas)
      }
    }

    // Cyber particles effect
    if (variant === "cyber") {
      const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = []
      const particleCount = density === "low" ? 50 : density === "medium" ? 100 : 200
      const speedFactor = speed === "slow" ? 0.5 : speed === "medium" ? 1 : 2

      // Create particles
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

      const drawParticles = () => {
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
          ctx.fillStyle = color || "rgba(0, 204, 204, 0.8)"
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
        }

        // Draw connections
        ctx.strokeStyle = color || "rgba(0, 102, 204, 0.2)"
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
      }

      const interval = setInterval(drawParticles, 33)
      return () => {
        clearInterval(interval)
        window.removeEventListener("resize", resizeCanvas)
      }
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [variant, density, speed, color, interactive])

  return (
    <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden", className)}>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}

