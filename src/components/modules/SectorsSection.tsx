import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { sectorsList } from '@/lib/constants'

export const SectorsSection = () => {
  return (
    <Section background="mist" spacing="md">
      <Container>
        <div className="text-center">
          <h2 className="text-h2 font-display font-semibold mb-6">Sectors We Support</h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {sectorsList.map((sector, index) => (
              <span key={index} className="text-body text-slate">{sector}</span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
