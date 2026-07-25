'use client'

import { useEffect, useRef } from 'react'

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create stars
    const stars: Array<{ x: number; y: number; radius: number; opacity: number; targetOpacity: number }> = []
    const starCount = 150

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.7 + 0.3,
        targetOpacity: Math.random() * 0.7 + 0.3,
      })
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      // Clear canvas with dark background
      ctx.fillStyle = '#0a0e27'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and animate stars
      stars.forEach((star) => {
        // Smoothly transition opacity for twinkling effect
        star.opacity += (star.targetOpacity - star.opacity) * 0.05
        if (Math.abs(star.opacity - star.targetOpacity) < 0.02) {
          star.targetOpacity = Math.random() * 0.7 + 0.3
        }

        // Draw star
        ctx.fillStyle = `rgba(232, 228, 208, ${star.opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
