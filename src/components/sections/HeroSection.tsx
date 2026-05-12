"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-48 overflow-hidden bg-[#0A0A0F] text-white" id="hero">
      <div className="absolute inset-0 z-0 opacity-[0.03] hero-grid"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 mb-10"
          >
            <div className="w-10 h-[1px] bg-brand-slate opacity-50"></div>
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand-slate-light">
              Canberra • Strategic Delivery
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-8xl font-space font-medium tracking-tight leading-[0.95] mb-12"
          >
            Trusted people.<br/>
            Secure delivery.<br/>
            <span className="text-brand-slate-light opacity-60">Engineered for integrity.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed mb-16 max-w-2xl font-sans"
          >
            Websoul Digital provides high-trust ICT consultancy and security advisory for Australia&apos;s most sensitive and regulated operating environments.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-8"
          >
            <Link href="/contact" className="btn-primary !bg-white !text-brand-midnight hover:!bg-slate-200 min-w-[220px]">
              Engage Consulting
            </Link>
            <Link href="/trust-services" className="btn-outline !border-slate-800 !text-white hover:!border-white min-w-[220px]">
              Our Capability
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract Architectural Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:flex items-center justify-end pr-20 pointer-events-none"
      >
        <svg viewBox="0 0 400 400" className="w-[600px] h-600px" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="50" width="300" height="300" stroke="white" strokeWidth="1" />
          <rect x="100" y="100" width="200" height="200" stroke="white" strokeWidth="1" />
          <path d="M50 50L350 350" stroke="white" strokeWidth="0.5" strokeDasharray="10 10" />
          <path d="M350 50L50 350" stroke="white" strokeWidth="0.5" strokeDasharray="10 10" />
        </svg>
      </motion.div>
    </section>
  );
}
