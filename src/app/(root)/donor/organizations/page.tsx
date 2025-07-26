'use client'

import OrganizationListing from "@/features/user/components/organization/organization-listing"
import OrganizationListingHeader from "@/features/user/components/organization/organization-listing-header"
import OrganizationListingSkeleton from "@/features/user/components/organization/organization-listing-skeleton"
import { useGetOrganizations } from "@/features/user/hooks/donor-organization-queries";
import usePagination from "@/hooks/use-pagination";
import { showToast } from "@/lib/toast";
import { useEffect } from "react";


function page() {

  const { page, setPage } = usePagination();
  const { data: organizations, isLoading, isError} = useGetOrganizations(page, 12);


  useEffect(() => {
  
      if(isError) {
        showToast.error("Error getting organizations");
      }
  
    },[isError]);



  return (
    <div className="max-w-7xl mx-auto px-5 py-5">
        <OrganizationListingHeader />
        { isLoading ? <OrganizationListingSkeleton /> : <OrganizationListing data={organizations??null} page={page} setPage={setPage} />}
    </div>
  )
}

export default page