'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Link2, Shield, Users, TrendingUp as TrendUp } from 'lucide-react'

export const WhyWebsoul = () => {
  const points = [
    {
      icon: Link2,
      title: 'Integrated Capability',
      description: 'We dissolve the silos between HR, Security, and IT delivery.',
    },
    {
      icon: Shield,
      title: 'Trusted Environments',
      description: 'Specialized focus on regulated and defence-adjacent domains.',
    },
    {
      icon: Users,
      title: 'Australian Experience',
      description: 'Australian-owned and Canberra-based government ICT delivery knowledge.',
    },
    {
      icon: TrendUp,
      title: 'Practical Focus',
      description: 'Strategic frameworks matched with hands-on regulated sector execution.',
    },
  ]

  return (
    <Section background="mist" spacing="lg" className="border-y border-silver">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="text-base font-bold uppercase tracking-[0.3em] text-slate">Value Proposition</span>
            </div>
            <h2 className="text-h1 font-display font-bold tracking-tight text-ink mb-6">
              Australian-owned delivery experience.
            </h2>
            <p className="text-body-lg text-slate mb-8 leading-relaxed">
              We combine government ICT delivery experience, cyber assurance discipline and practical commercial execution to support organisations operating in regulated high-trust environments.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {points.map((point, index) => {
                const Icon = point.icon
                return (
                  <div key={index} className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-paper border border-silver flex items-center justify-center">
                      <Icon className="w-5 h-5 text-ink" />
                    </div>
                    <h3 className="font-bold text-ink">{point.title}</h3>
                    <p className="text-base text-slate leading-relaxed">{point.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="relative aspect-square bg-paper border border-silver rounded-[3rem] p-12 overflow-hidden shadow-sm hidden lg:flex flex-col justify-center">
             <div className="absolute top-0 right-0 p-8">
               <span className="text-[120px] font-display font-bold text-mist leading-none select-none">W</span>
             </div>
             <div className="relative z-10 space-y-8">
                <div className="space-y-2">
                  <p className="text-base font-bold uppercase tracking-widest text-slate/60">Operational Focus</p>
                  <p className="text-h3 font-display font-bold text-ink">Stability, Security, and Scalable Delivery.</p>
                </div>
                <div className="w-20 h-px bg-ink/10" />
                <p className="text-base text-slate leading-relaxed">
                  Websoul Digital provides the specialized capacity to navigate Australian regulatory environments while maintaining the velocity required of modern digital operations.
                </p>
             </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
