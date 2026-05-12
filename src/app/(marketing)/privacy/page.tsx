'use client'

import React from 'react'
import { SiteHeader } from '@/components/modules/SiteHeader'
import { Footer } from '@/components/modules/Footer'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="pt-32">
        <Section>
          <Container>
            <div className="max-w-4xl">
              <h1 className="text-display-2 font-bold tracking-tight mb-12">Privacy Policy</h1>
              <div className="prose-consulting space-y-12">
                 <p className="text-body-lg text-brand-ink font-medium">
                   Last Updated: May 2024. Websoul Digital is committed to protecting your professional data and personal privacy in accordance with the Australian Privacy Principles.
                 </p>
                 
                 <div>
                    <h2 className="text-heading-3 mb-6">1. Data Collection</h2>
                    <p>We only collect information necessary to fulfill our advisory and trust screening services. This includes professional identity, contact details, and engagement briefs provided voluntarily.</p>
                 </div>

                 <div>
                    <h2 className="text-heading-3 mb-6">2. Data Sovereignty</h2>
                    <p>All data handled by Websoul Digital is stored on Australian-resident sovereign infrastructure. We do not export data to foreign jurisdictions unless explicitly required by a specific international engagement brief.</p>
                 </div>

                 <div>
                    <h2 className="text-heading-3 mb-6">3. Security Protcols</h2>
                    <p>We employ multi-factor authentication, end-to-end encryption for sensitive transmissions, and regular security audits at a DISP Level 3 standard to ensure your information remains secure.</p>
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
