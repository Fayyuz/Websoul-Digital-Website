'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

interface CredibilityRailProps {
  variant?: 'static' | 'marquee';
  className?: string;
}

const credibilityItems = [
  'Australian-owned',
  'Canberra-based',
  'Regulated environments',
  'DISP readiness',
  'Essential Eight alignment',
  'Australian Government experience'
];

export const CredibilityRail = ({ variant = 'static', className }: CredibilityRailProps) => {
  const [effectiveVariant, setEffectiveVariant] = useState<'static' | 'marquee'>('static');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkVariant = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isMobile = window.innerWidth < 1024;
      
      if (variant === 'marquee' && !prefersReducedMotion && !isMobile) {
        setEffectiveVariant('marquee');
      } else {
        setEffectiveVariant('static');
      }
    };

    checkVariant();

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => checkVariant();
    motionQuery.addEventListener('change', handleMotionChange);
    
    window.addEventListener('resize', checkVariant);
    
    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkVariant);
    };
  }, [variant]);

  // Initial render (server and first client pass)
  if (!mounted) {
    return (
      <div className={cn('w-full bg-mist/30 border-y border-silver/40 py-5 lg:py-6', className)}>
        <Container>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 md:gap-x-16">
            {credibilityItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-ink/10 hidden md:block" />
                <span className="text-base font-medium text-slate">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }

  if (effectiveVariant === 'marquee') {
    // Duplicate items for seamless loop
    const duplicatedItems = [...credibilityItems, ...credibilityItems];
    
    return (
      <div 
        className={cn(
          'w-full bg-mist/30 border-y border-silver/40 py-4 overflow-hidden relative',
          className
        )}
      >
        <div 
          className="flex w-fit credibility-rail-track hover:[animation-play-state:paused] pointer-events-auto"
          style={{
            animationDuration: '60s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
          }}
        >
          {duplicatedItems.map((item, index) => (
            <span
              key={index}
              className="text-base font-medium text-slate whitespace-nowrap px-10 flex items-center gap-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ink/10" />
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // Default: Static Premium Rail
  return (
    <div className={cn('w-full bg-mist/30 border-y border-silver/40 py-5 lg:py-6', className)}>
      <Container>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 md:gap-x-16">
          {credibilityItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-ink/10 hidden md:block" />
              <span className="text-base font-medium text-slate">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
