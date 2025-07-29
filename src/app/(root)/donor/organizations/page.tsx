"use client";

import OrganizationListing from "@/features/user/components/organization/organization-listing";
import OrganizationListingHeader from "@/features/user/components/organization/organization-listing-header";
import OrganizationListingSkeleton from "@/features/user/components/organization/organization-listing-skeleton";
import { useGetOrganizations } from "@/features/user/hooks/donor-organization-queries";
import usePagination from "@/hooks/use-pagination";
import { showToast } from "@/lib/toast";

function Page() {
  const { page, setPage } = usePagination();
  const {
    data: organizations,
    isLoading,
    isError,
  } = useGetOrganizations(page, 12);

  if (isError) {
    showToast.error("Error getting organizations");
    <div>Error getting organizations</div>;
  }

  return (
    <div className="mx-auto p-4">
      <OrganizationListingHeader />
      {isLoading ? (
        <OrganizationListingSkeleton />
      ) : (
        <OrganizationListing
          data={organizations ?? null}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default Page;
