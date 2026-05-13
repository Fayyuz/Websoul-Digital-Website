'use client'

import { cn } from '@/lib/utils'

interface LogoMarkProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'light' | 'dark'
  className?: string
}

export const LogoMark = ({ size = 'md', variant = 'dark', className }: LogoMarkProps) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14',
  }

  const strokeColor = variant === 'dark' ? '#0F172A' : '#FFFFFF'

  return (
    <div className={cn('relative', sizes[size], className)} style={{ color: strokeColor }}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-label="Websoul Digital logo mark"
        role="img"
      >
        {/* WD Monogram based on user-provided logo */}
        <g fill="currentColor">
          {/* Left Slanted Bar */}
          <path d="M 15 20 L 30 20 L 50 80 L 35 80 Z" />
          
          {/* Merged Right Bar (Stem) + D Curve */}
          <path d="M 40 20 L 55 20 
                   C 95 20, 115 80, 75 80 
                   L 58 80 L 40 20 Z" />
        </g>
      </svg>
    </div>
  )
}
