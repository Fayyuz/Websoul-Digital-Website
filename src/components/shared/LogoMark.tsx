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
        {/* Outer chevron structure - represents stability/trust */}
        <path 
          d="M8 20 L20 8 L32 20" 
          stroke={strokeColor} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Inner chevron - represents forward movement/progress */}
        <path 
          d="M12 24 L20 16 L28 24" 
          stroke={strokeColor} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Vertical stem - represents strength/foundation */}
        <path 
          d="M20 20 L20 32" 
          stroke={strokeColor} 
          strokeWidth="2.5" 
          strokeLinecap="round"
        />
        
        {/* Subtle accent line - represents connection/integration */}
        <path 
          d="M20 20 L28 28" 
          stroke={strokeColor} 
          strokeWidth="1.5" 
          strokeLinecap="round"
          strokeDasharray="2 3"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
