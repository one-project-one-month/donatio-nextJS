import OrganizationListing from "@/features/user/components/organization/organization-listing"
import OrganizationListingHeader from "@/features/user/components/organization/organization-listing-header"


function page() {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-5">
        <OrganizationListingHeader />
        <OrganizationListing />
    </div>
  )
}

export default page