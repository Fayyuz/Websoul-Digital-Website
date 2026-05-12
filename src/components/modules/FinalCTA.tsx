import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export const FinalCTA = () => {
  return (
    <Section background="ink" spacing="lg">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-h1 font-display font-semibold mb-4 text-paper">
            Trusted capability starts here
          </h2>
          <p className="text-body-lg text-slate mb-8">
            Ready to build stronger, more secure organisations?
          </p>
          <Button href="/contact" variant="primary" className="bg-paper text-ink hover:bg-silver">
            Talk to Us
          </Button>
        </div>
      </Container>
    </Section>
  )
}
