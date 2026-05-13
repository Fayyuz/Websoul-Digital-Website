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
          {/* First Slanted Bar */}
          <path d="M 12 22 L 28 22 L 48 78 L 32 78 Z" />
          
          {/* Second Slanted Bar (Stem of D) */}
          <path d="M 38 22 L 54 22 L 74 78 L 58 78 Z" />
          
          {/* D Loop - Attached to the second bar and reflecting the slant */}
          <path d="M 54 22 
                   C 85 22, 105 78, 74 78 
                   L 58 78 L 38 22 L 54 22 Z" 
                className="opacity-90" />
        </g>
      </svg>
    </div>
  )
}
