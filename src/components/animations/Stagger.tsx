'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface StaggerProps {
  children: React.ReactNode
  delay?: number
  staggerDelay?: number
  className?: string
}

export const Stagger = ({ children, delay = 0, staggerDelay = 0.1, className }: StaggerProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      }
    }
  }

  const item: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
