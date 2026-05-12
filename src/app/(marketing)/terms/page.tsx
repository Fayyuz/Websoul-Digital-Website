import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export default function TermsPage() {
  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-h1 font-display font-semibold mb-4">Terms of Use</h1>
            <p className="text-body text-slate">Last updated: May 12, 2026</p>
          </div>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2 className="text-h2 font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">By accessing and using this website, you accept and agree to be bound by these Terms of Use.</p>

            <h2 className="text-h2 font-semibold mb-4">2. Use of Website</h2>
            <p className="mb-6">You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use of the website.</p>

            <h2 className="text-h2 font-semibold mb-4">3. Intellectual Property</h2>
            <p className="mb-6">All content on this website, including text, graphics, logos, and code, is the property of Websoul Digital and is protected by intellectual property laws.</p>

            <h2 className="text-h2 font-semibold mb-4">4. Disclaimer</h2>
            <p className="mb-6">The information on this website is provided for general informational purposes only. We make no representations or warranties about the accuracy or completeness of the information.</p>

            <h2 className="text-h2 font-semibold mb-4">5. Limitation of Liability</h2>
            <p className="mb-6">To the fullest extent permitted by law, Websoul Digital shall not be liable for any damages arising out of or in connection with the use of this website.</p>

            <h2 className="text-h2 font-semibold mb-4">6. Changes to Terms</h2>
            <p className="mb-6">We may modify these Terms at any time. Your continued use of the website constitutes acceptance of the modified terms.</p>

            <h2 className="text-h2 font-semibold mb-4">7. Governing Law</h2>
            <p className="mb-6">These Terms are governed by the laws of the Australian Capital Territory, Australia.</p>

            <h2 className="text-h2 font-semibold mb-4">8. Contact</h2>
            <p>For questions about these Terms, please contact us at legal@websoul.digital.</p>
          </div>
        </Container>
      </Section>
    </>
  )
}
