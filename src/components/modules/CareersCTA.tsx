import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export const CareersCTA = () => {
  return (
    <Section background="mist" spacing="lg" className="border-t border-silver">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate">Personnel & Talent</span>
          </div>
          <h2 className="text-h1 font-display font-bold text-ink mb-6 tracking-tight">Join our delivery network.</h2>
          <p className="text-body-lg text-slate mb-10 leading-relaxed max-w-2xl mx-auto">
            We are consistently seeking capable professionals who share our commitment to architectural integrity, security-by-design, and delivery excellence within regulated Australian environments.
          </p>
          <Button href="/careers" variant="secondary" className="h-14 px-12">
            View Career Portals
          </Button>
        </div>
      </Container>
    </Section>
  )
}
