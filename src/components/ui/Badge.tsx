'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'premium' | 'outline'
  className?: string
}

export const Badge = ({ children, variant = 'default', className }: BadgeProps) => {
  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider',
      {
        'bg-brand-silver text-brand-ink': variant === 'default',
        'bg-accent-teal/10 text-accent-teal border border-accent-teal/20': variant === 'premium',
        'border border-brand-silver text-brand-muted': variant === 'outline',
      },
      className
    )}>
      {children}
    </span>
  )
}
