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
  const accentColor = variant === 'dark' ? '#6B6B7A' : '#D1D1D6'

  return (
    <div className={cn('relative', sizes[size], className)}>
      <svg 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-label="Websoul Digital logo mark"
        role="img"
      >
        {/* W structure - outer frame representing stability and trust */}
        <path 
          d="M8 24 L16 12 L32 12 L40 24" 
          stroke={strokeColor} 
          strokeWidth="2.5" 
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />
        
        {/* Inner chevron - representing forward movement and delivery */}
        <path 
          d="M13 28 L24 16 L35 28" 
          stroke={strokeColor} 
          strokeWidth="2.5" 
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />
        
        {/* Central pillar - representing strength and foundation */}
        <path 
          d="M24 16 L24 36" 
          stroke={strokeColor} 
          strokeWidth="2.5" 
          strokeLinecap="square"
        />
        
        {/* Node points - representing digital systems architecture */}
        <circle cx="16" cy="12" r="2" fill={strokeColor} />
        <circle cx="32" cy="12" r="2" fill={strokeColor} />
        <circle cx="24" cy="16" r="2" fill={strokeColor} />
        <circle cx="24" cy="36" r="2" fill={strokeColor} />
        <circle cx="13" cy="28" r="1.5" fill={accentColor} />
        <circle cx="35" cy="28" r="1.5" fill={accentColor} />
        
        {/* Subtle connection line - representing integration */}
        <path 
          d="M24 24 L32 32" 
          stroke={accentColor} 
          strokeWidth="1.5" 
          strokeLinecap="square"
          strokeDasharray="3 3"
          opacity="0.6"
        />
      </svg>
    </div>
  )
}
