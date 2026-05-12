'use client'

import React from 'react'
import { SiteHeader } from '@/components/modules/SiteHeader'
import { Footer } from '@/components/modules/Footer'
import { FadeIn } from '@/components/animations/FadeIn'
import { Badge } from '@/components/ui/Badge'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="pt-32">
        <Section>
           <Container>
              <FadeIn direction="up">
                 <Badge variant="premium" className="mb-6">Our DNA</Badge>
                 <h1 className="text-display-2 font-bold tracking-tight mb-8">Trusted people.<br/><span className="text-accent-teal">Secure delivery.</span></h1>
                 <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <p className="text-body-lg text-brand-muted leading-relaxed">
                      Websoul Digital was founded on a simple premise: in a world of increasing digital complexity, trust is the only true currency. We are an Australian-owned consultancy specializing in the high-stakes intersection of ICT delivery and security assurance.
                    </p>
                    <div className="space-y-8">
                       <p className="text-body text-brand-ink font-medium leading-relaxed">
                         Our team brings together veterans of legacy system modernization and pioneers of zero-trust architecture. We don&apos;t just deliver software; we engineer resilience into the DNA of the organisations we serve.
                       </p>
                       <p className="text-body text-brand-muted leading-relaxed">
                         Based in Canberra, we operate with the cultural understanding and operational security required by Australia&apos;s most sensitive government and defence agencies.
                       </p>
                    </div>
                 </div>
              </FadeIn>
           </Container>
        </Section>

        <Section bg="silver">
           <Container>
              <div className="grid md:grid-cols-3 gap-12">
                 <ValueItem 
                    title="Precision" 
                    desc="We operate with surgical focus, ensuring every advisory brief and technical implementation is exact."
                 />
                 <ValueItem 
                    title="Sovereignty" 
                    desc="100% Australian-owned and operated. We prioritize national interest and data residency."
                 />
                 <ValueItem 
                    title="Integrity" 
                    desc="Technical integrity is matched only by our workforce's professional ethics and cleared status."
                 />
              </div>
           </Container>
        </Section>
      </main>
      <Footer />
    </div>
  )
}

interface ValueItemProps {
  title: string;
  desc: string;
}

function ValueItem({ title, desc }: ValueItemProps) {
   return (
      <div className="space-y-4">
         <h3 className="text-2xl font-bold text-brand-ink tracking-tight">{title}</h3>
         <p className="text-brand-muted leading-relaxed">{desc}</p>
      </div>
   )
}
