import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export const CareersCTA = () => {
  return (
    <Section background="mist" spacing="lg">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-h1 font-display font-semibold mb-4">Join Our Network</h2>
          <p className="text-body-lg text-slate mb-8">
            We&apos;re always interested in connecting with capable professionals who share our commitment to trust, security, and delivery excellence.
          </p>
          <Button href="/careers" variant="primary">
            Explore Opportunities →
          </Button>
        </div>
      </Container>
    </Section>
  )
}
