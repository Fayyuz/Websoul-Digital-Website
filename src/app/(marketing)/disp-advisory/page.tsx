import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { TrendingUp, FileCheck, Building2, Target, ShieldAlert, ClipboardCheck } from 'lucide-react'

export default function DISPAdvisoryPage() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Readiness Assessment',
      description: 'Evaluate current security maturity against requirements.',
    },
    {
      icon: FileCheck,
      title: 'Governance Uplift',
      description: 'Develop policies and procedures for trusted environments.',
    },
    {
      icon: Building2,
      title: 'Environment Advisory',
      description: 'Support for defence-adjacent and regulated contexts.',
    },
    {
      icon: Target,
      title: 'Uplift Pathways',
      description: 'Practical roadmaps to achieve and maintain trusted status.',
    },
    {
      icon: ShieldAlert,
      title: 'Security Planning',
      description: 'Strategic and operational security documentation.',
    },
    {
      icon: ClipboardCheck,
      title: 'Audit Preparation',
      description: 'Prepare for assurance and compliance activities.',
    },
  ]

  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-slate uppercase mb-2 block">Core Capability</span>
            <h1 className="text-h1 font-display font-semibold mb-4">DISP Advisory</h1>
            <p className="text-body-lg text-slate mb-6">
              Practical security readiness, governance uplift, and trusted-environment advisory.
            </p>
            <p className="text-body text-slate">
              We help organisations navigate security readiness, governance uplift, and trusted-environment requirements with practical, actionable advisory services.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="border border-silver rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <Icon className="w-8 h-8 text-ink mb-4" />
                  <h3 className="text-h3 font-semibold mb-2">{service.title}</h3>
                  <p className="text-slate">{service.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section background="mist" spacing="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-h2 font-display font-semibold mb-4">Ready to strengthen your security posture?</h2>
            <Button href="/contact" variant="primary">Let&apos;s talk readiness</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
