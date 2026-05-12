import React from 'react';
import { motion } from 'motion/react';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  className?: string;
}

export const PageHero = ({ eyebrow, title, subtitle, className = "" }: PageHeroProps) => (
  <section className={`pt-32 pb-24 bg-brand-midnight relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 opacity-10 hero-grid"></div>
    <div className="section-container relative z-10 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        {eyebrow && (
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-slate-light mb-6 block">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1] uppercase">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl font-light">
          {subtitle}
        </p>
      </motion.div>
    </div>
  </section>
);

interface PageSectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  bgWhite?: boolean;
  className?: string;
  id?: string;
}

export const PageSection = ({ title, subtitle, children, bgWhite = true, className = "", id }: PageSectionProps) => (
  <section className={`py-32 ${bgWhite ? 'bg-white' : 'bg-brand-surface'} ${className}`} id={id}>
    <div className="section-container">
      {(title || subtitle) && (
        <div className="mb-20 max-w-3xl">
          {title && <h2 className="text-3xl font-black text-brand-midnight mb-6 uppercase tracking-tighter">{title}</h2>}
          {subtitle && <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold leading-relaxed">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);
