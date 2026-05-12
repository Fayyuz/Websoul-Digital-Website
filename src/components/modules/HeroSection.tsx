'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-32 bg-paper relative overflow-hidden">
      {/* Decorative gradient background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-slate blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-slate blur-[120px]" />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-slate uppercase">
              Websoul Digital
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-hero-mobile md:text-hero font-display font-bold tracking-tight text-ink mb-8 leading-[1.05]"
          >
            Trusted people.
            <br />
            Secure delivery.
            <br />
            <span className="text-slate">Stronger organisations.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body-lg text-slate max-w-2xl mx-auto mb-12"
          >
            Websoul Digital helps build the capability needed to operate with confidence in trusted environments.
            We bring together three high-trust business lines under one integrated brand.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button href="/trust-services" variant="primary" className="min-w-[200px]">
              Explore Trust Services
            </Button>
            <Button href="/digital-consultancy" variant="secondary" className="min-w-[200px]">
              Explore Digital Delivery
            </Button>
            <Button href="/disp-advisory" variant="secondary" className="min-w-[200px]">
              Explore DISP Advisory
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <a href="#services" className="text-xs font-bold uppercase tracking-[0.2em] text-slate hover:text-ink transition-colors group">
              Scroll to explore <span className="inline-block translate-y-px motion-safe:animate-bounce">↓</span>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
