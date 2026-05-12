'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  bg?: 'pure' | 'silver' | 'ink'
}

export const Section = ({ children, className, id, bg = 'pure' }: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        'px-6 md:px-12 py-24 md:py-30 lg:py-42',
        {
          'bg-brand-pure': bg === 'pure',
          'bg-brand-silver/20': bg === 'silver',
          'bg-brand-ink text-brand-pure': bg === 'ink',
        },
        className
      )}
    >
      {children}
    </section>
  )
}
