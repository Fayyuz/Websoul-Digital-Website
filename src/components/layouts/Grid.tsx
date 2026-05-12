'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface GridProps {
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4 | 12
  gap?: 0 | 2 | 4 | 6 | 8 | 10 | 12 | 16 | 20
  className?: string
}

export const Grid = ({ children, cols = 1, gap = 8, className }: GridProps) => {
  return (
    <div className={cn(
      'grid',
      {
        'grid-cols-1': cols === 1,
        'md:grid-cols-2': cols === 2,
        'md:grid-cols-3': cols === 3,
        'md:grid-cols-4': cols === 4,
        'grid-cols-12': cols === 12,
        'gap-0': gap === 0,
        'gap-2': gap === 2,
        'gap-4': gap === 4,
        'gap-6': gap === 6,
        'gap-8': gap === 8,
        'gap-10': gap === 10,
        'gap-12': gap === 12,
        'gap-16': gap === 16,
        'gap-20': gap === 20,
      },
      className
    )}>
      {children}
    </div>
  )
}
