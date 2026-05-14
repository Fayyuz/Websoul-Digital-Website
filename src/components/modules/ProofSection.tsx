import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const proofPoints = [
  {
    title: 'Secure Digital Delivery',
    description: 'Years of experience supporting complex ICT delivery in sensitive Australian Government environments.',
    metric: 'Government Grade'
  },
  {
    title: 'Cyber & Assurance',
    description: 'Practical alignment with ISM, Essential Eight, PSPF and secure-by-design delivery patterns.',
    metric: 'Strategic Compliance'
  },
  {
    title: 'DISP Readiness',
    description: 'Governance, personnel, information and cyber uplift support for defence-adjacent organisations.',
    metric: 'Accreditation Support'
  },
  {
    title: 'Workforce Trust',
    description: 'Advisory and readiness support for trusted onboarding and integrity-focused operating models.',
    metric: 'Personnel Integrity'
  }
]

export const ProofSection = () => {
  return (
    <Section background="paper" spacing="lg" className="border-b border-silver">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-20">
          <div>
            <div className="inline-block mb-4">
              <span className="text-base font-bold uppercase tracking-[0.3em] text-slate/60">Proof of Capability</span>
            </div>
            <h2 className="text-h1 font-display font-bold tracking-tight text-ink mb-6">
              Proven in complex<br />operating contexts.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-body-lg text-slate leading-relaxed">
              We provide the specialized capacity required to navigate Australian regulatory environments while maintaining the velocity required of modern digital operations.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-silver border border-silver">
          {proofPoints.map((point, index) => (
            <div key={index} className="bg-paper p-10 flex flex-col justify-between h-full group hover:bg-mist/30 transition-colors duration-500">
              <div className="space-y-6">
                <span className="text-base font-bold uppercase tracking-widest text-slate/40 block">
                  {point.metric}
                </span>
                <h3 className="text-h3 font-display font-bold text-ink leading-tight">
                  {point.title}
                </h3>
                <p className="text-base text-slate leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-silver flex flex-wrap justify-between items-center gap-8 text-base font-bold uppercase tracking-[0.4em] text-slate/30">
          <span>ASD ISM Alignment</span>
          <span>PSPF Frameworks</span>
          <span>Essential Eight Readiness</span>
          <span>DISP Governance</span>
          <span>Secure-by-Design</span>
        </div>
      </Container>
    </Section>
  )
}
