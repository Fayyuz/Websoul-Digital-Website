import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
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
    'inline-flex items-center justify-center px-8 py-3.5 text-base font-bold uppercase tracking-widest transition-all duration-300',
    'rounded-full',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    {
      'bg-ink text-paper hover:bg-graphite active:scale-[0.98] shadow-sm hover:shadow-md': variant === 'primary',
      'border border-ink bg-transparent text-ink hover:bg-mist active:scale-[0.98]': variant === 'secondary',
      'border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-paper active:scale-[0.98]': variant === 'outline',
      'text-ink hover:text-graphite hover:bg-mist/50 active:scale-[0.98]': variant === 'ghost',
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
