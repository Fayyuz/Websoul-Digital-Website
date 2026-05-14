'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { TrendingUp, FileCheck, Building2, Target, CircleCheck } from 'lucide-react'

export const DISPFeature = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'DISP Readiness',
      description: 'Structured uplift across governance, personnel, physical and ICT/cyber security expectations.',
    },
    {
      icon: FileCheck,
      title: 'Essential Eight ML2',
      description: 'Assessment, remediation planning and evidence preparation for ML2 conformance.',
    },
    {
      icon: Building2,
      title: 'ISM Traceability',
      description: 'Mapping cyber controls to ISM-aligned evidence, owners, risks and uplift actions.',
    },
    {
      icon: Target,
      title: 'Assurance Evidence',
      description: 'Executive-ready evidence packs for DISP, PSPF, audit and authorisation support.',
    },
  ]

  return (
    <Section background="mist" spacing="lg" className="border-t border-silver">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative group">
             <div className="absolute -inset-4 bg-ink/5 rounded-[3rem] blur-2xl group-hover:bg-ink/10 transition-all duration-500" />
             <div className="relative aspect-[4/3] bg-paper border border-silver rounded-[2.5rem] p-12 overflow-hidden shadow-sm flex flex-col justify-end">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                  <Target className="w-40 h-40" />
                </div>
                <div className="space-y-6">
                  <div className="w-12 h-1 bg-ink" />
                  <blockquote className="text-h3 font-display font-bold text-ink leading-tight">
                    &quot;Cyber maturity must be evidenced through practical controls, accountable owners and repeatable assurance.&quot;
                  </blockquote>
                  <p className="text-base font-bold uppercase tracking-[0.2em] text-slate/60">Assurance Principle</p>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 max-w-xl">
            <div className="inline-block mb-4">
              <span className="text-base font-bold uppercase tracking-[0.3em] text-slate/60 px-1">Capability Deep-Dive</span>
            </div>
            <h2 className="text-h1 font-display font-bold text-ink tracking-tight mb-6">DISP Advisory & Cyber Assurance.</h2>
            <p className="text-body-lg text-slate mb-8 leading-relaxed">
              We help Defence industry suppliers and government-facing organisations build a practical path to DISP readiness, Essential Eight ML2 uplift, ISM control mapping and continuous cyber assurance.
            </p>
            
            <div className="mb-10 bg-paper/50 p-6 rounded-2xl border border-silver/50">
              <h3 className="font-bold text-ink text-base uppercase tracking-wider mb-4 flex items-center gap-2">
                <CircleCheck className="w-4 h-4 text-emerald-600" />
                Practical Buyer Outcomes
              </h3>
              <ul className="space-y-3 text-base text-slate">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  Evidence packs for audits and customer assurance
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  Mapped controls across DISP, PSPF, ISM and Essential Eight
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  Practical uplift roadmap with owners, risks and priorities
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  Security governance artefacts suitable for Defence-facing SMEs
                </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-10 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-ink" />
                      <h3 className="font-bold text-ink text-base uppercase tracking-wider">{feature.title}</h3>
                    </div>
                    <p className="text-base text-slate leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
            <div className="flex flex-col gap-4">
              <Button href="/disp-advisory" variant="secondary" className="h-14 px-10">
                Explore DISP advisory
              </Button>
              <a href="/disp-advisory/essential-eight-ml2" className="text-base font-bold text-ink hover:underline text-center">
                Essential Eight ML2 Assurance →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
