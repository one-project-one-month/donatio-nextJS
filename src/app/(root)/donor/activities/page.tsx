"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import ActivityListingSkeleton from "@/features/user/components/activity/acitivity-listing-skeleton";
import ActivityListing from "@/features/user/components/activity/activity-listing";
import ActivityListingHeader from "@/features/user/components/activity/activity-listing-header";
import { useGetActivities } from "@/features/user/hooks/donor-activity-queries";
import usePagination from "@/hooks/use-pagination";
import { showToast } from "@/lib/toast";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";

function page() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [debouncedSearchValue] = useDebounce(searchValue, 500);

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetActivities(5, debouncedSearchValue);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage]
  );

  useEffect(() => {
    if (isError) {
      showToast.error("Error getting activities");
    }
  }, [isError]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "100px",
      threshold: 0,
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loaderRef, handleObserver]);

  return (
    <div className="p-4">
      <ActivityListingHeader
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
      />
      {isLoading ? (
        <ActivityListingSkeleton />
      ) : (
          <div className="space-y-4 py-2">
            {data?.pages.map((page, idx) => (
              <ActivityListing key={idx} data={page.results ?? null} />
            ))}
            <div
              ref={loaderRef}
              className="h-10 flex justify-center items-center"
            >
              {isFetchingNextPage && <p>Loading more...</p>}
            </div>
          </div>
      )}
    </div>
  );
}

export default page;
