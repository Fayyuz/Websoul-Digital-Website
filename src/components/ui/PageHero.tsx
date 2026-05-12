"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  className?: string;
}

export default function PageHero({ eyebrow, title, subtitle, className }: PageHeroProps) {
  return (
    <section className={cn("pt-40 pb-48 bg-[#0A0A0F] relative overflow-hidden text-white", className)}>
      <div className="absolute inset-0 opacity-[0.03] hero-grid"></div>
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-3 mb-10">
              <div className="w-8 h-[1px] bg-white opacity-20"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-slate-light">
                {eyebrow}
              </span>
            </div>
          )}
          <h1 className="text-4xl md:text-7xl font-space font-medium tracking-tight mb-12 leading-[1.05]">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl font-sans font-light">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
