'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { LogoMark } from '@/components/shared/LogoMark'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navigationItems = [
  { label: 'Trust Services', href: '/trust-services' },
  { label: 'Digital Consultancy', href: '/digital-consultancy' },
  { label: 'DISP Advisory', href: '/disp-advisory' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export const SiteHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-paper/95 backdrop-blur-md border-b border-silver/50 shadow-sm' 
          : 'bg-paper border-b border-silver/30'
      )}
    >
      <div className="container-premium">
        <div className="flex h-[72px] lg:h-20 items-center justify-between gap-4">
          {/* Logo Area - Left */}
          <Link 
            href="/" 
            className="flex shrink-0 items-center gap-2 md:gap-3 group"
            aria-label="Websoul Digital Home"
          >
            <LogoMark size="md" variant="dark" />
            <span className="text-base md:text-lg font-semibold tracking-tight text-ink whitespace-nowrap">
              Websoul Digital
            </span>
          </Link>

          {/* Desktop Navigation - Center/Right */}
          <nav 
            className="hidden lg:flex items-center lg:gap-6 xl:gap-8"
            aria-label="Main navigation"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate hover:text-ink transition-colors duration-200 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA - Right */}
          <div className="hidden lg:block shrink-0">
            <Button 
              href="/contact" 
              variant="primary" 
              className="h-11 px-6 text-sm font-semibold rounded-lg"
            >
              Talk to Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 h-11 w-11 inline-flex items-center justify-center rounded-lg hover:bg-mist transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-ink" />
            ) : (
              <Menu className="w-5 h-5 text-ink" />
            )}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="fixed inset-0 top-[72px] lg:hidden bg-paper z-40 overflow-y-auto animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col p-6 gap-2" aria-label="Mobile navigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="py-4 px-4 text-base font-medium text-ink hover:bg-mist rounded-xl transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-silver">
                <Button 
                  href="/contact" 
                  variant="primary" 
                  onClick={handleLinkClick}
                  className="w-full h-12 text-base font-semibold rounded-xl"
                >
                  Talk to Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
