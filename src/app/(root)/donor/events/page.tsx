import EventListingSection from "@/features/user/components/event/event-listing-section";
import React, { Suspense } from "react";

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventListingSection />
    </Suspense>
  );
}

export default Page;
