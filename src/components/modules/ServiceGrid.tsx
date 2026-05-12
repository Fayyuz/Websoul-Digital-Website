'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Cloud, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Shield,
    title: 'Trust Services',
    subtitle: 'Workforce integrity',
    metric: '98.7% screening accuracy',
    description: 'Comprehensive background verification and workforce integrity solutions for regulated industries.',
    details: ['National Police Checks', 'Employment History', 'Qualification Validation', 'Ongoing Monitoring'],
    color: 'teal',
  },
  {
    icon: Cloud,
    title: 'Digital Consultancy',
    subtitle: 'Cloud transformation',
    metric: '40% avg cost reduction',
    description: 'Strategic ICT advisory and cloud migration with measurable ROI and security-first architecture.',
    details: ['AWS/Azure/GCP', 'DevSecOps', 'Legacy Modernization', 'FinOps'],
    color: 'ochre',
  },
  {
    icon: TrendingUp,
    title: 'DISP Advisory',
    subtitle: 'Security maturity',
    metric: 'Level 3 accredited',
    description: 'Defence Industry Security Program guidance for compliance, governance, and certification.',
    details: ['Security Plans', 'Incident Response', 'Personnel Security', 'Audit Preparation'],
    color: 'teal',
  },
]

export const ServiceGrid = () => {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="px-6 md:px-12 py-30 bg-brand-silver/20" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-caption uppercase tracking-wider text-accent-teal font-semibold">Core Capabilities</span>
          <h2 className="text-heading-1 font-bold mt-4 mb-6">Enterprise-grade expertise</h2>
          <p className="text-body-lg text-brand-muted max-w-2xl mx-auto">
            Specialized advisory across three interconnected domains
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            const isExpanded = expanded === idx
            
            return (
              <motion.div
                key={idx}
                layout
                onClick={() => setExpanded(isExpanded ? null : idx)}
                className={cn(
                  "cursor-pointer transition-all duration-500",
                  isExpanded ? "md:col-span-3" : "md:col-span-1"
                )}
              >
                <div
                  className={cn(
                    "h-full rounded-2xl p-8 bg-brand-pure border transition-all duration-300 relative overflow-hidden",
                    isExpanded ? "border-accent-teal shadow-2xl" : "border-brand-silver/50 hover:border-accent-teal/50 hover:shadow-lg"
                  )}
                >
                   <div className="absolute inset-0 bg-noise opacity-[0.01] pointer-events-none"></div>
                  <div className={cn(
                    "relative z-10",
                    isExpanded ? "grid md:grid-cols-2 gap-12" : "space-y-6"
                  )}>
                    <div className="space-y-6">
                      <div className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center transition-colors",
                        service.color === 'teal' ? "bg-accent-teal/10 text-accent-teal" : "bg-accent-ochre/10 text-accent-ochre"
                      )}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-brand-muted font-medium">{service.subtitle}</p>
                      </div>
                      <div className="stat-number text-3xl text-accent-teal">{service.metric}</div>
                      {!isExpanded && (
                         <div className="pt-4 flex items-center text-xs font-bold uppercase tracking-widest text-brand-muted group-hover:text-accent-teal transition-colors">
                            Explore Details <span className="ml-2">→</span>
                         </div>
                      )}
                    </div>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="space-y-8 flex flex-col justify-center"
                        >
                          <p className="text-body text-brand-ink leading-relaxed prose-consulting">
                            {service.description}
                          </p>
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-brand-ink">Key services</h4>
                              <ul className="space-y-3">
                                {service.details.map((detail, i) => (
                                  <li key={i} className="text-caption text-brand-muted flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-accent-teal rounded-full" />
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex items-end justify-end">
                               <button className="text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-brand-ink pb-1 hover:text-accent-teal hover:border-accent-teal transition-all">
                                  Download Service Brief
                               </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
