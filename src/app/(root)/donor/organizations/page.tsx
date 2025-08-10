import OrganizationListingSection from "@/features/user/components/organization/organization-listing-section";
import React, { Suspense } from "react";

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrganizationListingSection />
    </Suspense>
  );
}

export default Page;
