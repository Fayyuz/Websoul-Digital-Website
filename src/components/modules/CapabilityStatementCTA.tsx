'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FileText, ArrowRight } from 'lucide-react'

export const CapabilityStatementCTA = () => {
  return (
    <Section background="mist" spacing="md" className="border-y border-silver">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-paper p-8 md:p-12 border border-silver rounded-[2rem] shadow-sm">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-2xl bg-mist flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-ink" />
            </div>
            <div>
              <h2 className="text-h4 font-display font-bold text-ink mb-2">Websoul Capability Statement</h2>
              <p className="text-base text-slate max-w-md leading-relaxed">
                Receive a concise overview of our services, experience and delivery approach for Australian organisations.
              </p>
            </div>
          </div>
          <Button 
            href="/capability-statement" 
            variant="primary" 
            className="flex items-center gap-3 h-12 px-8 uppercase tracking-widest text-base font-bold whitespace-nowrap"
          >
            Request Capability Statement <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </Section>
  )
}
