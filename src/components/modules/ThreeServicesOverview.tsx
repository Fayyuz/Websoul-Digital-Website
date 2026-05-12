import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ServiceCard } from './ServiceCard'
import { serviceCards } from '@/lib/constants'

export const ThreeServicesOverview = () => {
  return (
    <Section background="white" spacing="lg" id="services">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-h1 font-display font-semibold mb-4">Core Capabilities</h2>
          <p className="text-body-lg text-slate max-w-2xl mx-auto">
            Three integrated business lines delivering trust, security, and transformation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
