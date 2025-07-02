import DonationBanner from "@/features/user/components/banner/donation-banner";
import SearchSection from "@/features/user/components/search/search-section";


function UserProfilePage() {
  return (
    <div className="w-full">
      <SearchSection />
      <DonationBanner />
    </div>
  )
}

export default UserProfilePage;