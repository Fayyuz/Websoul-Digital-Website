'use client'

import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <Section className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <Container>
        <div className="inline-flex items-center gap-3 mb-10">
          <div className="w-8 h-[1px] bg-ink opacity-10"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate">Operational Error 404</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-medium text-ink mb-10 tracking-tighter">
          Resource not found.
        </h1>
        
        <p className="text-slate font-sans text-lg leading-relaxed max-w-md mx-auto mb-16 font-light">
          The requested operational path could not be resolved. It may have been moved, renamed, or is currently restricted.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <Link href="/" className="px-8 py-3 bg-ink text-paper rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-graphite transition-all">
            Return to HQ
          </Link>
          <Link href="/contact" className="px-8 py-3 border-2 border-ink text-ink rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-ink hover:text-paper transition-all">
            Contact Advisory
          </Link>
        </div>
      </Container>
    </Section>
  );
}
