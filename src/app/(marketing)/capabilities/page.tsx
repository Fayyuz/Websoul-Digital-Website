'use client'

import React from 'react'
import { SiteHeader } from '@/components/modules/SiteHeader'
import { Footer } from '@/components/modules/Footer'
import { FadeIn } from '@/components/animations/FadeIn'
import { Badge } from '@/components/ui/Badge'
import { Shield, Cloud, TrendingUp, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const capabilities = [
  {
    id: 'trust',
    title: 'Trust Services',
    description: 'Protecting workforce integrity through rigorous, data-driven screening and continuous monitoring protocols.',
    icon: Shield,
    items: [
       'National Police Background Checks',
       'Employment and Financial History Verification',
       'Professional Qualification Validation',
       'Ongoing Integrity Monitoring',
       'Right to Work (VEVO) Verification'
    ]
  },
  {
    id: 'digital',
    title: 'Digital Consultancy',
    description: 'Expert ICT delivery for complex, high-risk operational environments with a focus on sovereign resilience.',
    icon: Cloud,
    items: [
       'Cloud Strategy and Hybrid Migration (protected level)',
       'DevSecOps Pipeline Engineering',
       'Sovereign Infrastructure Design',
       'ICT Modernization Roadmap Development',
       'Operational Technology (OT) Security'
    ]
  },
  {
    id: 'disp',
    title: 'DISP Advisory',
    description: 'Navigating the Defence Industry Security Program with precision, from application to Level 3 maturity.',
    icon: TrendingUp,
    items: [
       'DISP Governance and Security Planning',
       'Personnel Security (PERSEC) Protocols',
       'Physical and Cyber Security Assurance',
       'Annual Security Report Preparation',
       'Internal Security Audit and Maturity Uplift'
    ]
  }
]

export default function CapabilitiesPage() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="pt-32">
        <section className="px-6 md:px-12 py-20 bg-brand-silver/10">
           <div className="max-w-7xl mx-auto">
              <FadeIn direction="up">
                 <Badge variant="premium" className="mb-6">Capability Statement</Badge>
                 <h1 className="text-display-2 font-bold tracking-tight mb-8">Specialized expertise for<br/><span className="text-accent-teal">highly regulated environments.</span></h1>
                 <p className="text-body-lg text-brand-muted max-w-2xl leading-relaxed">
                   Websoul Digital provides high-assurance consultancy services designed to meet the rigorous standards of the Australian Government, Defence, and critical infrastructure sectors.
                 </p>
              </FadeIn>
           </div>
        </section>

        {capabilities.map((cap, idx) => (
           <section key={cap.id} id={cap.id} className={cn("px-6 md:px-12 py-30", idx % 2 === 1 ? "bg-brand-silver/5" : "bg-brand-pure")}>
              <div className="max-w-7xl mx-auto">
                 <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <FadeIn direction={idx % 2 === 0 ? "right" : "left"}>
                       <cap.icon className="w-16 h-16 text-accent-teal mb-8" />
                       <h2 className="text-heading-1 font-bold mb-6">{cap.title}</h2>
                       <p className="text-body-lg text-brand-muted mb-10 leading-relaxed">
                         {cap.description}
                       </p>
                    </FadeIn>
                    <FadeIn direction={idx % 2 === 0 ? "left" : "right"} delay={0.2}>
                       <div className="bg-brand-pure border border-brand-silver/50 rounded-3xl p-10 shadow-sm relative overflow-hidden group hover:border-accent-teal transition-all">
                          <div className="absolute inset-0 bg-noise opacity-[0.01]"></div>
                          <ul className="space-y-6 relative z-10">
                             {cap.items.map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                   <CheckCircle2 className="w-5 h-5 text-accent-teal shrink-0 mt-1" />
                                   <span className="text-body text-brand-ink font-medium">{item}</span>
                                </li>
                             ))}
                          </ul>
                       </div>
                    </FadeIn>
                 </div>
              </div>
           </section>
        ))}
      </main>
      <Footer />
    </div>
  )
}
