import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export default function CareersPage() {
  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-h1 font-display font-semibold mb-4">Join Our Network</h1>
            <p className="text-body-lg text-slate">
              We&apos;re always interested in connecting with capable professionals.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-h2 font-display font-semibold mb-4">Talent Network</h2>
              <p className="text-body text-slate mb-6">
                Whether you&apos;re an experienced consultant, security professional, or delivery specialist, we want to hear from you.
              </p>
              <p className="text-body text-slate">
                We review expressions of interest regularly and will reach out when there&apos;s alignment with current or upcoming opportunities.
              </p>
            </div>

            <div className="border border-silver rounded-2xl p-8 bg-mist">
              <h3 className="text-h3 font-semibold mb-3">Express Interest</h3>
              <p className="text-body text-slate mb-6">
                Send your resume and a brief introduction to:
              </p>
              <p className="text-body font-mono bg-paper p-3 rounded border border-silver text-center">
                careers@websoul.digital
              </p>
              <p className="text-small text-slate mt-4">
                We respond to all expressions of interest within 10 business days.
              </p>
            </div>

            <div>
              <h2 className="text-h2 font-display font-semibold mb-4">What We Value</h2>
              <div className="space-y-3">
                <p className="text-body text-slate">• Excellence in delivery and client outcomes</p>
                <p className="text-body text-slate">• Integrity in all professional dealings</p>
                <p className="text-body text-slate">• Security awareness and practical application</p>
                <p className="text-body text-slate">• Collaboration and knowledge sharing</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
