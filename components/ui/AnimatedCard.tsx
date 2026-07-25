'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{
        duration: 0.5,
        delay,
        hover: { duration: 0.3 },
      }}
      viewport={{ once: true, margin: '-100px' }}
      className={`rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}
