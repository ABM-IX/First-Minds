import { useEffect, useRef, useState } from 'react'

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

export default function CountUpStat({ value, label, suffix = '', duration = 1000 }) {
  const [displayValue, setDisplayValue] = useState(() => {
    if (typeof window === 'undefined') return value
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? value : 0
  })
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const element = ref.current
    if (!element) return undefined

    if (reduceMotion) {
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAnimated.current) return
      hasAnimated.current = true

      const startTime = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1)
        setDisplayValue(Math.round(value * easeOutCubic(progress)))

        if (progress < 1) {
          requestAnimationFrame(tick)
        }
      }

      requestAnimationFrame(tick)
      observer.disconnect()
    }, {
      threshold: 0.35
    })

    observer.observe(element)
    return () => observer.disconnect()
  }, [duration, value])

  return (
    <div ref={ref} className="stat-item" role="listitem">
      <div className="stat-value">
        {displayValue}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
