import TabSplitter from "@/components/common/tab-splitter";
import ActivityLists from "@/components/ui/activities-list";
import EventLists from "@/components/ui/events-list";
import OrgnizationLists from "@/components/ui/orgs-list";
import DonationBanner from "@/features/user/components/banner/donation-banner";
import SearchSection from "@/features/user/components/search/search-section";


function UserProfilePage() {
  return (
    <div className="w-full">
      <SearchSection />
      {/* Events and Org */}
      <TabSplitter tab1Label={"Events"} tab2Label={"Orgnizations"} tab3Label={"Activities"} tab1Content={<EventLists/>} tab2Content={<OrgnizationLists/>} tab3Content={<ActivityLists/>}/>
      <DonationBanner />
    </div>
  )
}

export default UserProfilePage;