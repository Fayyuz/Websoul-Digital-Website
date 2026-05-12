import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ServiceCard } from './ServiceCard'
import { serviceCards } from '@/lib/constants'

export const ThreeServicesOverview = () => {
  return (
    <Section background="paper" spacing="lg" id="services" className="border-t border-silver">
      <Container>
        <div className="mb-16 md:mb-24">
          <div className="inline-block mb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate">Business Services</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-h1 font-display font-bold tracking-tight text-ink">
              Core consultancy domains.
            </h2>
            <p className="text-body-lg text-slate max-w-lg mb-2">
              We bring together three high-trust business lines to deliver the stability, security, and digital capability needed for complex environments.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {serviceCards.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
