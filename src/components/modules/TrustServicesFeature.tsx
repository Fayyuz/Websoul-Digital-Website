import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ShieldCheck, Fingerprint, UserCheck, ClipboardList } from 'lucide-react'

export const TrustServicesFeature = () => {
  const features = [
    {
      icon: Fingerprint,
      title: 'Identity Verification',
      description: 'Secure, compliant identity validation processes.',
    },
    {
      icon: ShieldCheck,
      title: 'Integrity Screening',
      description: 'Trusted workforce verification and background checks.',
    },
    {
      icon: ClipboardList,
      title: 'Onboarding Workflows',
      description: 'Streamlined trust-based onboarding pathways.',
    },
    {
      icon: UserCheck,
      title: 'Ongoing Monitoring',
      description: 'Continuous integrity assurance for critical roles.',
    },
  ]

  return (
    <Section background="white" spacing="lg">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium tracking-wider text-slate uppercase mb-2 block">
              Core Capability
            </span>
            <h2 className="text-h1 font-display font-semibold mb-4">Trust Services</h2>
            <p className="text-body-lg text-slate mb-6">
              We provide the verification, screening, and integrity services that organisations need to build trusted workforces and maintain secure environments.
            </p>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex gap-3">
                    <Icon className="w-5 h-5 text-ink flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-slate">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <Button href="/trust-services" variant="secondary">
              Learn more about Trust Services →
            </Button>
          </div>

          <div className="bg-mist rounded-2xl p-8 border border-silver">
            <div className="text-center">
              <div className="inline-block bg-ink/5 rounded-full px-4 py-1 mb-4">
                <span className="text-sm font-medium">Trusted processes</span>
              </div>
              <p className="text-slate mb-4">
                &quot;Rigorous without friction. Secure without delay.&quot;
              </p>
              <div className="text-xs text-slate">Trusted by organisations across regulated sectors</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
