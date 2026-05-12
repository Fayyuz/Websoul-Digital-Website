import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Shield, Fingerprint, UserCheck, ClipboardList, Clock, FileText } from 'lucide-react'

export default function TrustServicesPage() {
  const services = [
    {
      icon: Fingerprint,
      title: 'Identity Verification',
      description: 'Secure, compliant identity validation and document verification.',
    },
    {
      icon: Shield,
      title: 'Workforce Integrity',
      description: 'Screening and background verification for trusted workforces.',
    },
    {
      icon: UserCheck,
      title: 'Onboarding Trust',
      description: 'Streamlined pathways that maintain rigorous standards.',
    },
    {
      icon: ClipboardList,
      title: 'Process Assurance',
      description: 'Third-party verification and integrity assurance.',
    },
    {
      icon: Clock,
      title: 'Continuous Monitoring',
      description: 'Ongoing integrity assurance for critical roles.',
    },
    {
      icon: FileText,
      title: 'Compliance Reporting',
      description: 'Audit-ready documentation and reporting.',
    },
  ]

  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-h1 font-display font-semibold mb-4">Trust Services</h1>
            <p className="text-body-lg text-slate mb-6">
              Trusted screening, identity verification, and integrity services for regulated environments.
            </p>
            <p className="text-body text-slate">
              We provide the verification and trust processes organisations need to build confident workforces and maintain secure operations.
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
            <h2 className="text-h2 font-display font-semibold mb-4">Ready to strengthen your trust processes?</h2>
            <Button href="/contact" variant="primary">Talk to Us</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
