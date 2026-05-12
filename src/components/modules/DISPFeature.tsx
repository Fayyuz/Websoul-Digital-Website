import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { TrendingUp, FileCheck, Building2, Target } from 'lucide-react'

export const DISPFeature = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Readiness Assessment',
      description: 'Evaluate and uplift security maturity levels.',
    },
    {
      icon: FileCheck,
      title: 'Governance Frameworks',
      description: 'Policies and procedures for trusted environments.',
    },
    {
      icon: Building2,
      title: 'Environment Advisory',
      description: 'Support for defence-adjacent and regulated contexts.',
    },
    {
      icon: Target,
      title: 'Uplift Pathways',
      description: 'Practical roadmaps to achieve and maintain trusted status.',
    },
  ]

  return (
    <Section background="mist" spacing="lg">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-paper rounded-2xl p-8 border border-silver">
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex gap-3">
                      <Icon className="w-5 h-5 text-ink flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-slate">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-medium tracking-wider text-slate uppercase mb-2 block">
              Core Capability
            </span>
            <h2 className="text-h1 font-display font-semibold mb-4">DISP Advisory</h2>
            <p className="text-body-lg text-slate mb-6">
              We help organisations navigate security readiness, governance uplift, and trusted-environment requirements with practical, actionable advisory services.
            </p>
            <Button href="/disp-advisory" variant="secondary">
              Learn more about DISP Advisory →
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
