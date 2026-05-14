import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { sectorsList } from '@/lib/constants'

export const SectorsSection = () => {
  return (
    <Section background="mist" spacing="md" className="border-b border-silver">
      <Container>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-1/3">
            <span className="text-base font-bold uppercase tracking-[0.3em] text-slate/60 mb-2 block">Environment Experience</span>
            <h2 className="text-h2 font-display font-bold text-ink tracking-tight">Sectors We Support.</h2>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
              {sectorsList.map((sector, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-8 h-px bg-slate/20" />
                  <span className="text-base font-semibold tracking-tight text-slate block leading-snug">
                    {sector}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
