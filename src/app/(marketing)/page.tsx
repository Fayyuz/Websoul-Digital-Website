'use client'

import React from 'react'
import { Hero } from '@/components/modules/Hero'
import { ServiceGrid } from '@/components/modules/ServiceGrid'
import { TrustArchitecture } from '@/components/modules/TrustArchitecture'
import { MarqueeLogos } from '@/components/modules/MarqueeLogos'
import { Footer } from '@/components/modules/Footer'
import { SiteHeader } from '@/components/modules/SiteHeader'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <MarqueeLogos />
        <ServiceGrid />
        <TrustArchitecture />
      </main>
      <Footer />
    </div>
  )
}
