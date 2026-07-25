'use client'

import { motion } from 'framer-motion'

interface TechBadgeProps {
  label: string
  variant?: 'default' | 'accent'
}

export function TechBadge({ label, variant = 'default' }: TechBadgeProps) {
  const baseClass = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium'
  const variantClass =
    variant === 'accent'
      ? 'bg-accent/20 text-accent border border-accent/50'
      : 'bg-muted/50 text-foreground border border-border/50'

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`${baseClass} ${variantClass}`}
    >
      {label}
    </motion.span>
  )
}
