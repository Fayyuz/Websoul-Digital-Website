import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  bg?: 'white' | 'surface' | 'midnight';
}

export default function Section({ 
  children, 
  className, 
  id, 
  containerClassName,
  bg = 'white' 
}: SectionProps) {
  const bgStyles = {
    white: 'bg-white',
    surface: 'bg-[#F8FAF8]',
    midnight: 'bg-[#0A0A0F] text-white'
  };

  return (
    <section 
      id={id} 
      className={cn(
        'py-32 md:py-48', 
        bgStyles[bg],
        className
      )}
    >
      <div className={cn('section-container', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, eyebrow, subtitle, className }: { title: string, eyebrow?: string, subtitle?: string, className?: string }) {
  return (
    <div className={cn('mb-24 max-w-3xl', className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-3 mb-8">
           <div className="w-8 h-[1px] bg-brand-midnight opacity-10"></div>
           <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-slate">{eyebrow}</div>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-space font-medium text-brand-midnight mb-8 tracking-tight leading-[1.1]">{title}</h2>
      {subtitle && <p className="text-lg font-sans font-light text-slate-500 leading-relaxed max-w-2xl">{subtitle}</p>}
    </div>
  );
}
