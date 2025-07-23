"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import ActivityListingSkeleton from "@/features/user/components/activity/acitivity-listing-skeleton";
import ActivityListing from "@/features/user/components/activity/activity-listing";
import ActivityListingHeader from "@/features/user/components/activity/activity-listing-header";
import { useGetActivities } from "@/features/user/hooks/donor-activity-queries";
import usePagination from "@/hooks/use-pagination";
import { showToast } from "@/lib/toast";
import { useCallback, useEffect, useRef } from "react";

function page() {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetActivities(5);

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
    <div className="max-w-7xl md:mx-auto px-5 py-5">
      <ActivityListingHeader />
      {isLoading ? (
        <ActivityListingSkeleton />
      ) : (
        <ScrollArea className="h-dvh">
          <div className="space-y-4 px-4 py-2">
            {data?.pages.map((page, idx) => (
              <ActivityListing key={idx} data={page.results?? null} />
            ))}
            <div
              ref={loaderRef}
              className="h-10 flex justify-center items-center"
            >
              {isFetchingNextPage && <p>Loading more...</p>}
            </div>
          </div>
        </ScrollArea>
      )}
    </div>
  );
}

export default page;
