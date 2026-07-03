'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  /** Valor final do contador */
  end: number
  /** Duração da animação em ms */
  duration?: number
  /** Prefixo antes do número (ex: "+") */
  prefix?: string
  /** Sufixo após o número (ex: "%", "h") */
  suffix?: string
  /** Casas decimais */
  decimals?: number
}

export function AnimatedCounter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateCount()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [end, duration])

  function animateCount() {
    const startTime = performance.now()

    function tick(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing: ease-out cubic para desacelerar no final
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentValue = easedProgress * end

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(tick)
  }

  const displayValue = decimals > 0
    ? count.toFixed(decimals)
    : Math.round(count).toString()

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  )
}

/**
 * Calcula anos de experiência desde 2016 (ano de início).
 * Retorna o número inteiro de anos completos.
 */
export function getYearsOfExperience(): number {
  const startYear = 2016
  const now = new Date()
  return now.getFullYear() - startYear
}
