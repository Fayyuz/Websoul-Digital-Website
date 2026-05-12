import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { CheckCircle2 } from 'lucide-react'
import { outcomesList } from '@/lib/constants'

export const OutcomesSection = () => {
  return (
    <Section background="white" spacing="md">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 font-display font-semibold text-center mb-8">What You Can Expect</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {outcomesList.map((outcome, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-ink flex-shrink-0" />
                <span className="text-body text-slate">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
