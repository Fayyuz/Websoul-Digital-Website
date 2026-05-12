'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const navItems = [
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'About', href: '/about' },
  { name: 'Governance', href: '/disp-advisory' },
  { name: 'Trust Status', href: '/trust-status' },
]

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12",
        scrolled ? "py-4 bg-brand-pure/80 backdrop-blur-md border-b border-brand-silver/30" : "py-8 bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-ink text-brand-pure flex items-center justify-center rounded-lg transition-transform group-hover:scale-105">
             {/* New Distinctive Logo Mark: Architectural geometric S/W blend */}
             <svg viewBox="0 0 40 40" className="w-6 h-6 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="square">
                <path d="M8 12L20 8L32 12V28L20 32L8 28V12Z" />
                <path d="M20 8V32" strokeWidth="1.5" strokeDasharray="2 2" />
                <path d="M8 20H32" strokeWidth="1.5" strokeDasharray="2 2" />
                <circle cx="20" cy="20" r="3" className="fill-accent-teal stroke-none" />
             </svg>
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-brand-ink uppercase hidden sm:block">Websoul</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-caption font-bold uppercase tracking-widest transition-all hover:text-accent-teal",
                pathname === item.href ? "text-accent-teal" : "text-brand-muted"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button size="sm" variant="solid" href="/contact">
            Engage
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-ink"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-brand-pure z-[60] flex flex-col p-8 transition-all duration-500 lg:hidden",
        mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 shadow-none"
      )}>
        <div className="flex items-center justify-between mb-20">
           <Link href="/" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-ink text-brand-pure flex items-center justify-center rounded-lg">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-brand-ink uppercase">Websoul</span>
           </Link>
           <button onClick={() => setMobileMenuOpen(false)}>
              <X className="w-10 h-10 text-brand-ink" />
           </button>
        </div>

        <div className="space-y-8 flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-4xl font-bold tracking-tight text-brand-ink hover:text-accent-teal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-8">
             <Button className="w-full" size="lg" href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Engage Advisory
             </Button>
          </div>
        </div>
        
        <div className="mt-auto pt-10 border-t border-brand-silver/30">
           <p className="text-caption text-brand-muted uppercase tracking-widest font-bold mb-4">Strategic Location</p>
           <p className="text-brand-ink font-medium">Canberra • ACT • Australia</p>
        </div>
      </div>
    </header>
  )
}
