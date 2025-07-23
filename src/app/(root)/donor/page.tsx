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
      {/* Events , Org  and Activitites*/}
      <TabSplitter
        tab1Label={"Events"}
        tab2Label={"Activities"}
        tab3Label={"Orgnizations"}
        tab1Content={<EventLists />}
        tab2Content={<ActivityLists />}
        tab3Content={<OrgnizationLists />}
      />
      <DonationBanner />
    </div>
  );
}

export default UserProfilePage;
