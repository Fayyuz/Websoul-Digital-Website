'use client'

import React from 'react'
import { FadeIn } from '@/components/animations/FadeIn'
import { ShieldCheck, Lock, Activity, EyeIcon } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'DISP Level 3 Alignment',
    description: 'Our advisory is built on the highest tier of the Defence Industry Security Program standards.'
  },
  {
    icon: Lock,
    title: 'Zero Trust Sovereignty',
    description: 'We prioritize sovereign data residency and multi-layered access controls for sensitive briefs.'
  },
  {
    icon: Activity,
    title: 'Real-time Assurance',
    description: 'Continuous monitoring of workforce integrity state and digital asset vulnerability.'
  },
  {
    icon: EyeIcon,
    title: 'Absolute Transparency',
    description: 'Providing a clear, auditable trail for all security governance and personnel trust decisions.'
  }
]

export const TrustArchitecture = () => {
  return (
    <section className="px-6 md:px-12 py-30 bg-brand-ink text-brand-pure relative overflow-hidden">
       <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-accent-teal/10 to-transparent opacity-50 pointer-events-none"></div>
       
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <FadeIn direction="right">
               <span className="text-caption uppercase tracking-wider text-accent-teal font-semibold">Security Foundation</span>
              <h2 className="text-heading-1 font-bold mt-4 mb-8">Trust isn&apos;t a feeling.<br/><span className="text-brand-muted">It&apos;s an architecture.</span></h2>
              <p className="text-body-lg text-brand-silver/60 leading-relaxed mb-12">
                We believe security should be structural, not seasonal. Our methodology integrates personnel trust with digital resilience from day zero.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-slate flex items-center justify-center text-accent-teal group-hover:bg-accent-teal group-hover:text-brand-pure transition-all duration-300">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                      <p className="text-caption text-brand-silver/40">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-7">
             <FadeIn direction="left" delay={0.2}>
                <div className="relative aspect-video bg-brand-slate rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                   {/* Abstract Blueprint Drawing */}
                   <svg viewBox="0 0 800 450" className="w-full h-full opacity-20">
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      <circle cx="400" cy="225" r="150" stroke="white" strokeWidth="1" fill="none" />
                      <rect x="250" y="125" width="300" height="200" stroke="white" strokeWidth="1" fill="none" />
                      <line x1="0" y1="0" x2="800" y2="450" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
                      <line x1="800" y1="0" x2="0" y2="450" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
                   </svg>
                   
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                         <div className="inline-block px-4 py-1 bg-accent-teal/20 text-accent-teal rounded-full font-mono text-[10px] uppercase tracking-widest mb-4 border border-accent-teal/30">Operational Blueprint</div>
                         <h3 className="text-3xl font-display font-bold text-white tracking-tighter">Unified Security Ecosystem</h3>
                      </div>
                   </div>
                </div>
             </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
