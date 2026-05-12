'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  glow?: boolean
}

export const Card = ({ children, className, glow = false }: CardProps) => {
  return (
    <div className={cn(
      'glass-card rounded-3xl p-8 transition-all duration-300 relative overflow-hidden group',
      glow && 'hover:shadow-[0_0_40px_-10px_rgba(0,107,111,0.2)] hover:border-accent-teal/50',
      className
    )}>
      <div className="absolute inset-0 bg-noise opacity-[0.01] pointer-events-none"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
