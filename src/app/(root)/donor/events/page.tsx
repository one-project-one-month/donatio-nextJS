"use client";

import EventListing from "@/features/user/components/event/event-listing";
import EventListingHeader from "@/features/user/components/event/event-listing-header";
import EventListingSkeleton from "@/features/user/components/event/event-listing-skeleton";
import { useGetEvents } from "@/features/user/hooks/donor-event-queries";
import usePagination from "@/hooks/use-pagination";
import { showToast } from "@/lib/toast";
import { useState } from "react";
import { useDebounce } from "use-debounce";

const PAGE_SIZE = 6;

function Page() {
  const { page, setPage } = usePagination();
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue] = useDebounce(searchValue, 500);

  const {
    data: events,
    isError,
    isPending,
  } = useGetEvents(page, PAGE_SIZE, debouncedSearchValue);

  if (isError) {
    showToast.error("Error loading event details.");
    return <div>Error loading event details.</div>;
  }

  return (
    <div className="w-full p-4">
      <EventListingHeader
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
      />
      {isPending ? (
        <EventListingSkeleton count={PAGE_SIZE} />
      ) : (
        <EventListing data={events} page={page} setPage={setPage} />
      )}
    </div>
  );
}

export default Page;
