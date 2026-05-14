'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ArrowRight } from 'lucide-react'

const insights = [
  {
    title: 'The State of DISP Readiness for Australian SMEs in 2026',
    category: 'Advisory',
    date: 'May 12, 2026',
    summary: 'Practical security maturity, governance, personnel and cyber readiness for defence-adjacent suppliers as the regulatory landscape evolves.',
    slug: 'disp-readiness-2026'
  },
  {
    title: 'Why Workforce Trust Matters in Regulated Digital Delivery',
    category: 'Trust Services',
    date: 'April 28, 2026',
    summary: 'Trusted onboarding, identity assurance, privacy-aware verification and secure operating models are the foundation of sovereign digital delivery.',
    slug: 'workforce-trust'
  },
  {
    title: 'Secure-by-Design Delivery: Turning ISM and Essential Eight into Controls',
    category: 'Digital Delivery',
    date: 'April 15, 2026',
    summary: 'Translating complex cyber frameworks into actionable delivery backlogs, governance checkpoints and measurable evidence.',
    slug: 'secure-by-design'
  },
  {
    title: 'Navigating Sovereign Cloud Strategy for Government Agencies',
    category: 'Consultancy',
    date: 'March 30, 2026',
    summary: 'How agencies can balance technical innovation with strict data residency and security control requirements in a cloud-first era.',
    slug: 'sovereign-cloud-strategy'
  }
]

export default function InsightsPage() {
  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="text-base font-bold uppercase tracking-[0.3em] text-slate/60 px-1">Knowledge Leadership</span>
            </div>
            <h1 className="text-h1 font-display font-bold mb-4 text-ink">Modern perspective.</h1>
            <p className="text-body-lg text-slate lg:max-w-xl">
              Analysis and strategy for organisations operating in secure, regulated, and high-trust environments.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="grid gap-px bg-silver border border-silver">
            {insights.map((article, index) => (
              <Link 
                key={index} 
                href="/contact" 
                className="group bg-paper p-8 md:p-12 grid md:grid-cols-12 gap-8 hover:bg-mist/30 transition-colors duration-500"
              >
                <div className="md:col-span-3 lg:col-span-2">
                  <div className="flex flex-col gap-2">
                    <span className="text-base font-bold uppercase tracking-widest text-ink/40">
                      {article.date}
                    </span>
                    <span className="text-base font-bold uppercase tracking-widest text-slate/60">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-9 lg:col-span-7">
                  <h2 className="text-h3 font-display font-bold text-ink mb-4 group-hover:text-slate transition-colors leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-base text-slate leading-relaxed">
                    {article.summary}
                  </p>
                </div>
                <div className="md:col-span-12 lg:col-span-3 flex items-center lg:justify-end">
                  <div className="flex items-center gap-3 text-base font-bold uppercase tracking-widest text-ink md:opacity-0 group-hover:opacity-100 transition-opacity">
                    Request Analysis
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 border border-silver rounded-3xl p-12 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="max-w-md">
              <h2 className="text-h4 font-display font-bold text-ink mb-3">Custom Briefings</h2>
              <p className="text-sm text-slate leading-relaxed">
                Looking for a specialized briefing on DISP readiness or secure digital strategy for your executive team? 
              </p>
            </div>
            <Link 
              href="/contact" 
              className="px-8 py-4 border border-ink text-base font-bold uppercase tracking-widest text-ink hover:bg-ink hover:text-paper transition-all"
            >
              Enquire about Briefings
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
