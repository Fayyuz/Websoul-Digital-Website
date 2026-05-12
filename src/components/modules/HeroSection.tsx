'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-20 md:pt-40 md:pb-40 bg-paper relative overflow-hidden">
      {/* Decorative architectural elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden select-none">
        <div className="absolute top-0 left-[10%] w-px h-full bg-mist/50" />
        <div className="absolute top-0 right-[10%] w-px h-full bg-mist/50" />
        <div className="absolute top-[20%] left-0 w-full h-px bg-mist/30" />
        <div className="absolute bottom-[20%] left-0 w-full h-px bg-mist/30" />
      </div>

      <Container>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-12 h-px bg-ink/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate/60">
              Sovereign Strategic Advisory
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-hero-mobile md:text-hero font-display font-bold tracking-tight text-ink mb-10 leading-[0.95]"
          >
            Trusted people.
            <br />
            <span className="text-slate/40">Secure delivery.</span>
            <br />
            Stronger organisations.
          </motion.h1>
          
          <div className="grid md:grid-cols-12 gap-8 items-start mb-16">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="md:col-span-5"
            >
              <p className="text-body-lg text-ink font-medium leading-relaxed">
                Websoul Digital helps Australian organisations build trusted workforces, secure digital capability, and DISP-ready operating models.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="md:col-span-6 md:col-start-7"
            >
              <p className="text-body text-slate leading-relaxed">
                We combine secure digital transformation, workforce trust pathways, and DISP readiness support under one roof, specifically for regulated and defence-aware environments.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/contact" variant="primary" className="h-[52px] px-10 text-sm font-semibold rounded-lg w-full sm:w-auto">
              Talk to Us
            </Button>
            <Button href="/trust-services" variant="secondary" className="h-[52px] px-10 text-sm font-medium rounded-lg w-full sm:w-auto">
              Explore Trust Services
            </Button>
            <Button href="/disp-advisory" variant="secondary" className="h-[52px] px-10 text-sm font-medium rounded-lg w-full sm:w-auto">
              Explore DISP Advisory
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
