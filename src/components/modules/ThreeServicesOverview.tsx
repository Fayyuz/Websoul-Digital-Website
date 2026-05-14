'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Shield, Cloud, TrendingUp, ArrowRight, CircleCheck } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  description: string
  audience: string
  value: string
  href: string
  icon: React.ReactNode
  isFeatured?: boolean
}

const ServiceCard = ({
  title,
  description,
  audience,
  value,
  href,
  icon,
  isFeatured = false,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        'group relative bg-paper rounded-2xl transition-all duration-300',
        'border hover:shadow-lg',
        isFeatured
          ? 'border-ink/20 hover:border-ink/40 lg:-mt-4 lg:mb-4'
          : 'border-silver/80 hover:border-ink/20'
      )}
    >
      {/* Subtle gradient accent on hover - optional premium touch */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ink/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="p-6 md:p-8 relative z-10">
        {/* Icon - premium, restrained */}
        <div className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors',
          isFeatured ? 'bg-ink text-paper' : 'bg-mist text-ink group-hover:bg-ink/10'
        )}>
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-ink mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate text-base leading-relaxed mb-4">
          {description}
        </p>

        {/* Audience - who it's for */}
        <div className="mb-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink/60">
            Who it&apos;s for
          </span>
          <p className="text-base text-slate mt-1">{audience}</p>
        </div>

        {/* Value - why it matters */}
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink/60">
            Why it matters
          </span>
          <p className="text-base text-slate mt-1">{value}</p>
        </div>

        {/* CTA - clean, professional */}
          <Link
            href={href}
            className={cn(
              'inline-flex items-center gap-2 text-base font-medium transition-all duration-200',
              'group-hover:gap-3',
              isFeatured ? 'text-ink' : 'text-slate hover:text-ink'
            )}
          >
          Explore {title}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export const ThreeServicesOverview = () => {
  const services = [
    {
      title: 'Trust Services',
      description: 'Workforce trust advisory, identity-readiness support and integrity pathway design for regulated and high-trust environments.',
      audience: 'Organisations requiring trusted workforce pathways and personnel assurance.',
      value: 'Reduce onboarding friction while maintaining rigorous integrity standards.',
      href: '/trust-services',
      icon: <Shield className="w-6 h-6" />,
      isFeatured: false,
    },
    {
      title: 'Digital Consultancy',
      description: 'Secure ICT strategy, cloud transformation and delivery governance for Australian organisations modernising critical services.',
      audience: 'Organisations modernising with confidence in high-trust contexts.',
      value: 'Build secure, scalable systems that enable growth without compromising assurance.',
      href: '/digital-consultancy',
      icon: <Cloud className="w-6 h-6" />,
      isFeatured: true, // Flagship service
    },
    {
      title: 'DISP Advisory',
      description: 'DISP readiness, Essential Eight uplift, ISM control mapping and assurance evidence for Defence-facing suppliers.',
      audience: 'Organisations navigating regulated or defence-adjacent environments.',
      value: 'Achieve and maintain trusted status with defensible evidence and clear pathways.',
      href: '/disp-advisory',
      icon: <TrendingUp className="w-6 h-6" />,
      isFeatured: false,
    },
  ]

  return (
    <Section background="paper" spacing="lg" id="capabilities" className="scroll-mt-20">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-px bg-slate/40" />
            <span className="text-base font-medium tracking-[0.2em] text-slate uppercase">
              Core Capabilities
            </span>
            <div className="w-8 h-px bg-slate/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-ink mb-4">
            Three capabilities.
            <br />
            One integrated model.
          </h2>
          <p className="text-body md:text-body-lg text-slate max-w-2xl mx-auto">
            We bring together trust, delivery, and advisory services under one brand —
            so you don&apos;t need three consultancies.
          </p>
        </div>

        {/* Services Grid - Responsive 1/2/3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Integrated Model Note - reinforces the "why" */}
        <div className="mt-12 pt-8 text-center border-t border-silver/60">
          <div className="inline-flex items-center gap-2 text-base text-slate">
            <CircleCheck className="w-4 h-4 text-ink/60" />
            <span>
              Trust Services + Digital Consultancy + DISP Advisory — working together
            </span>
          </div>
        </div>
      </Container>
    </Section>
  )
}
