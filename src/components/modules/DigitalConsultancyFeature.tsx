import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Layers, Cloud, Shield, GitBranch } from 'lucide-react'

export const DigitalConsultancyFeature = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Transformation',
      description: 'Strategic cloud adoption with security embedded from day one.',
    },
    {
      icon: Shield,
      title: 'Cyber-aware Delivery',
      description: 'Security-first development and operational practices.',
    },
    {
      icon: Layers,
      title: 'ICT Strategy',
      description: 'Technology roadmaps aligned with business objectives.',
    },
    {
      icon: GitBranch,
      title: 'Digital Governance',
      description: 'Frameworks that enable innovation while managing risk.',
    },
  ]

  return (
    <Section background="mist" spacing="lg">
      <Container>
        <div className="max-w-3xl mb-12">
          <span className="text-sm font-medium tracking-wider text-slate uppercase mb-2 block">
            Core Capability
          </span>
          <h2 className="text-h1 font-display font-semibold mb-4">Digital Consultancy</h2>
          <p className="text-body-lg text-slate">
            We help organisations navigate complex digital transformation with security awareness built into every decision. From cloud strategy to delivery governance, we provide the expertise needed to modernise with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <Icon className="w-6 h-6 text-ink" />
                </div>
                <div>
                  <h3 className="font-semibold text-h4 mb-1">{feature.title}</h3>
                  <p className="text-slate">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <Button href="/digital-consultancy" variant="secondary">
          Learn more about Digital Consultancy →
        </Button>
      </Container>
    </Section>
  )
}
