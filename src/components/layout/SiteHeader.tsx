"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { LogoMark } from './LogoMark';
import { navigation } from '@/data/navigation';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm h-16 border-b border-slate-100' 
          : 'bg-white h-20 border-b border-slate-50'
      }`}
    >
      <nav className="section-container h-full flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="transition-all duration-300 hover:opacity-70">
            <LogoMark />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="p-2 text-brand-midnight"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-brand-midnight pb-1 border-b border-transparent ${
                pathname === item.href ? 'text-brand-midnight border-brand-midnight' : 'text-slate-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/contact" className="btn-primary !px-6 !py-2.5 !text-[10px] !bg-brand-midnight shadow-lg shadow-brand-midnight/10 hover:shadow-xl hover:shadow-brand-midnight/20 transition-all">
            Contact Team
          </Link>
        </div>
      </nav>

        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-50 bg-[#0A0A0F] flex flex-col p-8 transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-20">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <LogoMark inverse />
              </Link>
              <button
                type="button"
                className="p-2 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
            
            <div className="space-y-8">
              {[...navigation, { name: 'Contact', href: '/contact'}].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-4xl font-space font-medium text-white hover:text-brand-slate-light transition-colors tracking-tight"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto pt-10 border-t border-white/[0.03]">
               <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500 mb-6">Operations</div>
               <div className="text-white font-medium text-xs uppercase tracking-[0.2em]">Canberra • ACT • Australia</div>
            </div>
          </div>
        )}
    </header>
  );
}
