import { HeroSection } from '@/components/modules/HeroSection'
import { TrustBand } from '@/components/modules/TrustBand'
import { ProofSection } from '@/components/modules/ProofSection'
import { ThreeServicesOverview } from '@/components/modules/ThreeServicesOverview'
import { DigitalConsultancyFeature } from '@/components/modules/DigitalConsultancyFeature'
import { TrustServicesFeature } from '@/components/modules/TrustServicesFeature'
import { DISPFeature } from '@/components/modules/DISPFeature'
import { WhyWebsoul } from '@/components/modules/WhyWebsoul'
import { SectorsSection } from '@/components/modules/SectorsSection'
import { InsightsPreview } from '@/components/modules/InsightsPreview'
import { OutcomesSection } from '@/components/modules/OutcomesSection'
import { CareersCTA } from '@/components/modules/CareersCTA'
import { CapabilityStatementCTA } from '@/components/modules/CapabilityStatementCTA'
import { FinalCTA } from '@/components/modules/FinalCTA'

export default function Home() {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <TrustBand />
      <ProofSection />
      <ThreeServicesOverview />
      <DigitalConsultancyFeature />
      <TrustServicesFeature />
      <DISPFeature />
      <WhyWebsoul />
      <SectorsSection />
      <InsightsPreview />
      <OutcomesSection />
      <CareersCTA />
      <CapabilityStatementCTA />
      <FinalCTA />
    </div>
  )
}
