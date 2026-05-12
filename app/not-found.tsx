import React from 'react';
import Link from 'next/link';
import Section from '@/components/ui/Section';

export default function NotFound() {
  return (
    <Section className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="inline-flex items-center gap-3 mb-10">
        <div className="w-8 h-[1px] bg-brand-midnight opacity-10"></div>
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-slate">Error 404</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-space font-medium text-brand-midnight mb-10 tracking-tighter">
        Resource not found.
      </h1>
      
      <p className="text-slate-500 font-sans text-lg leading-relaxed max-w-md mx-auto mb-16 font-light">
        The requested operational path could not be resolved. It may have been moved, renamed, or is currently restricted.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-8 justify-center">
        <Link href="/" className="btn-primary">
          Return to HQ
        </Link>
        <Link href="/contact" className="btn-outline">
          Contact Advisory
        </Link>
      </div>
    </Section>
  );
}
