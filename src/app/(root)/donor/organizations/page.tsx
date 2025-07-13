'use client'

import OrganizationListing from "@/features/user/components/organization/organization-listing"
import OrganizationListingHeader from "@/features/user/components/organization/organization-listing-header"
import OrganizationListingSkeleton from "@/features/user/components/organization/organization-listing-skeleton"
import { useGetOrganizations } from "@/features/user/hooks/donor-organization-queries";
import usePagination from "@/hooks/use-pagination";
import { showToast } from "@/lib/toast";
import { useEffect } from "react";


function page() {

  const { page } = usePagination();
  const { data: organizations, isLoading, isError} = useGetOrganizations(page);


  useEffect(() => {
  
      if(isError) {
        showToast.error("Error getting organizations");
      }
  
    },[isError]);



  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-5">
        <OrganizationListingHeader />
        { isLoading ? <OrganizationListingSkeleton /> : <OrganizationListing data={organizations} page={page} />}
    </div>
  )
}

export default page