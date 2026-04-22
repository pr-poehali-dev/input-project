import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { NextGenSection } from "@/components/NextGenSection"
import { PersonalOsSection } from "@/components/PersonalOsSection"
import { StatsSection } from "@/components/StatsSection"
import { FaqSection } from "@/components/FaqSection"
import { CtaSection } from "@/components/CtaSection"

const Index = () => {
  return (
    <div className="dark bg-black text-white min-h-screen">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center">
        <HeroSection />
        <FeaturesSection />
        <NextGenSection />
        <PersonalOsSection />
        <StatsSection />
        <FaqSection />
        <CtaSection />
      </main>
    </div>
  )
}

export default Index