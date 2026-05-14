'use client'

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
              <span className="text-base font-bold uppercase tracking-[0.3em] text-slate/60">Capability: DISP Advisory</span>
            </div>
            <h1 className="text-hero-mobile md:text-h1 font-display font-bold tracking-tight text-ink mb-8">
              DISP readiness with cyber assurance discipline.
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
              <div className="space-y-6">
                <p className="text-body-lg text-ink font-medium leading-relaxed">
                  Practical advisory for Defence industry suppliers and government-facing organisations seeking stronger governance, Essential Eight ML2 uplift, ISM traceability and evidence-led security maturity.
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl shadow-sm">
                  <h3 className="font-bold text-ink text-base uppercase tracking-wider mb-4">Practical Buyer Outcomes</h3>
                  <ul className="space-y-3 text-base text-slate">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      Evidence packs for audits and customer assurance
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      Mapped controls across DISP, PSPF, ISM and Essential Eight
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      Practical uplift roadmap with owners, risks and priorities
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      Security governance artefacts suitable for Defence-facing SMEs
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-body text-slate leading-relaxed">
                  Navigating the Defence Industry Security Program (DISP) or similar high-trust frameworks requires a demonstrable commitment to security governance. Our advisory provides practical support to establish and maintain the maturity required for these environments.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="mb-16">
            <h2 className="text-h2 font-display font-bold text-ink mb-4">Advisory Services</h2>
            <p className="text-body text-slate max-w-2xl">
              Practical support for organisations navigating the complexities of trusted-environment accreditation and security maturity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'DISP Readiness & Maturity', description: 'Practical readiness support across governance, personnel, physical and ICT/cyber security expectations.' },
              { title: 'Essential Eight ML2 Assurance', description: 'Assessment, uplift planning and evidence preparation for Essential Eight Maturity Level 2.', href: '/disp-advisory/essential-eight-ml2' },
              { title: 'ISM Mapping & Traceability', description: 'Mapping Essential Eight requirements to ISM-aligned controls, evidence and owners.' },
              { title: 'PSPF / DSPF Alignment', description: 'Aligning cyber uplift with protective security, Defence supplier assurance and organisational risk expectations.' },
              { title: 'Risk Treatment & Exceptions', description: 'Clear risk registers, exception records, compensating control advice and executive decision support.' },
              { title: 'Assurance Packs & ATO Support', description: 'Security documentation, residual risk summaries and evidence packs to support authorisation decisions.' },
            ].map((service, index) => (
              <a key={index} href={service.href || '#'} className="block group border border-silver rounded-2xl p-8 hover:border-ink/10 hover:shadow-sm transition-all duration-300">
                <h3 className="text-h4 font-display font-bold mb-3 text-ink">{service.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{service.description}</p>
                {service.href && <span className="inline-block mt-4 text-base font-bold text-ink hover:underline">Explore readiness →</span>}
              </a>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="mist" spacing="lg" className="border-t border-silver">
        <Container>
            <h2 className="text-h2 font-display font-bold text-ink mb-8">Cyber assurance inside the DISP architecture.</h2>
            <p className="text-body text-slate mb-16 max-w-3xl">DISP readiness is not only a policy exercise. For suppliers handling Defence-related information, cyber maturity must be evidenced through practical controls, accountable owners and repeatable assurance. Websoul Digital connects Essential Eight ML2, ISM mapping, PSPF/DSPF expectations and security governance into one evidence-led operating model.</p>
            
            <div className="flex flex-wrap items-center gap-4 text-base font-bold uppercase tracking-widest text-ink mb-12">
              {[ 'Governance', 'Essential Eight ML2', 'ISM Mapping', 'Evidence Pack', 'Risk Decision', 'Continuous Assurance' ].map((item, i) => (
                 <div key={item} className="flex items-center gap-4">
                   <div className="px-6 py-4 bg-paper border border-silver rounded-full">{item}</div>
                   {i < 5 && <span>→</span>}
                 </div>
              ))}
            </div>
            
            <Button href="/disp-advisory/essential-eight-ml2" variant="primary" className="h-14 px-8">Explore Essential Eight ML2 Assurance</Button>
        </Container>
      </Section>
    </>
  )
}
