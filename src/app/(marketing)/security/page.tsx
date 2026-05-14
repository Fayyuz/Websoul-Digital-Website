'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Link2, Mail, ShieldCheck } from 'lucide-react'

export default function SecurityPage() {
  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-h1 font-display font-bold mb-4 text-ink">Security & Responsible Disclosure.</h1>
            <p className="text-body-lg text-slate lg:max-w-xl">
              Websoul Digital is committed to ensuring the security and integrity of our systems and client delivery. We welcome reports of potential security vulnerabilities.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-px bg-silver border border-silver mb-20">
              <div className="bg-mist/30 p-10">
                <ShieldCheck className="w-8 h-8 text-ink mb-6" />
                <h2 className="text-h4 font-display font-bold text-ink mb-4">Our Approach</h2>
                <p className="text-sm text-slate leading-relaxed">
                  We operate with a secure-by-design methodology across all internal systems and client engagements. We prioritise the confidentiality and integrity of sovereign data.
                </p>
              </div>
              <div className="bg-mist/30 p-10">
                <Mail className="w-8 h-8 text-ink mb-6" />
                <h2 className="text-h4 font-display font-bold text-ink mb-4">Report Vulnerabilities</h2>
                <p className="text-sm text-slate leading-relaxed">
                  If you believe you&apos;ve discovered a security vulnerability in a Websoul Digital system, please notify us via hello@websoul.com.au.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-h3 font-display font-bold text-ink">Disclosure Policy</h2>
                <div className="prose max-w-none text-slate space-y-4">
                  <p>When reporting a potential vulnerability, we ask that you:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Allow us a reasonable amount of time to resolve the issue before making it public.</li>
                    <li>Make a good faith effort to avoid privacy violations and data destruction.</li>
                    <li>Avoid interacting with user accounts or data without permission.</li>
                    <li>Provide sufficient information to reproduce the issue.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-h3 font-display font-bold text-ink">Exclusions</h2>
                <p className="text-sm text-slate leading-relaxed">
                  Please note that we do not have a public bug bounty program and do not offer financial compensation for reports. We appreciate the community&apos;s support in keeping our sovereign systems secure.
                </p>
              </div>

              <div className="pt-12 border-t border-silver">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate mb-4">PGP Keys & Secure Comms</p>
                <p className="text-sm text-slate leading-relaxed">
                  For sensitive security reports requiring encrypted transmission, please contact us at <a href="mailto:hello@websoul.com.au" className="text-ink font-bold hover:underline">hello@websoul.com.au</a> to request a PGP public key or a secure transmission link.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
