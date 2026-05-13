'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { CircleCheck } from 'lucide-react'
import { outcomesList } from '@/lib/constants'

export const OutcomesSection = () => {
  return (
    <Section background="paper" spacing="lg">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="bg-mist/30 border border-silver rounded-[2rem] p-10 md:p-12">
                <div className="space-y-8">
                  {outcomesList.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-ink/5 border border-ink/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-ink group-hover:text-paper transition-colors duration-300">
                        <CircleCheck className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-sm font-medium text-ink leading-relaxed underline decoration-silver underline-offset-[6px] decoration-1 transition-all group-hover:decoration-ink/30">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate">Client Outcomes</span>
            </div>
            <h2 className="text-h1 font-display font-bold tracking-tight text-ink mb-6">
              Measurable stability.
            </h2>
            <p className="text-body-lg text-slate mb-8 leading-relaxed">
              We focus on delivering tangible operational outcomes that allow our clients to focus on their core mission, supported by a foundation of trust and security excellence.
            </p>
            <div className="w-12 h-1 bg-ink/10" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
