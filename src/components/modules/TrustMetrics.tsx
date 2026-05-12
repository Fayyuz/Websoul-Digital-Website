'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  { label: 'Security breaches', value: 0, suffix: '', prefix: '0' },
  { label: 'On-shore delivery', value: 100, suffix: '%', prefix: '' },
  { label: 'Mean response time', value: 250, suffix: 'ms', prefix: '<' },
]

const Counter = ({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const stepTime = 20
      let start = 0
      const increment = target / (duration / stepTime)
      
      const timer = setInterval(() => {
        if (target === 0) {
           setCount(0)
           clearInterval(timer)
           return
        }
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, stepTime)
      
      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return (
    <span ref={ref} className="stat-number">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export const TrustMetrics = () => {
  return (
    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-brand-silver/30 mt-8">
      {metrics.map((metric, idx) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + idx * 0.1 }}
          className="text-center md:text-left"
        >
          <Counter target={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
          <p className="stat-label mt-2">{metric.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
