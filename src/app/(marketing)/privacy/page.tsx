'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export default function PrivacyPage() {
  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-h1 font-display font-bold mb-4 text-ink">Privacy Policy</h1>
            <p className="text-body text-slate">Effective Date: May 12, 2026</p>
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="prose max-w-none text-slate space-y-8">
              <section>
                <h2 className="text-h3 font-display font-bold text-ink mb-4">1. Collection of Information</h2>
                <p>Websoul Digital collects personal information required to facilitate our consultancy operations and respond to mission-critical enquiries. This may include professional contact details, organisational affiliation, and information relevant to security readiness assessments.</p>
              </section>

              <section>
                <h2 className="text-h3 font-display font-bold text-ink mb-4">2. Use of Data</h2>
                <p>We use collected data strictly for service delivery, professional communication, and maintaining organisational trust. We do not engage in the sale or unauthorized sharing of personal information with third-party marketing entities.</p>
              </section>

              <section>
                <h2 className="text-h3 font-display font-bold text-ink mb-4">3. Australian Privacy Principles</h2>
                <p>We are committed to adhering to the Privacy Act 1988 (Cth) and the Australian Privacy Principles. For individuals in the EU, we ensure alignment with relevant GDPR requirements where applicable to our global operations.</p>
              </section>

              <section>
                <h2 className="text-h3 font-display font-bold text-ink mb-4">4. Secure Handling</h2>
                <p>Given our focus on secure environments, we implement rigorous technical and organisational measures to protect data. For sensitive disclosures, we recommend using secure transmission channels facilitated by our specialists.</p>
              </section>

              <section className="pt-10 border-t border-silver">
                <p className="text-[10px] font-bold uppercase tracking-widest">Enquiries</p>
                <p>For privacy-related matters, please contact <a href="mailto:hello@websoul.com.au" className="text-ink font-bold hover:underline">hello@websoul.com.au</a>.</p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
