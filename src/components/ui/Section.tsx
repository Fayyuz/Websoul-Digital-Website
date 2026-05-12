import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'mist' | 'ink'
  spacing?: 'sm' | 'md' | 'lg'
  id?: string
}

export const Section = ({ children, className, background = 'white', spacing = 'lg', id }: SectionProps) => {
  const backgroundClasses = {
    white: 'bg-paper',
    mist: 'bg-mist',
    ink: 'bg-ink text-paper',
  }

  const spacingClasses = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-20',
    lg: 'py-20 md:py-section',
  }

  return (
    <section id={id} className={cn(backgroundClasses[background], spacingClasses[spacing], className)}>
      {children}
    </section>
  )
}
