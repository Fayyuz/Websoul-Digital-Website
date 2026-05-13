'use client'

import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { Shield, MapPin, Briefcase, CircleCheck, Building2 } from 'lucide-react'

interface TrustBandProps {
  items?: Array<{
    label: string
    icon?: React.ReactNode
  }>
  variant?: 'default' | 'compact' | 'featured'
  className?: string
}

// Default trust indicators for Websoul Digital
const defaultTrustItems = [
  { label: 'Australian-owned', icon: <MapPin className="w-3.5 h-3.5" /> },
  { label: 'Canberra-based', icon: <Building2 className="w-3.5 h-3.5" /> },
  { label: 'High-trust environments', icon: <Shield className="w-3.5 h-3.5" /> },
  { label: 'Secure delivery mindset', icon: <Briefcase className="w-3.5 h-3.5" /> },
  { label: 'Modern consultancy', icon: <CircleCheck className="w-3.5 h-3.5" /> },
]

export const TrustBand = ({
  items = defaultTrustItems,
  variant = 'default',
  className,
}: TrustBandProps) => {
  const variantClasses = {
    default: 'py-3 md:py-4 bg-mist border-y border-silver/60',
    compact: 'py-2 md:py-3 bg-mist/80 border-y border-silver/40',
    featured: 'py-4 md:py-5 bg-ink/5 border-y border-ink/10',
  }

  return (
    <div className={cn(variantClasses[variant], className)}>
      <Container>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 md:gap-x-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 md:gap-2 group transition-all duration-200 hover:opacity-100 opacity-80"
            >
              {/* Icon - subtle, premium styling */}
              {item.icon && (
                <span className="text-slate/70 group-hover:text-slate transition-colors">
                  {item.icon}
                </span>
              )}
              
              {/* Divider dot between items (except first) */}
              {index > 0 && (
                <span className="w-1 h-1 rounded-full bg-slate/30 mx-0.5 hidden sm:inline" />
              )}
              
              {/* Label - premium typography */}
              <span className="text-[11px] sm:text-xs font-medium tracking-wide text-slate uppercase whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
