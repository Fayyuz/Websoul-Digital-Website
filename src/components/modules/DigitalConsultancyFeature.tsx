import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Layers, Cloud, Shield, GitBranch } from 'lucide-react'

export const DigitalConsultancyFeature = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Transformation',
      description: 'Strategic, secure adoption of cloud technologies with governance at the core.',
    },
    {
      icon: Shield,
      title: 'Cyber-aware Delivery',
      description: 'Implementing security-first operational practices across the digital lifecycle.',
    },
    {
      icon: Layers,
      title: 'ICT Strategy',
      description: 'Pragmatic technology roadmaps designed for complex organisational missions.',
    },
    {
      icon: GitBranch,
      title: 'Digital Governance',
      description: 'Frameworks that enable innovation while maintaining absolute risk control.',
    },
  ]

  return (
    <Section background="mist" spacing="lg" className="border-b border-silver scroll-mt-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-xl">
            <div className="inline-block mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate/60 px-1">Capability Deep-Dive</span>
            </div>
            <h2 className="text-h1 font-display font-bold text-ink tracking-tight mb-6">Digital Consultancy.</h2>
            <p className="text-body-lg text-slate mb-8 leading-relaxed">
              We help organisations navigate complex transformation with security awareness built into every decision, from architecture to execution.
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
            <Button href="/digital-consultancy" variant="secondary" className="h-14 px-10">
              Explore Digital Delivery
            </Button>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-ink/5 rounded-[3rem] blur-2xl group-hover:bg-ink/10 transition-all duration-500" />
            <div className="relative aspect-[4/3] bg-paper border border-silver rounded-[2.5rem] p-12 overflow-hidden shadow-sm flex flex-col justify-end">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                <Cloud className="w-40 h-40" />
              </div>
              <div className="space-y-6">
                <div className="w-12 h-1 bg-ink" />
                <blockquote className="text-h3 font-display font-bold text-ink leading-tight">
                  &quot;Security is not a final step; it is the fundamental architecture of modern delivery.&quot;
                </blockquote>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate/60">Digital Strategy Principle</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
