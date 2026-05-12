import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { TrendingUp, FileCheck, Building2, Target, ShieldAlert, ClipboardCheck } from 'lucide-react'

export default function DISPAdvisoryPage() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Maturity Assessments',
      description: 'Rigorous evaluation of current security maturity against DISP and regulated standards.',
    },
    {
      icon: FileCheck,
      title: 'Governance Frameworks',
      description: 'Developing professional security policies and procedures for trusted operations.',
    },
    {
      icon: Building2,
      title: 'Environment Uplift',
      description: 'Practical support for establishing secure physical and digital operating environments.',
    },
    {
      icon: Target,
      title: 'Compliance Roadmaps',
      description: 'Actionable pathways to achieve and maintain DISP accreditation and trusted status.',
    },
    {
      icon: ShieldAlert,
      title: 'Risk Management',
      description: 'Strategic security risk assessments and operational mitigation planning.',
    },
    {
      icon: ClipboardCheck,
      title: 'Assurance Preparation',
      description: 'Expert preparation for formal security audits and environmental assurance reviews.',
    },
  ]

  return (
    <>
      <Section background="mist" spacing="lg" className="border-b border-silver">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate/60">Capability: DISP Advisory</span>
            </div>
            <h1 className="text-hero-mobile md:text-h1 font-display font-bold tracking-tight text-ink mb-8">
              Accreditation with precision.
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <p className="text-body-lg text-ink font-medium leading-relaxed">
                We facilitate the journey to formal accreditation, ensuring your organisation meets the rigorous standards required for trusted operations.
              </p>
              <p className="text-body text-slate leading-relaxed">
                Operating within the Defence Industry Security Program (DISP) or similar high-trust frameworks requires a demonstrable commitment to governance and security. Our advisory provides the practical support to achieve and maintain this maturity.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="mb-16">
            <h2 className="text-h2 font-display font-bold text-ink mb-4">Advisory Services</h2>
            <p className="text-body text-slate max-w-2xl">
              Practical support for organisations navigating the complexities of trusted-environment accreditation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="group border border-silver rounded-2xl p-8 hover:border-ink/10 hover:shadow-sm transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-mist flex items-center justify-center mb-6 group-hover:bg-ink group-hover:text-paper transition-colors">
                    <Icon className="w-6 h-6 text-ink group-hover:text-paper transition-colors" />
                  </div>
                  <h3 className="text-h4 font-display font-bold mb-3 text-ink">{service.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto bg-paper border border-silver rounded-[2rem] p-12 md:p-16 text-center">
            <h2 className="text-h2 font-display font-bold mb-6 text-ink">Achieve trusted status.</h2>
            <p className="text-body text-slate mb-10 max-w-xl mx-auto leading-relaxed">
              Talk to our advisory team about mapping your path to accreditation and establishing a compliant security posture.
            </p>
            <Button href="/contact" variant="primary" className="h-14 px-12">Consult an Advisor</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
