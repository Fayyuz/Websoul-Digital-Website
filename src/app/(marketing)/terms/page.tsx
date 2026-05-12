'use client'

import React from 'react'
import { SiteHeader } from '@/components/modules/SiteHeader'
import { Footer } from '@/components/modules/Footer'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'

export default function TermsPage() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="pt-32">
        <Section>
          <Container>
            <div className="max-w-4xl">
              <h1 className="text-display-2 font-bold tracking-tight mb-12">Terms of Engagement</h1>
              <div className="prose-consulting space-y-12">
                 <p className="text-body-lg text-brand-ink font-medium">
                   Welcome to the digital operations of Websoul Digital. By accessing this site or engaging our services, you agree to these operational terms.
                 </p>
                 
                 <div>
                    <h2 className="text-heading-3 mb-6">1. Acceptance of Terms</h2>
                    <p>Engagement with Websoul Digital acknowledges acceptance of these terms and any specific non-disclosure agreements (NDAs) required by operational necessity.</p>
                 </div>

                 <div>
                    <h2 className="text-heading-3 mb-6">2. Professional Advisory</h2>
                    <p>While we strive for absolute precision, all advisory provided via digital channels is preliminary. Formal engagement requires a signed Statement of Work (SoW).</p>
                 </div>

                 <div>
                    <h2 className="text-heading-3 mb-6">3. Intellectual Property</h2>
                    <p>Websoul Digital retains ownership of its proprietary methodologies, screening algorithms, and trust architecture blueprints unless otherwise specified in an engagement contract.</p>
                 </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
