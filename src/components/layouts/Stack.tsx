'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface StackProps {
  children: React.ReactNode
  direction?: 'row' | 'col'
  gap?: 0 | 2 | 4 | 6 | 8 | 10 | 12 | 16 | 20
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  className?: string
}

export const Stack = ({ 
  children, 
  direction = 'col', 
  gap = 4, 
  align = 'stretch', 
  justify = 'start',
  className 
}: StackProps) => {
  return (
    <div className={cn(
      'flex',
      direction === 'col' ? 'flex-col' : 'flex-row',
      {
        'gap-0': gap === 0,
        'gap-2': gap === 2,
        'gap-4': gap === 4,
        'gap-6': gap === 6,
        'gap-8': gap === 8,
        'gap-10': gap === 10,
        'gap-12': gap === 12,
        'gap-16': gap === 16,
        'gap-20': gap === 20,
        'items-start': align === 'start',
        'items-center': align === 'center',
        'items-end': align === 'end',
        'items-baseline': align === 'baseline',
        'items-stretch': align === 'stretch',
        'justify-start': justify === 'start',
        'justify-center': justify === 'center',
        'justify-end': justify === 'end',
        'justify-between': justify === 'between',
        'justify-around': justify === 'around',
        'justify-evenly': justify === 'evenly',
      },
      className
    )}>
      {children}
    </div>
  )
}
