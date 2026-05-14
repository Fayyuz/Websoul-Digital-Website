'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ArrowRight } from 'lucide-react'

const insights = [
  {
    title: 'The State of DISP Readiness in 2026',
    category: 'Analysis Request',
    summary: 'Practical security maturity, governance and cyber readiness for defence-adjacent suppliers.',
  },
  {
    title: 'Workforce Trust in Digital Delivery',
    category: 'Briefing Request',
    summary: 'Trusted onboarding, identity assurance and secure operating models for regulated sectors.',
  },
  {
    title: 'Secure-by-Design Governance',
    category: 'Consultancy',
    summary: 'Translating complex cyber frameworks into actionable delivery backlogs and evidence.',
  }
]

export const InsightsPreview = () => {
  return (
    <Section background="mist" spacing="lg" className="border-y border-silver">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
          <div className="max-w-xl">
            <div className="inline-block mb-4">
              <span className="text-base font-bold uppercase tracking-[0.3em] text-slate/60">Briefings & Analysis</span>
            </div>
            <h2 className="text-h1 font-display font-bold tracking-tight text-ink">
              Modern perspective on<br />governance & delivery.
            </h2>
          </div>
          <Link 
            href="/insights" 
            className="group flex items-center gap-3 text-base font-bold uppercase tracking-widest text-ink hover:text-slate transition-colors"
          >
            All Insights
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {insights.map((article, index) => (
            <article key={index} className="flex flex-col h-full group">
              <div className="mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-ink/20" />
                <span className="text-base font-bold uppercase tracking-widest text-slate/60">
                  {article.category}
                </span>
              </div>
              <h3 className="text-h4 font-display font-bold text-ink mb-4 group-hover:text-slate transition-colors leading-tight">
                <Link href="/contact">{article.title}</Link>
              </h3>
              <p className="text-base text-slate leading-relaxed mb-8">
                {article.summary}
              </p>
              <div className="mt-auto pt-6 border-t border-silver">
                <Link 
                  href="/contact" 
                  className="text-base font-bold uppercase tracking-widest text-ink/40 group-hover:text-ink transition-colors"
                >
                  Enquire about Analysis
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
