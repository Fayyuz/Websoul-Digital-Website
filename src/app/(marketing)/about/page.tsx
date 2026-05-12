import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-h1 font-display font-semibold mb-4">About Websoul Digital</h1>
            <p className="text-body-lg text-slate">
              We exist to help organisations operate with confidence in high-trust environments.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-h2 font-display font-semibold mb-4">Who We Are</h2>
              <p className="text-body text-slate">
                Websoul Digital is an Australian-owned consultancy bringing together three high-trust business lines under one brand: Trust Services, Digital Consultancy, and DISP Advisory.
              </p>
            </div>

            <div>
              <h2 className="text-h2 font-display font-semibold mb-4">Why The Integrated Model</h2>
              <p className="text-body text-slate mb-4">
                Trust isn&apos;t just about one thing. It&apos;s about people, systems, and governance working together.
              </p>
              <p className="text-body text-slate">
                By integrating trust verification, secure digital delivery, and environmental readiness, we provide the complete capability organisations need to operate with confidence in regulated and high-trust contexts.
              </p>
            </div>

            <div>
              <h2 className="text-h2 font-display font-semibold mb-4">Our Philosophy</h2>
              <div className="space-y-3">
                <p className="text-body text-slate">• Trust is earned through consistent, verifiable processes</p>
                <p className="text-body text-slate">• Security must be practical, not just principled</p>
                <p className="text-body text-slate">• Capability should be integrated, not siloed</p>
                <p className="text-body text-slate">• Australian expertise delivered locally</p>
              </div>
            </div>

            <div className="pt-8">
              <Button href="/contact" variant="primary">Talk to Us</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
