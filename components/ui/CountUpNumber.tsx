'use client'

import { useState, useEffect } from 'react'

interface CountUpNumberProps {
  end: number
  duration?: number
  start?: number
  suffix?: string
}

export function CountUpNumber({ end, duration = 2, start = 0, suffix = '' }: CountUpNumberProps) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let animationFrameId: number
    const startTime = Date.now()
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const newCount = Math.floor(start + (end - start) * progress)
      setCount(newCount)
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }
    
    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [end, duration, start])

  return <span>{count}{suffix}</span>
}
