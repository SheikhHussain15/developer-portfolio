'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="hidden lg:block fixed pointer-events-none mix-blend-screen"
      animate={{
        x: mousePosition.x - 24,
        y: mousePosition.y - 24,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent/40 to-accent/0 blur-2xl" />
    </motion.div>
  )
}
