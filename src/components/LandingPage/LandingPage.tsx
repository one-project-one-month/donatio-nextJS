import BuildingTrustSection from "./BuildingTrustSection";
import CarouselLogoSection from "./CarouselLogoSection";
import ChangeMakersSection from "./ChangeMakersSection";
import DonationSection from "./DonationSection";
import HeroSection from "./HeroSection";
import SloganSection from "./SloganSection";

export default function LandingPage() {
  return (
    <main className="flex flex-col pt-16">
      <HeroSection />
      <CarouselLogoSection />
      <SloganSection />
      <BuildingTrustSection />
      <ChangeMakersSection />
      {/* <EventsSection /> */}
      <DonationSection />
    </main>
  );
}
