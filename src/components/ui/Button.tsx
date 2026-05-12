import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className,
  type = 'button',
  disabled
}: ButtonProps) => {
  const baseStyles = cn(
    'inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all duration-300',
    'rounded-full',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    {
      'bg-ink text-paper hover:bg-graphite hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] active:scale-[0.98]': variant === 'primary',
      'border border-silver bg-transparent text-ink hover:bg-mist hover:border-ink/20 active:scale-[0.98]': variant === 'secondary',
      'text-ink hover:text-ink/80 hover:bg-mist/50 active:scale-[0.98]': variant === 'ghost',
    },
    className
  )

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles} disabled={disabled}>
      {children}
    </button>
  )
}
