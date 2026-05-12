'use client'

import { cn } from '@/lib/utils'

interface LogoMarkProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  variant?: 'light' | 'dark'
}

export const LogoMark = ({ size = 'md', className, variant = 'dark' }: LogoMarkProps) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  const strokeColor = variant === 'dark' ? '#0A0A0B' : '#FFFFFF'

  return (
    <div className={cn('relative', sizes[size], className)} id="websoul-logo-mark">
      <svg 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Precise geometric mark representing "W" and "S" union */}
        <path 
          d="M8 12L20 24L32 12" 
          stroke={strokeColor} 
          strokeWidth="3" 
          strokeLinecap="square" 
          strokeLinejoin="miter"
        />
        <path 
          d="M8 28L20 16L32 28" 
          stroke={strokeColor} 
          strokeWidth="3" 
          strokeLinecap="square" 
          strokeLinejoin="miter"
          opacity="0.4"
        />
      </svg>
    </div>
  )
}
