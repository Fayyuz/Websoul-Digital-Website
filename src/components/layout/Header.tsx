import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { LogoMark } from './LogoMark';
import { motion, AnimatePresence } from 'motion/react';

const navigation = [
  { name: 'Trust Services', href: '/trust-services' },
  { name: 'Digital Consultancy', href: '/digital-consultancy' },
  { name: 'DISP Advisory', href: '/disp-advisory' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-sm h-16 border-b border-slate-100' 
          : 'bg-white h-20 border-b border-slate-50'
      }`}
      id="main-header"
    >
      <nav className="section-container h-full flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="p-1 transition-all duration-300 hover:opacity-80">
            <LogoMark />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="p-2 text-brand-midnight"
            onClick={() => setMobileMenuOpen(true)}
            id="mobile-menu-open"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors hover:text-brand-midnight ${
                location.pathname === item.href ? 'text-brand-midnight' : 'text-slate-400'
              }`}
              id={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/contact" className="btn-primary !px-5 !py-2 !text-[10px] !bg-brand-midnight" id="header-cta">
            Contact
          </Link>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-midnight flex flex-col p-8"
            id="mobile-menu-container"
          >
            <div className="flex items-center justify-between mb-20">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <LogoMark inverse />
              </Link>
              <button
                type="button"
                className="p-2 text-white"
                onClick={() => setMobileMenuOpen(false)}
                id="mobile-menu-close"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <div className="space-y-8">
              {[...navigation, { name: 'Contact', href: '/contact'}].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-3xl font-black uppercase tracking-tighter text-white hover:text-brand-slate-light transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto pt-10 border-t border-slate-800">
               <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Operations</div>
               <div className="text-white font-black text-xs uppercase tracking-widest">Canberra, Australia</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
