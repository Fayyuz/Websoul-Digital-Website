import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Shield, Users, Target, Rocket } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity First',
      description: 'Trust is not an abstract concept; it is the result of consistent, verifiable processes and professional character.',
    },
    {
      icon: Users,
      title: 'Trusted Expertise',
      description: 'We bring together specialized personnel who understand the unique requirements of regulated and secure environments.',
    },
    {
      icon: Target,
      title: 'Practical Impact',
      description: 'We prioritize operational results over abstract strategy, delivering the tangible stability organisations need to perform.',
    },
    {
      icon: Rocket,
      title: 'Modern Capability',
      description: 'We bridge the gap between traditional security requirements and modern digital-first delivery expectations.',
    },
  ]

  return (
    <>
      <Section background="mist" spacing="lg" className="border-b border-silver">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate/60">Company Profile</span>
            </div>
            <h1 className="text-hero-mobile md:text-h1 font-display font-bold tracking-tight text-ink mb-8">
              Built for trust.
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <p className="text-body-lg text-ink font-medium leading-relaxed">
                Websoul Digital is a sovereign Australian consultancy dedicated to building organizational stability in high-trust environments.
              </p>
              <p className="text-body text-slate leading-relaxed">
                Formed with a vision to integrate workforce integrity, digital engineering, and security governance, we provide a unified capability for enterprises and government agencies operating in complex domains.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-h2 font-display font-bold text-ink mb-6">The Integrated Model</h2>
              <div className="space-y-6">
                <p className="text-body text-slate leading-relaxed">
                  We believe that trust is the foundation of modern high-performance organisations. However, trust is often fragmented—siloed across HR, IT, and Security departments.
                </p>
                <p className="text-body text-slate leading-relaxed">
                  Websoul Digital was built as an integrated response to this fragmentation. By uniting Trust Services, Digital Delivery, and DISP Advisory, we ensure that your people are verified, your systems are secure, and your environment is compliant.
                </p>
                <p className="text-body text-slate leading-relaxed">
                  This integrated approach reduces operational friction, accelerates project velocity, and provides executive leadership with absolute confidence in their organizational capability.
                </p>
              </div>
            </div>
            <div className="bg-mist rounded-[2rem] p-12 aspect-square flex flex-col justify-center border border-silver">
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center flex-shrink-0 font-bold text-xs uppercase tracking-tighter">01</div>
                  <div>
                    <h3 className="font-bold text-ink mb-1">Verify Personnel</h3>
                    <p className="text-sm text-slate">Establishing identity and integrity foundations.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center flex-shrink-0 font-bold text-xs uppercase tracking-tighter">02</div>
                  <div>
                    <h3 className="font-bold text-ink mb-1">Secure Delivery</h3>
                    <p className="text-sm text-slate">Building resilient digital infrastructure and systems.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center flex-shrink-0 font-bold text-xs uppercase tracking-tighter">03</div>
                  <div>
                    <h3 className="font-bold text-ink mb-1">Assure Environment</h3>
                    <p className="text-sm text-slate">Maintaining compliance and environmental readiness.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="mist" spacing="lg">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-h2 font-display font-bold text-ink mb-4">Our Values</h2>
            <p className="text-body text-slate max-w-xl mx-auto">
              How we approach delivery for our clients and our partners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-paper border border-silver mb-6">
                    <Icon className="w-5 h-5 text-ink" />
                  </div>
                  <h3 className="font-bold text-ink mb-2">{value.title}</h3>
                  <p className="text-xs text-slate leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="bg-ink rounded-[2.5rem] p-12 md:p-20 text-center text-paper overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
              <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] border border-white rounded-full" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] border border-white rounded-full" />
            </div>
            <div className="relative z-10">
              <h2 className="text-h2 font-display font-bold mb-6">Ready to partner?</h2>
              <p className="text-body-lg text-paper/60 mb-10 max-w-xl mx-auto">
                Engage a specialized consultancy that understands the stakes of high-trust operations.
              </p>
              <Button href="/contact" variant="primary" className="bg-paper text-ink hover:bg-silver h-14 px-12">Get in touch</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
