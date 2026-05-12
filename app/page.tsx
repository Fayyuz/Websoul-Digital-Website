import HeroSection from "@/components/sections/HeroSection";
import TrustBand from "@/components/sections/TrustBand";
import ServicesOverview from "@/components/sections/ServicesOverview";
import SectorFocus from "@/components/sections/SectorFocus";
import WhyWebsoulSection from "@/components/sections/WhyWebsoulSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div id="homepage">
      <HeroSection />
      <TrustBand />
      <ServicesOverview />
      <SectorFocus />
      <WhyWebsoulSection />
      <FinalCTA />
    </div>
  );
}
