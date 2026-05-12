"use client";

import React from 'react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-60 bg-white border-t border-slate-100 overflow-hidden relative" id="final-cta">
      <div className="absolute inset-0 opacity-[0.03] hero-grid pointer-events-none"></div>
      
      <div className="section-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-12">
            <div className="w-12 h-[1px] bg-brand-midnight opacity-10"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-slate">Engagement</span>
            <div className="w-12 h-[1px] bg-brand-midnight opacity-10"></div>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-space font-medium text-brand-midnight mb-20 leading-[1.05] tracking-tight">
            Trusted capability starts <br className="hidden md:block" /> with a conversation.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
            <Link href="/contact" className="btn-primary !px-20 !py-6 min-w-[280px]">
              Initiate Consulting
            </Link>
          </div>
          
          <div className="mt-20 pt-20 border-t border-slate-100 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 opacity-60">
             <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-slate mb-2">Canberra HQ</div>
                <div className="text-xs font-bold text-brand-midnight uppercase tracking-widest">ACT • Australia</div>
             </div>
             <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-slate mb-2">Global Operations</div>
                <div className="text-xs font-bold text-brand-midnight uppercase tracking-widest">Digital First</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
