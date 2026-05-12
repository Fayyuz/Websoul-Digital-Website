import { cn } from '@/lib/utils'

interface LogoMarkProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const LogoMark = ({ size = 'md', className }: LogoMarkProps) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }

  return (
    <div className={cn('relative', sizes[size], className)}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M8 20 L20 8 L32 20" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        <path 
          d="M12 24 L20 16 L28 24" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        <path 
          d="M20 20 L20 32" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round"
        />
        <path 
          d="M20 20 L28 28" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
      </svg>
    </div>
  )
}
