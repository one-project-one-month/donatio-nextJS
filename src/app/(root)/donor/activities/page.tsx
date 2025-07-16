import ActivityListingSkeleton from "@/features/user/components/activity/acitivity-listing-skeleton"
import ActivityListing from "@/features/user/components/activity/activity-listing"
import ActivityListingHeader from "@/features/user/components/activity/activity-listing-header"

function page() {
  return (
    <div className="max-w-7xl md:mx-auto px-5 md:px-12 py-5">
        <ActivityListingHeader />
        {/* <ActivityListing /> */}
        <ActivityListingSkeleton />
    </div>
  )
}

export default page