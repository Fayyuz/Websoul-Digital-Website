import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FileText, Download, Mail } from 'lucide-react'

export default function CapabilityStatementPage() {
  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate/60 px-1">Resources</span>
            </div>
            <h1 className="text-h1 font-display font-bold mb-4 text-ink">Capability Statement.</h1>
            <p className="text-body-lg text-slate lg:max-w-xl">
              An overview of our consultancy ecosystem, core service arms, and sovereign focus.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto border border-silver rounded-3xl bg-mist/20 p-12 md:p-20 text-center">
            <div className="w-20 h-20 bg-paper border border-silver border-dashed rounded-3xl flex items-center justify-center mx-auto mb-10">
              <FileText className="w-10 h-10 text-slate" />
            </div>
            <h2 className="text-h2 font-display font-bold text-ink mb-6">Request Latest Version</h2>
            <p className="text-body text-slate max-w-xl mx-auto mb-12 leading-relaxed">
              Our Capability Statement is updated regularly to reflect our growing team and evolving technical competencies. To ensure you have the most current information, please request a copy via email.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button href="mailto:hello@websoul.com.au?subject=Request Capability Statement" variant="primary" className="h-14 px-10">
                <Mail className="w-4 h-4 mr-2" />
                Request via Email
              </Button>
              <Button href="/contact" variant="secondary" className="h-14 px-10">
                Consult a Specialist
              </Button>
            </div>

            <div className="mt-20 pt-10 border-t border-silver text-[10px] font-bold uppercase tracking-[0.3em] text-slate/40">
              Sovereign Delivery | Trust Services | Advisory
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
