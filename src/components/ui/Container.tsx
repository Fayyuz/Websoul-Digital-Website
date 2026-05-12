import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export const Container = ({ children, className, maxWidth = 'xl' }: ContainerProps) => {
  const maxWidthClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <div className={cn('mx-auto w-full px-5 sm:px-6 md:px-8 lg:px-12', maxWidthClasses[maxWidth], className)}>
      {children}
    </div>
  )
}
