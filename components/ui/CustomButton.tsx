'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CustomButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

export function CustomButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
}: CustomButtonProps) {
  const baseClass =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer'

  const variantClass = {
    primary: 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-accent/20',
    secondary: 'bg-card border border-border text-foreground hover:border-accent/50 hover:bg-card/80',
    outline: 'border-2 border-accent text-accent hover:bg-accent/10',
  }[variant]

  const combinedClass = `${baseClass} ${variantClass} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={combinedClass}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={combinedClass}
    >
      {children}
    </motion.button>
  )
}
