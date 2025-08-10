import PendingOrganizationsPage from "@/features/admin/components/org-pending-page";
import React, { Suspense } from "react";

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PendingOrganizationsPage />
    </Suspense>
  );
}

export default Page;
