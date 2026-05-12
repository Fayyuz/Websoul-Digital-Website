import { Container } from '@/components/ui/Container'
import { trustIndicators } from '@/lib/constants'

export const TrustBand = () => {
  return (
    <div className="border-y border-silver bg-mist py-4">
      <Container>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {trustIndicators.map((indicator, index) => (
            <span key={index} className="text-sm text-slate">
              {indicator}
            </span>
          ))}
        </div>
      </Container>
    </div>
  )
}
