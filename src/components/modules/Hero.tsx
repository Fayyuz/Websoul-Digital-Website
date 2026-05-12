'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/animations/FadeIn'
import { TrustMetrics } from './TrustMetrics'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center px-6 md:px-12 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <FadeIn direction="up" delay={0.1}>
            <div className="space-y-8">
              <Badge variant="premium">Australian-owned & operated</Badge>
              
              <h1 className="text-display-2 md:text-display-1 font-bold tracking-tight text-balance">
                Digital integrity.
                <br />
                <span className="text-accent-teal">Performed precisely.</span>
              </h1>
              
              <p className="text-body-lg text-brand-muted max-w-lg leading-relaxed">
                We don&apos;t just advise. We engineer trust, security, and transformation
                for critical infrastructure and enterprise.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="solid" href="/contact">
                  Engage expertise →
                </Button>
                <Button size="lg" variant="ghost" href="/capabilities">
                  View credentials
                </Button>
              </div>
              
              <TrustMetrics />
            </div>
          </FadeIn>
          
          {/* Right Column - Interactive Visual */}
          <FadeIn direction="up" delay={0.3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-slate/5 to-brand-slate/10 border border-brand-silver/30 backdrop-blur-sm p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
                <div className="h-full flex flex-col items-center justify-center gap-6 relative z-10">
                  <div className="w-32 h-32 rounded-full bg-accent-teal/10 animate-glow-pulse flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent-teal/30" />
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-caption uppercase tracking-wider text-brand-muted">Zero Trust Network</p>
                    <p className="font-display text-3xl font-bold text-accent-teal">Active Monitoring</p>
                    <p className="text-[10px] text-brand-muted font-mono uppercase">Real-time threat detection • 24/7 SOC</p>
                  </div>
                  <div className="flex gap-4 text-[10px] font-mono">
                    <span className="px-3 py-1 bg-brand-slate/10 rounded-full border border-brand-silver/50">ISO 27001</span>
                    <span className="px-3 py-1 bg-brand-slate/10 rounded-full border border-brand-silver/50">DISP L3</span>
                    <span className="px-3 py-1 bg-brand-slate/10 rounded-full border border-brand-silver/50">ESSENTIAL 8</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
