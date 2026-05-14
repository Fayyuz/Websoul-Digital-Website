'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  audience: string
  why: string
  href: string
}

export const ServiceCard = ({ title, description, audience, why, href }: ServiceCardProps) => {
  return (
    <div className="group relative bg-paper border border-silver rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-ink/10 flex flex-col h-full">
      <div className="flex-grow">
        <div className="mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/50 group-hover:text-ink/40 transition-colors">Capability Arm</span>
          <h3 className="text-h3 font-display font-bold mt-2 text-ink group-hover:text-ink transition-colors">{title}</h3>
        </div>
        
        <p className="text-body text-slate mb-8 leading-relaxed group-hover:text-ink/80 transition-colors">
          {description}
        </p>
        
        <div className="space-y-4 pt-6 border-t border-silver group-hover:border-ink/5 transition-colors mb-10">
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate group-hover:text-ink transition-colors">Business Value</p>
            <p className="text-sm text-slate group-hover:text-ink/70 transition-colors leading-snug">{why}</p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Link 
          href={href}
          className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-ink group-hover:gap-4 transition-all"
        >
          Explore {title} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
