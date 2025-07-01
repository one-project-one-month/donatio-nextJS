import React from 'react'
import MeetTheChangeMakers from './ChangeMakers'
import DonateNow from './DonateNow'
import Slogan from './Slogan'
import LogosCarousel from './LogosCarousel'
import HeroSection from './HeroSection'

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center gap-10 px-4">
      {/* Hero Section */}
      <HeroSection />

      {/* Logos Carousel */}
      <LogosCarousel />

      {/* Slogan Section */}
      <Slogan />


      {/* Images and Donate Now */}
      <DonateNow />
      {/* Change-Makers */}
      <MeetTheChangeMakers />



    </div>
  )
}
