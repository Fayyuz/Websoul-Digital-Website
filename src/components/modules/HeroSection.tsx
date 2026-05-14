'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  eyebrow?: string
  heading: string
  supportingText: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta: {
    label: string
    href: string
  }
  className?: string
}

export const HeroSection = ({
  eyebrow,
  heading,
  supportingText,
  primaryCta,
  secondaryCta,
  className,
}: HeroSectionProps) => {
  // Split heading by newlines for structured display
  const headingLines = heading.split('\n').filter(line => line.trim())

  return (
    <section className={cn('relative overflow-hidden bg-gradient-to-b from-paper to-mist py-20 lg:py-32', className)}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--ink) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <Container className="relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            {headingLines.map((line, index) => (
              <h1
                key={index}
                className="text-hero-mobile md:text-hero font-display font-bold tracking-tight text-ink leading-[1.15]"
                style={{
                  fontFamily: 'var(--font-outfit), system-ui, sans-serif',
                }}
              >
                {line}
              </h1>
            ))}
          </div>

          {/* Supporting Text */}
          <p className="text-body md:text-body-lg text-slate max-w-2xl mx-auto mb-10 leading-relaxed md:text-lg">
            {supportingText}
          </p>

          {/* CTA Buttons - Two only */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href={primaryCta.href}
              variant="primary"
              className="px-10 h-14 text-base font-semibold rounded-lg"
            >
              {primaryCta.label}
            </Button>

            <Button
              href={secondaryCta.href}
              variant="secondary"
              className="px-10 h-14 text-base font-semibold rounded-lg"
            >
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
