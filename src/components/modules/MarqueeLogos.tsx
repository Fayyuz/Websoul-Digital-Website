'use client'

import React from 'react'
import { motion } from 'framer-motion'

const logos = [
  'Australian Government',
  'Department of Defence',
  'Strategic Partners',
  'Tech Assurance',
  'Global Compliance',
  'Sovereign Security',
  'Enterprise Trust',
  'Digital Integrity'
]

export const MarqueeLogos = () => {
  return (
    <div className="py-12 bg-brand-pure border-y border-brand-silver/30 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
          className="flex gap-20 items-center px-10"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <React.Fragment key={i}>
              {logos.map((logo) => (
                <span
                  key={logo}
                  className="text-sm font-bold uppercase tracking-[0.4em] text-brand-muted/40 hover:text-accent-teal transition-colors"
                >
                  {logo}
                </span>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
