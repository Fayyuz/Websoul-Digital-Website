import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export default function PrivacyPage() {
  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-h1 font-display font-semibold mb-4">Privacy Policy</h1>
            <p className="text-body text-slate">Last updated: May 12, 2026</p>
          </div>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2 className="text-h2 font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-6">We collect information you provide directly to us, such as when you contact us through our website forms or email. This may include your name, email address, phone number, and message content.</p>

            <h2 className="text-h2 font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-6">We use the information we collect to respond to your inquiries, provide our services, and communicate with you about our offerings. We do not sell or share your personal information with third parties for marketing purposes.</p>

            <h2 className="text-h2 font-semibold mb-4">3. Data Security</h2>
            <p className="mb-6">We take reasonable measures to protect your personal information from unauthorised access, alteration, or disclosure.</p>

            <h2 className="text-h2 font-semibold mb-4">4. Cookies</h2>
            <p className="mb-6">Our website uses essential cookies for functionality. We do not use tracking or analytics cookies without your consent.</p>

            <h2 className="text-h2 font-semibold mb-4">5. Your Rights</h2>
            <p className="mb-6">You may request access to, correction of, or deletion of your personal information by contacting us.</p>

            <h2 className="text-h2 font-semibold mb-4">6. Contact Us</h2>
            <p>For privacy-related inquiries, please contact us at privacy@websoul.digital.</p>
          </div>
        </Container>
      </Section>
    </>
  )
}
