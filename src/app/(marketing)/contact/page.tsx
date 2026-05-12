'use client'

import React from 'react'
import { SiteHeader } from '@/components/modules/SiteHeader'
import { Footer } from '@/components/modules/Footer'
import { FadeIn } from '@/components/animations/FadeIn'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Mail, MapPin, Phone, Shield } from 'lucide-react'
import ContactForm from '@/components/sections/ContactForm'

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="pt-32">
        <section className="px-6 md:px-12 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
              <FadeIn direction="right">
                <Badge variant="premium" className="mb-6">Engagement</Badge>
                <h1 className="text-display-2 font-bold tracking-tight mb-8">Let&apos;s engineer<br/><span className="text-accent-teal">your trust foundation.</span></h1>
                <p className="text-body-lg text-brand-muted mb-12 leading-relaxed">
                  Our advisors are ready to discuss your operational requirements, from DISP alignment to complex ICT transformation.
                </p>
                
                <div className="space-y-10">
                   <ContactItem 
                      icon={Mail} 
                      label="Briefing & Enquiries" 
                      value="hello@websoul.digital" 
                      href="mailto:hello@websoul.digital"
                   />
                   <ContactItem 
                      icon={MapPin} 
                      label="Sovereign Operations" 
                      value="Nishi Building, Canberra, ACT" 
                      href="https://maps.google.com"
                   />
                   <ContactItem 
                      icon={Shield} 
                      label="Security Liaison" 
                      value="Available for cleared partners" 
                   />
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <div className="bg-brand-pure border border-brand-silver/50 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-noise opacity-[0.01]"></div>
                   <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

interface ContactItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}

function ContactItem({ icon: Icon, label, value, href }: ContactItemProps) {
  return (
    <div className="flex gap-6 group">
      <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-silver/30 flex items-center justify-center text-brand-ink group-hover:bg-brand-ink group-hover:text-brand-pure transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-caption text-brand-muted uppercase tracking-widest font-bold mb-1">{label}</p>
        {href ? (
           <a href={href} className="text-xl font-bold text-brand-ink hover:text-accent-teal transition-colors">{value}</a>
        ) : (
           <p className="text-xl font-bold text-brand-ink">{value}</p>
        )}
      </div>
    </div>
  )
}
