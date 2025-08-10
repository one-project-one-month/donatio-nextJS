import EventsPage from "@/features/admin/components/event-page";
import React, { Suspense } from "react";

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventsPage />
    </Suspense>
  );
}

export default Page;
