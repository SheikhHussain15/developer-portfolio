'use client'

import { useCountUp } from 'react-countup'
import { useEffect } from 'react'

interface CountUpNumberProps {
  end: number
  duration?: number
  start?: number
  suffix?: string
}

export function CountUpNumber({ end, duration = 2, start = 0, suffix = '' }: CountUpNumberProps) {
  const { countUp } = useCountUp({
    start,
    end,
    duration,
  })

  useEffect(() => {
    countUp()
  }, [countUp])

  return <span>{countUp()}{suffix}</span>
}
