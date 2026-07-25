'use client'

import { motion } from 'framer-motion'
import { ReactNode, useState, useRef, useEffect } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  strength?: number
  href?: string
  target?: string
  rel?: string
}

export function MagneticButton({
  children,
  onClick,
  className = '',
  strength = 0.3,
  href,
  target,
  rel,
}: MagneticButtonProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isHovering || !buttonRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = buttonRef.current!.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distX = e.clientX - centerX
      const distY = e.clientY - centerY

      setMousePosition({ x: distX, y: distY })
      setButtonPosition({
        x: distX * strength,
        y: distY * strength,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isHovering, strength])

  const commonProps = {
    ref: buttonRef,
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => {
      setIsHovering(false)
      setButtonPosition({ x: 0, y: 0 })
    },
  }

  const baseComponent = (
    <motion.div
      {...commonProps}
      animate={buttonPosition}
      transition={{ type: 'spring', damping: 15, stiffness: 250, mass: 0.5 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel}>
        {baseComponent}
      </a>
    )
  }

  return baseComponent
}
