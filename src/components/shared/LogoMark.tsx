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

  const strokeColor = variant === 'dark' ? '#0A0A0B' : '#FFFFFF'

  return (
    <div className={cn('relative', sizes[size], className)} style={{ color: strokeColor }}>
      <svg 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-label="Websoul Digital logo mark"
        role="img"
        stroke="currentColor"
      >
        {/* Outer framework - stability */}
        <path d="M8 20 L16 10 L32 10 L40 20" strokeWidth="2.5" stroke="currentColor"/>
        {/* Inner pathway - workflow */}
        <path d="M14 26 L24 14 L34 26" strokeWidth="2.5" stroke="currentColor"/>
        {/* Central pillar - strength */}
        <path d="M24 14 L24 38" strokeWidth="2.5" stroke="currentColor"/>
        {/* Node points - three capabilities */}
        <circle cx="16" cy="10" r="2.5" fill="currentColor"/>
        <circle cx="32" cy="10" r="2.5" fill="currentColor"/>
        <circle cx="24" cy="38" r="2.5" fill="currentColor"/>
      </svg>
    </div>
  )
}
