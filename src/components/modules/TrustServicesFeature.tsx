'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ShieldCheck, Fingerprint, UserCheck, ClipboardList } from 'lucide-react'

export const TrustServicesFeature = () => {
  const features = [
    {
      icon: Fingerprint,
      title: 'Identity Verification',
      description: 'Professional validation of personnel identity and institutional credentials.',
    },
    {
      icon: ShieldCheck,
      title: 'Workforce Integrity',
      description: 'Integrity pathway design and suitability frameworks for security-sensitive workforces.',
    },
    {
      icon: ClipboardList,
      title: 'Trusted Pathways',
      description: 'Streamlined onboarding advisory that maintains absolute security standards.',
    },
    {
      icon: UserCheck,
      title: 'Continuous Assurance',
      description: 'Ongoing verification of personnel suitability and professional standing.',
    },
  ]

  return (
    <Section background="paper" spacing="lg">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative group">
             <div className="absolute -inset-4 bg-mist/50 rounded-[3rem] blur-2xl transition-opacity opacity-0 group-hover:opacity-100 duration-500" />
             <div className="relative aspect-[4/3] bg-mist/30 border border-silver rounded-[2.5rem] p-12 overflow-hidden shadow-sm flex flex-col justify-end">
                <div className="absolute top-0 left-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                  <Fingerprint className="w-40 h-40" />
                </div>
                <div className="space-y-6">
                  <div className="w-12 h-1 bg-ink" />
                  <blockquote className="text-h3 font-display font-bold text-ink leading-tight italic">
                    &quot;Trust is the most critical asset in any secure operating environment.&quot;
                  </blockquote>
                  <p className="text-base font-bold uppercase tracking-[0.2em] text-slate/60">Personnel Trust Mandate</p>
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2 max-w-xl">
            <div className="inline-block mb-4">
              <span className="text-base font-bold uppercase tracking-[0.3em] text-slate/60 px-1">Capability Deep-Dive</span>
            </div>
            <h2 className="text-h1 font-display font-bold text-ink tracking-tight mb-6">Trust Services.</h2>
            
            {/* Compliance Disclaimer - Task 5 */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 text-base text-amber-900 rounded-r-lg">
              <p className="font-semibold mb-1">Compliance Disclaimer</p>
              Certain screening, checking or verification services may be delivered subject to accreditation, partner arrangements, customer requirements and applicable regulatory approvals.
            </div>

            <p className="text-body-lg text-slate mb-8 leading-relaxed">
              We provide workforce trust advisory, identity-readiness support and integrity pathway design for regulated and high-trust environments.
            </p>
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
            <Button href="/trust-services" variant="secondary" className="h-14 px-10">
              Explore Trust Services
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
