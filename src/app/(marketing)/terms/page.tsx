import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export default function TermsPage() {
  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-h1 font-display font-bold mb-4 text-ink">Terms of Engagement</h1>
            <p className="text-body text-slate">Effective Date: May 12, 2026</p>
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-sm max-w-none text-slate space-y-8">
            <section>
              <h2 className="text-h3 font-display font-bold text-ink mb-4">1. Consultancy Framework</h2>
              <p>These terms govern the access to information provided by Websoul Digital. Formal consultancy engagements are governed by specific Master Services Agreements (MSA) or Statements of Work (SOW).</p>
            </section>

            <section>
              <h2 className="text-h3 font-display font-bold text-ink mb-4">2. Intellectual Property</h2>
              <p>The methodologies, frameworks, and content provided on this website are the intellectual property of Websoul Digital Pty Ltd. Unauthorised reproduction or distribution is strictly prohibited.</p>
            </section>

            <section>
              <h2 className="text-h3 font-display font-bold text-ink mb-4">3. Governing Law</h2>
              <p>These terms and any engagement through this platform are governed by the laws of the Australian Capital Territory (ACT), Australia.</p>
            </section>

            <section className="pt-10 border-t border-silver">
              <p className="text-[10px] font-bold uppercase tracking-widest">Legal Contact</p>
              <p>For legal enquiries, please contact <a href="mailto:hello@websoul.com.au" className="text-ink font-bold hover:underline">hello@websoul.com.au</a>.</p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  )
}
