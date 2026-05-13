import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { CircleCheck, ShieldCheck, Zap } from 'lucide-react'

const caseStudies = [
  {
    title: 'Rapid DISP Readiness Support',
    clientType: 'Defence Technology SME',
    challenge: 'A rapidly growing technology firm needed to achieve DISP Entry Level readiness to secure a major supply chain contract.',
    solution: 'Websoul Digital provided a comprehensive readiness roadmap, covering governance uplift, personnel trust pathways, and information security alignment with defence standards.',
    result: 'Organisational readiness achieved in 12 weeks, enabling successful contract award.',
    icon: ShieldCheck
  },
  {
    title: 'Secure Cloud Transformation',
    clientType: 'Regulated Financial Services',
    challenge: 'Modernising legacy infrastructure while maintaining strict compliance with sovereign data requirements.',
    solution: 'Engineered a secure-by-design cloud landing zone with automated security controls and clear evidence-trails for regulatory reporting.',
    result: '40% reduction in deployment friction and 100% compliance alignment.',
    icon: Zap
  },
  {
    title: 'Trusted Workforce Scaling',
    clientType: 'Critical Infrastructure Provider',
    challenge: 'Scaling a specialized engineering workforce requiring high-integrity onboarding and screening.',
    solution: 'Implemented a streamlined trust framework that reduced screening latency without compromising integrity or privacy standards.',
    result: 'Onboarding time reduced by 30% for specialist roles.',
    icon: CircleCheck
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate/60 px-1">Evidence of Impact</span>
            </div>
            <h1 className="text-h1 font-display font-bold mb-4 text-ink">Results in context.</h1>
            <p className="text-body-lg text-slate lg:max-w-xl">
              We focus on measurable outcomes in high-trust environments. Our approach combines technical depth with practical delivery expertise.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="grid gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="grid lg:grid-cols-12 gap-12 p-8 md:p-12 border border-silver rounded-3xl bg-mist/20 hover:bg-mist/30 transition-colors duration-500">
                <div className="lg:col-span-5">
                  <div className="w-14 h-14 rounded-2xl bg-paper border border-silver flex items-center justify-center mb-8">
                    <study.icon className="w-6 h-6 text-ink" />
                  </div>
                  <div className="inline-block mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate/60">{study.clientType}</span>
                  </div>
                  <h2 className="text-h2 font-display font-bold text-ink mb-6">{study.title}</h2>
                  <div className="p-6 bg-paper/50 rounded-2xl border border-silver">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2">Outcome</p>
                    <p className="text-sm font-bold text-ink">{study.result}</p>
                  </div>
                </div>
                <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-8">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate mb-3">The Challenge</h3>
                    <p className="text-body text-slate leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate mb-3">Consultancy Engagement</h3>
                    <p className="text-body text-slate leading-relaxed">{study.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-ink rounded-3xl text-center text-paper">
            <h2 className="text-h2 font-display font-bold mb-6">Need similar results?</h2>
            <p className="text-body text-silver/60 max-w-xl mx-auto mb-10">
              Our consultants are ready to discuss your specific mission goals and how our capabilities align with your requirements.
            </p>
            <Button href="/contact" variant="outline" className="h-14 px-10 border-paper text-paper hover:bg-paper hover:text-ink transition-all">
              Consult a Specialist
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
