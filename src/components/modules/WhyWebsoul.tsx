import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Link2, Shield, Users, TrendingUp as TrendUp } from 'lucide-react'

export const WhyWebsoul = () => {
  const points = [
    {
      icon: Link2,
      title: 'Integrated Model',
      description: 'Three connected capabilities working together.',
    },
    {
      icon: Shield,
      title: 'Trust Focus',
      description: 'Every service designed for trusted environments.',
    },
    {
      icon: Users,
      title: 'Australian-owned',
      description: 'Canberra-based with local expertise.',
    },
    {
      icon: TrendUp,
      title: 'Practical Delivery',
      description: 'Strategic thinking with execution focus.',
    },
  ]

  return (
    <Section background="white" spacing="lg">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-h1 font-display font-semibold mb-4">Why Websoul</h2>
          <p className="text-body-lg text-slate max-w-2xl mx-auto">
            We bring together the three capabilities organisations need to operate with confidence in high-trust environments
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-mist mb-4">
                  <Icon className="w-6 h-6 text-ink" />
                </div>
                <h3 className="font-semibold text-h4 mb-2">{point.title}</h3>
                <p className="text-sm text-slate">{point.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
