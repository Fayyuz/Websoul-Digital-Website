'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { 
  Cloud, 
  Shield, 
  GitBranch, 
  Layers, 
  Database, 
  Lock, 
  ArrowRight,
  CircleCheck 
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CapabilityCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const CapabilityCard = ({ icon, title, description }: CapabilityCardProps) => {
  return (
    <div className="group relative bg-paper rounded-xl p-5 border border-silver/60 hover:border-ink/20 hover:shadow-md transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-mist group-hover:bg-ink/10 transition-colors flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-ink mb-1">{title}</h3>
          <p className="text-sm text-slate leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export const DigitalConsultancyFeature = () => {
  const capabilities = [
    {
      icon: <Cloud className="w-5 h-5 text-ink" />,
      title: 'Cloud Transformation',
      description: 'Strategic cloud adoption with security embedded from day one. Migration, optimisation, and governance for AWS, Azure, and GCP.',
    },
    {
      icon: <Shield className="w-5 h-5 text-ink" />,
      title: 'Cyber-aware Delivery',
      description: 'Security-first development and operational practices aligned with ISM, Essential Eight, and PSPF expectations.',
    },
    {
      icon: <Layers className="w-5 h-5 text-ink" />,
      title: 'ICT Strategy',
      description: 'Technology roadmaps aligned with business objectives, risk appetite, and compliance requirements.',
    },
    {
      icon: <GitBranch className="w-5 h-5 text-ink" />,
      title: 'DevSecOps & Automation',
      description: 'Modern delivery pipelines with integrated security gates, compliance as code, and automated assurance.',
    },
    {
      icon: <Database className="w-5 h-5 text-ink" />,
      title: 'Data & Analytics',
      description: 'Trusted data foundations, governance frameworks, and analytics capabilities for evidence-led decisions.',
    },
    {
      icon: <Lock className="w-5 h-5 text-ink" />,
      title: 'Governance & Compliance',
      description: 'Frameworks that enable secure innovation while maintaining audit readiness and risk management.',
    },
  ]

  return (
    <Section background="mist" spacing="lg">
      <Container>
        {/* Section Header - Premium, authoritative */}
        <div className="max-w-3xl mb-10 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-ink/30" />
            <span className="text-[11px] md:text-xs font-medium tracking-[0.2em] text-ink/70 uppercase">
              Flagship Capability
            </span>
            <div className="w-8 h-px bg-ink/30" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-ink mb-4">
            Digital Consultancy
          </h2>
          
          <p className="text-body md:text-body-lg text-slate leading-relaxed">
            We help organisations navigate complex digital transformation with security awareness 
            built into every decision. From cloud strategy to delivery governance, we provide the 
            expertise needed to modernise with confidence in high-trust environments.
          </p>
        </div>

        {/* Capabilities Grid - 2 columns on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10 md:mb-12">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={index} {...capability} />
          ))}
        </div>

        {/* Trust Indicators - Specific to Digital Consultancy */}
        <div className="bg-paper rounded-2xl p-6 md:p-8 border border-ink/10 mb-10 md:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'ISM-aligned architecture',
              'Essential Eight ready',
              'Secure-by-design default',
              'Continuous assurance',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CircleCheck className="w-4 h-4 text-ink/60 flex-shrink-0" />
                <span className="text-sm text-slate">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Integrated Approach Note */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-4 border-t border-silver/60">
          <div className="max-w-2xl">
            <h3 className="text-lg font-semibold text-ink mb-1">
              Part of a larger capability
            </h3>
            <p className="text-sm text-slate">
              Digital Consultancy works alongside our Trust Services and DISP Advisory arms to provide 
              complete, integrated support for high-trust environments.
            </p>
          </div>
          <Link 
            href="/digital-consultancy" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink whitespace-nowrap group hover:gap-3 transition-all"
          >
            Explore Digital Consultancy
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
