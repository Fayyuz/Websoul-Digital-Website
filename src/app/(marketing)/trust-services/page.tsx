'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Shield, Fingerprint, UserCheck, ClipboardList, Clock, FileText } from 'lucide-react'

export default function TrustServicesPage() {
  const services = [
    {
      icon: Fingerprint,
      title: 'Identity Readiness',
      description: 'Support for identity verification process design and readiness for high-trust roles.',
    },
    {
      icon: Shield,
      title: 'Workforce Integrity',
      description: 'Integrity pathway design and suitability frameworks for security-sensitive workforces.',
    },
    {
      icon: UserCheck,
      title: 'Trusted Pathways',
      description: 'Standardized integrity pathways that reduce operational friction without compromising security.',
    },
    {
      icon: ClipboardList,
      title: 'Personnel Assurance',
      description: 'Ongoing verification of professional standing and suitability processes for regulated environments.',
    },
    {
      icon: Clock,
      title: 'Integrity Monitoring',
      description: 'Process design for continuous lifecycle monitoring for personnel in high-risk domains.',
    },
    {
      icon: FileText,
      title: 'Audit & Compliance',
      description: 'Exhaustive documentation and assurance evidence to meet regulatory and environmental standards.',
    },
  ]

  return (
    <>
      <Section background="mist" spacing="lg" className="border-b border-silver">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate/60">Capability: Trust Services</span>
            </div>
            <h1 className="text-hero-mobile md:text-h1 font-display font-bold tracking-tight text-ink mb-8">
              Trust with velocity.
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-body-lg text-ink font-medium leading-relaxed">
                  We provide workforce trust advisory, identity-readiness support and integrity pathway design for regulated and high-trust environments.
                </p>
                {/* Task 5 Disclaimer */}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 text-base text-amber-900 rounded-r-xl shadow-sm">
                  <p className="font-bold mb-2">Important Compliance Note</p>
                  Certain screening, checking or verification services may be delivered subject to accreditation, partner arrangements, customer requirements and applicable regulatory approvals.
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-body text-slate leading-relaxed">
                  In regulated environments, workforce trust is a core capability. Our Trust Services simplify the complexity of identity and integrity readiness, ensuring your personnel meet the standards required for high-assurance operations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="mb-16">
            <h2 className="text-h2 font-display font-bold text-ink mb-4">Integrity Frameworks</h2>
            <p className="text-body text-slate max-w-2xl">
              Professional verification services for organisations requiring secure workforce pathways.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="group border border-silver rounded-2xl p-8 hover:border-ink/10 hover:shadow-sm transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-mist flex items-center justify-center mb-6 group-hover:bg-ink group-hover:text-paper transition-colors">
                    <Icon className="w-6 h-6 text-ink group-hover:text-paper transition-colors" />
                  </div>
                  <h3 className="text-h4 font-display font-bold mb-3 text-ink">{service.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto bg-paper border border-silver rounded-[2rem] p-12 md:p-16 text-center">
            <h2 className="text-h2 font-display font-bold mb-6 text-ink">Scale your trusted workforce.</h2>
            <p className="text-body text-slate mb-10 max-w-xl mx-auto leading-relaxed">
              Contact us to discuss your verification requirements and how we can facilitate your workforce trust pathways.
            </p>
            <Button href="/contact" variant="primary" className="h-14 px-12">Talk to a Specialist</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
