import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { 
  Shield, 
  Search, 
  ClipboardCheck, 
  GitBranch, 
  Wrench, 
  FileCheck, 
  Activity,
  CheckCircle2,
  FileText,
  Layers
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Essential Eight ML2 & ISM Assurance | Websoul Digital',
  description: 'Essential Eight Maturity Level 2 readiness, ISM control mapping, PSPF alignment and DISP cyber evidence support for Australian Government and Defence industry suppliers.',
}

export default function EssentialEightML2Page() {
  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-slate mb-4">
              <Shield className="w-4 h-4" />
              <span>DISP Advisory / Cyber Assurance</span>
            </div>
            <h1 className="text-h1 font-display font-bold tracking-tight text-ink mb-6">
              Essential Eight ML2 & ISM Assurance.
            </h1>
            <p className="text-body-lg text-slate mb-4 max-w-2xl">
              Cyber uplift for Australian Government entities and Defence industry suppliers, aligned to ASD Essential Eight, the Information Security Manual, PSPF and DISP expectations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">Start a readiness review</Button>
              <Button href="#methodology" variant="secondary">View methodology</Button>
            </div>
          </div>
        </Container>
      </Section>
      <Section background="paper" spacing="lg">
        <Container>
            <h2 className="text-h2 font-display font-bold text-ink mb-6">Why Essential Eight ML2 matters.</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-silver rounded-2xl p-6 bg-mist/20">
                    <h3 className="font-semibold text-ink mb-2">Government baseline</h3>
                    <p className="text-slate text-sm">For Commonwealth entities, ML2 supports PSPF information security maturity expectations.</p>
                </div>
                <div className="border border-silver rounded-2xl p-6 bg-mist/20">
                    <h3 className="font-semibold text-ink mb-2">Defence supplier readiness</h3>
                    <p className="text-slate text-sm">Central to DISP cyber assurance expectations and the Cyber Security Questionnaire process.</p>
                </div>
                <div className="border border-silver rounded-2xl p-6 bg-mist/20">
                    <h3 className="font-semibold text-ink mb-2">Evidence-based assurance</h3>
                    <p className="text-slate text-sm">Moving from checklist compliance to demonstrable, evidence-backed security maturity.</p>
                </div>
            </div>
        </Container>
      </Section>
    </>
  )
}
