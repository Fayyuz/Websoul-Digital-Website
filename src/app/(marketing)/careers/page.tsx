'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export default function CareersPage() {
  return (
    <>
      <Section background="mist" spacing="lg" className="border-b border-silver">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate/60">EVP & Careers</span>
            </div>
            <h1 className="text-hero-mobile md:text-h1 font-display font-bold tracking-tight text-ink mb-8">
              Join the Talent Network.
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <p className="text-body-lg text-ink font-medium leading-relaxed">
                We are building a community of the most capable professionals in Australia&apos;s high-trust digital landscape.
              </p>
              <p className="text-body text-slate leading-relaxed">
                Rather than constant open-market hiring, we prioritize long-term relationships with a curated network of consultants, engineers, and specialists ready to support mission-critical delivery.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7 space-y-16">
              <div>
                <h2 className="text-h3 font-display font-bold text-ink mb-6">Talent Domains</h2>
                <div className="grid gap-6">
                  <div className="p-8 border border-silver rounded-2xl bg-mist/20">
                    <h3 className="font-bold text-ink mb-2">Technical Delivery</h3>
                    <p className="text-sm text-slate">Secure-by-design engineering, Cloud architecture (AWS/Azure), DevSecOps, and modern full-stack delivery.</p>
                  </div>
                  <div className="p-8 border border-silver rounded-2xl bg-mist/20">
                    <h3 className="font-bold text-ink mb-2">Governance & Advisory</h3>
                    <p className="text-sm text-slate">DISP practitioners, IRAP assessors, GRC specialists, and policy/governance advisors.</p>
                  </div>
                  <div className="p-8 border border-silver rounded-2xl bg-mist/20">
                    <h3 className="font-bold text-ink mb-2">Trust & Integrity</h3>
                    <p className="text-sm text-slate">Personnel security specialists, vetting advisory, and trusted workforce framework consultants.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-h3 font-display font-bold text-ink mb-6">Why Websoul?</h2>
                <div className="prose text-slate space-y-4 max-w-none">
                  <p>Working with Websoul Digital means engaging with high-impact, sovereign-focused work that matters to Australia&apos;s security and resilience.</p>
                  <ul className="list-disc pl-5">
                    <li>Mission-critical projects in regulated and secure environments.</li>
                    <li>A culture that prioritizes professional integrity and technical excellence.</li>
                    <li>Flexible engagement models for specialist independent consultants.</li>
                    <li>A Canberra-based hub with national reach.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="sticky top-32 p-10 border border-silver bg-mist/30 rounded-3xl">
                <h3 className="text-h4 font-display font-bold text-ink mb-6">Express Interest</h3>
                <p className="text-sm text-slate mb-8 leading-relaxed">
                  We review expressions of interest on a rolling basis. Please provide your professional profile and areas of expertise.
                </p>
                <div className="space-y-6">
                  <div className="p-6 bg-paper border border-silver rounded-2xl text-center">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate mb-2">Resume submission</p>
                    <a href="mailto:hello@websoul.com.au" className="text-sm font-bold text-ink hover:underline">hello@websoul.com.au</a>
                  </div>
                  <Button href="/contact" variant="primary" className="w-full h-12 uppercase tracking-widest text-[10px] font-bold">
                    Talk to Talent Lead
                  </Button>
                </div>
                <div className="mt-8 pt-8 border-t border-silver">
                  <p className="text-[10px] text-slate italic leading-relaxed">
                    We value and respect privacy. Any data shared with us is handled in accordance with our <Link href="/privacy" className="text-ink underline">Privacy Policy</Link> and is never shared without explicit consent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
