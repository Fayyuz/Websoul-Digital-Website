import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  eyebrow?: string
  heading: string
  supportingText: string
  trustStripItems: string[]
  primaryCta: {
    label: string
    href: string
  }
  secondaryCtas: Array<{
    label: string
    href: string
  }>
  ghostCta?: {
    label: string
    href: string
  }
  className?: string
}

export const HeroSection = ({
  eyebrow,
  heading,
  supportingText,
  trustStripItems,
  primaryCta,
  secondaryCtas,
  ghostCta,
  className,
}: HeroSectionProps) => {
  // Split heading by newlines for structured display
  const headingLines = heading.split('\n').filter(line => line.trim())

  return (
    <section className={cn('relative overflow-hidden bg-gradient-to-b from-paper to-mist', className)}>
      {/* Subtle background pattern - optional, adds texture without distraction */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--ink) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow - minimal, only if provided */}
          {eyebrow && (
            <div className="inline-flex items-center justify-center mb-6 md:mb-8">
              <span className="text-[11px] md:text-xs font-medium tracking-[0.2em] text-slate uppercase">
                {eyebrow}
              </span>
            </div>
          )}

          {/* Main Heading - with Outfit font for premium feel */}
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
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
          <p className="text-body md:text-body-lg text-slate max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            {supportingText}
          </p>

          {/* CTA Buttons - Responsive stacking */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
            {/* Primary CTA - Trust Services */}
            <Button
              href={primaryCta.href}
              variant="primary"
              className="w-full sm:w-auto min-w-[180px] h-12 md:h-[52px] text-sm md:text-base font-semibold rounded-lg"
            >
              {primaryCta.label}
            </Button>

            {/* Secondary CTAs - Digital Consultancy & DISP */}
            {secondaryCtas.map((cta, index) => (
              <Button
                key={index}
                href={cta.href}
                variant="secondary"
                className="w-full sm:w-auto min-w-[180px] h-12 md:h-[52px] text-sm md:text-base font-semibold rounded-lg"
              >
                {cta.label}
              </Button>
            ))}

            {/* Ghost CTA - Talk to Us */}
            {ghostCta && (
              <Button
                href={ghostCta.href}
                variant="ghost"
                className="w-full sm:w-auto min-w-[140px] h-12 md:h-[52px] text-sm md:text-base font-medium rounded-lg"
              >
                {ghostCta.label}
              </Button>
            )}
          </div>

          {/* Trust Strip - Premium separator + trust signals */}
          <div className="pt-6 md:pt-8 border-t border-silver/60">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-8">
              {trustStripItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {/* Premium bullet - subtle dot, not bulky */}
                  <div className="w-1 h-1 rounded-full bg-slate/60" />
                  <span className="text-[11px] md:text-xs font-medium tracking-wide text-slate uppercase">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Optional: Very subtle scroll indicator - uncomment if desired */}
          {/* 
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:block">
            <div className="w-6 h-10 border-2 border-slate/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-slate/50 rounded-full mt-2 animate-[bounce_2s_ease-in-out_infinite]" />
            </div>
          </div>
          */}
        </div>
      </Container>
    </section>
  )
}
