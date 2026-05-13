'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Cloud, Shield, GitBranch, Layers, Database, Lock } from 'lucide-react'

export default function DigitalConsultancyPage() {
  const capabilities = [
    {
      icon: Cloud,
      title: 'Sovereign Cloud Strategy',
      description: 'Secure, well-architected cloud adoption with sovereignty and governance built-in.',
    },
    {
      icon: Shield,
      title: 'Cyber Security Advisory',
      description: 'Pragmatic, security-aware architecture and ICT delivery practices.',
    },
    {
      icon: GitBranch,
      title: 'Digital Delivery',
      description: 'Modern, agile delivery pipelines with security integrated at every stage.',
    },
    {
      icon: Layers,
      title: 'ICT Transformation',
      description: 'Strategic technology roadmaps aligned with complex organisational objectives.',
    },
    {
      icon: Database,
      title: 'Data Governance',
      description: 'Building trusted data foundations for high-confidence decision making.',
    },
    {
      icon: Lock,
      title: 'Regulatory Compliance',
      description: 'Frameworks and assurance that enable secure, compliant innovation.',
    },
  ]

  return (
    <>
      <Section background="mist" spacing="lg" className="border-b border-silver">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate/60">Capability: Digital Delivery</span>
            </div>
            <h1 className="text-hero-mobile md:text-h1 font-display font-bold tracking-tight text-ink mb-8">
              Digital Delivery with Assurance.
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <p className="text-body-lg text-ink font-medium leading-relaxed">
                We design and deliver technical systems that are secure-by-default, resilient-by-design, and aligned with sovereign security standards.
              </p>
              <p className="text-body text-slate leading-relaxed">
                Modern digital transformation requires more than just migration; it requires a fundamental commitment to integrating security into the delivery lifecycle. Our consultants provide the specialized engineering capacity required to navigate this transition in regulated domains.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="mb-16">
            <h2 className="text-h2 font-display font-bold text-ink mb-4">Enterprise Capability</h2>
            <p className="text-body text-slate max-w-2xl">
              Specialized digital delivery and strategy for organisations operating in complex or secure domains.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <div key={index} className="group border border-silver rounded-2xl p-8 hover:border-ink/10 hover:shadow-sm transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-mist flex items-center justify-center mb-6 group-hover:bg-ink group-hover:text-paper transition-colors">
                    <Icon className="w-6 h-6 text-ink group-hover:text-paper transition-colors" />
                  </div>
                  <h3 className="text-h4 font-display font-bold mb-3 text-ink">{capability.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{capability.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section background="ink" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto border border-white/10 rounded-[2rem] p-12 md:p-16 text-center">
            <h2 className="text-h2 font-display font-bold mb-6 text-paper">Build for the future.</h2>
            <p className="text-body text-paper/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Partner with a consultancy that understands the intersection of security, trust, and digital delivery.
            </p>
            <Button href="/contact" variant="primary" className="bg-paper text-ink hover:bg-silver h-14 px-12">Consult with our Team</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
