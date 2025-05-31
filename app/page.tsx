import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { ValuePropositions } from "@/components/sections/value-propositions"
import { OurModel } from "@/components/sections/our-model"
import { ProgramTiers } from "@/components/sections/program-tiers"
import { BuildingFrontier } from "@/components/sections/building-frontier"
import { CentersOfExcellence } from "@/components/sections/centers-of-excellence"
import { EventsWorkshops } from "@/components/sections/events-workshops"
import { WhyThisMatters } from "@/components/sections/why-this-matters"
import { ProgramDetails } from "@/components/sections/program-details"
import { AboutUs } from "@/components/sections/about-us"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ValuePropositions />
        <OurModel />
        <ProgramTiers />
        <BuildingFrontier />
        <CentersOfExcellence />
        <EventsWorkshops />
        <WhyThisMatters />
        <ProgramDetails />
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}
