"use client";

import OrganizationListing from "@/features/user/components/organization/organization-listing";
import OrganizationListingHeader from "@/features/user/components/organization/organization-listing-header";
import OrganizationListingSkeleton from "@/features/user/components/organization/organization-listing-skeleton";
import { useGetOrganizations } from "@/features/user/hooks/donor-organization-queries";
import usePagination from "@/hooks/use-pagination";
import { showToast } from "@/lib/toast";
import { useState } from "react";
import { useDebounce } from "use-debounce";

function Page() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [debouncedSearchValue] = useDebounce(searchValue, 500);
  const { page, setPage } = usePagination();
  const {
    data: organizations,
    isLoading,
    isError,
  } = useGetOrganizations(page, 12, debouncedSearchValue);

  if (isError) {
    showToast.error("Error getting organizations");
    <div>Error getting organizations</div>;
  }

  return (
    <div className="mx-auto p-4">
      <OrganizationListingHeader searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)} />
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
