import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Cloud, Shield, GitBranch, Layers, Database, Lock } from 'lucide-react'

export default function DigitalConsultancyPage() {
  const capabilities = [
    {
      icon: Cloud,
      title: 'Cloud Strategy & Migration',
      description: 'Secure, well-architected cloud adoption with governance built in.',
    },
    {
      icon: Shield,
      title: 'Cyber Security Advisory',
      description: 'Security-aware architecture and delivery practices.',
    },
    {
      icon: GitBranch,
      title: 'DevSecOps & Delivery',
      description: 'Modern delivery pipelines with security integrated.',
    },
    {
      icon: Layers,
      title: 'ICT Strategy',
      description: 'Technology roadmaps aligned with business objectives.',
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Trusted data foundations for better decisions.',
    },
    {
      icon: Lock,
      title: 'Governance & Compliance',
      description: 'Frameworks that enable secure innovation.',
    },
  ]

  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-slate uppercase mb-2 block">Core Capability</span>
            <h1 className="text-h1 font-display font-semibold mb-4">Digital Consultancy</h1>
            <p className="text-body-lg text-slate mb-6">
              Security-aware ICT strategy, cloud transformation, and digital delivery capability.
            </p>
            <p className="text-body text-slate">
              We help organisations navigate complex digital transformation with security awareness built into every decision. From cloud strategy to delivery governance, we provide the expertise needed to modernise with confidence.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <div key={index} className="border border-silver rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <Icon className="w-8 h-8 text-ink mb-4" />
                  <h3 className="text-h3 font-semibold mb-2">{capability.title}</h3>
                  <p className="text-slate">{capability.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section background="ink" spacing="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-h2 font-display font-semibold mb-4 text-paper">Ready to transform with confidence?</h2>
            <Button href="/contact" variant="primary" className="bg-paper text-ink hover:bg-silver">
              Start the conversation
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
