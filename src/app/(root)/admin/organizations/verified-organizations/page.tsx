import VerifiedOrganizationsPage from "@/features/admin/components/verified-page";
import React, { Suspense } from "react";

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifiedOrganizationsPage />
    </Suspense>
  );
}

export default Page;
