"use client"

import { useEffect, useRef, useState } from "react"

export default function CountUp({
  end,
  duration = 1600,
  className = "",
}: {
  end: number
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame: number
    let raf: number
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(eased * end))
          if (progress < 1) {
            frame = requestAnimationFrame(tick)
          }
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      cancelAnimationFrame(raf)
    }
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}