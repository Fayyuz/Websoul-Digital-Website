'use client'

import React, { forwardRef, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  href?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'solid', size = 'md', loading, children, href, ...props }, ref) => {
    const Comp = href ? 'a' : 'button'
    const baseStyles = cn(
      'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-full',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'active:scale-[0.98]',
      {
        'px-4 py-2 text-sm': size === 'sm',
        'px-6 py-3 text-base': size === 'md',
        'px-8 py-4 text-lg': size === 'lg',
        'bg-brand-ink text-brand-pure hover:bg-brand-slate shadow-sm hover:shadow-md': variant === 'solid',
        'bg-transparent text-brand-ink hover:bg-brand-silver/30': variant === 'ghost',
        'border-2 border-brand-ink bg-transparent text-brand-ink hover:bg-brand-ink hover:text-brand-pure': variant === 'outline',
      },
      className
    )

    return (
      <Comp
        ref={ref as any}
        href={href}
        className={baseStyles}
        {...(href ? {} : { ...props, ref } as any)}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </Comp>
    )
  }
)

Button.displayName = 'Button'
