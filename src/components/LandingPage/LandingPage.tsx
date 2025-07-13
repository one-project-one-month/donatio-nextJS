import React from 'react'

import HeroSection from './HeroSection'
import EventsSection from './EventSection'
import DonationSection from './DonationSection'
import CarouselLogoSection from './CarouselLogoSection'
import SloganSection from './SloganSection'
import BuildingTrustSection from './BuildingTrustSection'
import ChangeMakersSection from './ChangeMakersSection'

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center gap-10">

      <HeroSection />
      <CarouselLogoSection />
      <SloganSection />
      <BuildingTrustSection />
      <ChangeMakersSection />
      <EventsSection />
      <DonationSection />

    </div>
  )
}
