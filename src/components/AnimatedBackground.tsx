"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []
    let mouseX = 0
    let mouseY = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      // Significantly increased particle count for a very rich background
      const particleCount = Math.floor((canvas.width * canvas.height) / 4500)

      for (let i = 0; i < particleCount; i++) {
        // Randomly assign colors to particles
        const colors = [
          'rgba(59, 130, 246, ', // Blue
          'rgba(139, 92, 246, ', // Purple
          'rgba(236, 72, 153, ', // Pink
        ]
        const baseColor = colors[Math.floor(Math.random() * colors.length)]

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.6 + 0.1,
          color: baseColor,
        })
      }
    }

    const drawParticle = (p: Particle) => {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = `${p.color}${p.opacity})`
      ctx.fill()
    }

    const drawConnections = () => {
      // Limit connections for performance
      const maxDist = 120
      for (let i = 0; i < particles.length; i++) {
        // Only check every 2nd particle for connections to save CPU if count is high
        if (particles.length > 200 && i % 2 !== 0) continue

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDist) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)

            const connectionColor = particles[i].color
            ctx.strokeStyle = `${connectionColor}${0.18 * (1 - dist / maxDist)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
    }

    const updateParticle = (p: Particle) => {
      // Mouse interaction
      const dx = mouseX - p.x
      const dy = mouseY - p.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < 150) {
        const force = (150 - dist) / 150
        p.vx -= (dx / dist) * force * 0.02
        p.vy -= (dy / dist) * force * 0.02
      }

      p.x += p.vx
      p.y += p.vy

      // Friction
      p.vx *= 0.99
      p.vy *= 0.99

      // Bounds
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1

      // Keep in bounds
      p.x = Math.max(0, Math.min(canvas.width, p.x))
      p.y = Math.max(0, Math.min(canvas.height, p.y))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        updateParticle(p)
        drawParticle(p)
      })

      drawConnections()
      animationId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)

    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  )
}

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large blue orb */}
      <div
        className="orb-1 absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          top: "-10%",
          right: "-10%",
          filter: "blur(40px)",
        }}
      />

      {/* Purple orb */}
      <div
        className="orb-2 absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)",
          bottom: "10%",
          left: "-5%",
          filter: "blur(40px)",
        }}
      />

      {/* Pink orb */}
      <div
        className="orb-3 absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)",
          top: "40%",
          right: "20%",
          filter: "blur(30px)",
        }}
      />

      {/* Small accent orbs */}
      <div
        className="orb-2 absolute w-[150px] h-[150px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
          top: "60%",
          left: "30%",
          filter: "blur(20px)",
        }}
      />

      {/* Additional dynamic orbs */}
      <div
        className="orb-1 absolute w-[250px] h-[250px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          bottom: "40%",
          right: "10%",
          filter: "blur(30px)",
        }}
      />

      <div
        className="orb-3 absolute w-[200px] h-[200px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          top: "20%",
          left: "15%",
          filter: "blur(25px)",
        }}
      />
    </div>
  )
}

export function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.08), transparent)",
        }}
      />
    </div>
  )
}
