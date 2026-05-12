import React from 'react';
import Link from 'next/link';
import { services } from '@/data/services';

export default function ServicesOverview() {
  return (
    <section className="py-40 bg-[#F8FAF8]" id="services-overview">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-brand-midnight"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-slate">Specialist Arms</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-space font-medium tracking-tight text-brand-midnight mb-8">Capabilities for the <br className="hidden md:block" /> national interest.</h2>
            <p className="text-slate-500 font-sans text-lg leading-relaxed max-w-xl">
              Our core capability arms operate in unison to solve complex delivery and security challenges for highly-regulated sectors.
            </p>
          </div>
          
          <div className="lg:mb-4">
             <Link href="/contact" className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-midnight border-b border-brand-midnight pb-2 hover:opacity-70 transition-all">
                Corporate Capability Statement <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
             </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-slate-200">
          {services.map((service) => (
            <Link 
              key={service.id} 
              href={service.href} 
              className={`group border-r border-b border-slate-200 p-12 flex flex-col transition-all duration-700 bg-white hover:bg-brand-midnight`}
            >
              <div className={`w-12 h-12 flex items-center justify-center mb-12 border border-slate-100 group-hover:border-slate-800 transition-colors`}>
                <service.icon className="w-5 h-5 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-space font-medium tracking-tight text-brand-midnight mb-6 group-hover:text-white transition-colors">{service.title}</h3>
              
              <p className="text-slate-500 font-sans text-sm leading-relaxed mb-12 flex-grow group-hover:text-slate-400 transition-colors">
                {service.description}
              </p>
              
              <div className="mt-auto text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-4 text-brand-slate group-hover:text-white transition-colors">
                 {service.actionLabel} <span className="text-xl leading-none opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
