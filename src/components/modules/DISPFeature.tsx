import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { TrendingUp, FileCheck, Building2, Target } from 'lucide-react'

export const DISPFeature = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Maturity Assessments',
      description: 'Rigorous evaluation of security maturity levels against regulated standards.',
    },
    {
      icon: FileCheck,
      title: 'Governance Frameworks',
      description: 'Professional policies and procedures designed for high-trust environments.',
    },
    {
      icon: Building2,
      title: 'Environment Advisory',
      description: 'Specialized support for establishung secure physical and digital contexts.',
    },
    {
      icon: Target,
      title: 'Compliance Roadmaps',
      description: 'Practical, actionable pathways to achieve and maintain trusted status.',
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
                    &quot;Compliance is not the goal; it is the evidence of a resilient security posture.&quot;
                  </blockquote>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/60">Governance Principle</p>
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2 max-w-xl">
            <div className="inline-block mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate/60 px-1">Capability Deep-Dive</span>
            </div>
            <h2 className="text-h1 font-display font-bold text-ink tracking-tight mb-6">DISP Advisory.</h2>
            <p className="text-body-lg text-slate mb-8 leading-relaxed">
              We facilitate organisational readiness and environmental accreditation for partners operating in defence-adjacent and secure sectors.
            </p>
            <div className="grid sm:grid-cols-2 gap-10 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-ink" />
                      <h3 className="font-bold text-ink text-sm uppercase tracking-wider">{feature.title}</h3>
                    </div>
                    <p className="text-xs text-slate leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
            <Button href="/disp-advisory" variant="secondary" className="h-14 px-10">
              Explore Advisory services
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
