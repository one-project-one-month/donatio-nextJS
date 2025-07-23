"use client";

import { Button } from "@/components/ui/button";
import { Organization } from "@/types/Organization";
import { Image as ImageIcon, LucideMessageCircleMore } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  useGetOrganizationActivities,
  useGetOrganizationEvents,
} from "../../hooks/donor-organization-queries";
import ActivityListing from "../activity/activity-listing";
import EventListing from "../event/event-listing";
import usePagination from "@/hooks/use-pagination";
import { showToast } from "@/lib/toast";
import ActivityListingSkeleton from "../activity/acitivity-listing-skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useStartChat } from "../../hooks/donor-chat-queries";

type OrganizationDetailProps = {
  data: Organization | null;
};

function OrganizationDetail({ data }: OrganizationDetailProps) {
  const [activeTab, setActiveTab] = useState("events");

  const { page, setPage } = usePagination("eventPage");

  const { startChat } = useStartChat()

  const {
    data: activity,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError: isActivityError,
    isLoading: isActivityLoading,
  } = useGetOrganizationActivities(data?.id ?? "");
  const { data: event } = useGetOrganizationEvents(data?.id ?? "");

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
    if (isActivityError) {
      showToast.error("Error getting activities");
    }
  }, [isActivityError]);

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
    <section>
      <div className="flex flex-col text-neutral-400 justify-center items-center bg-neutral-100 dark:bg-neutral-900 w-full h-96 rounded-xl mt-5">
        {data?.attachments[1] ? (
          <div></div>
        ) : (
          <>
            {" "}
            <ImageIcon size={50} />
            <span className="text-sm mt-3">No Image</span>
          </>
        )}
      </div>
      <div className="mt-4 flex flex-col items-center md:flex-row justify-between gap-4">
        <div className="flex items-center gap-3 mt-2">
          <div className="w-20 h-20  rounded-full flex items-center border justify-center overflow-hidden relative">
            <ImageIcon className="text-neutral-400" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold">{data?.name}</span>
            <span className="text-sm text-primary font-medium">
              {" "}
              {data?.type}
            </span>
          </div>
        </div>

        <div className="md:items-end gap-2">
          <Button onClick={() => startChat(data?.id?? "")} className="flex min-w-[200px] items-center gap-2 py-7 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors cursor-pointer">
            <LucideMessageCircleMore />
            Send Message
          </Button>
        </div>
      </div>
      <div className="mt-10 space-y-2">
        <div className="text-xl font-bold text-gray-800">Description</div>
        <p className="font-light text-gray-600 text-base leading-relaxed">
          {data?.description}
        </p>
      </div>
      <div className="mt-8">
        <div className="flex space-x-4 border-b border-gray-200">
          <button
            className={`pb-2 text-sm font-medium ${
              activeTab === "events"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("events")}
          >
            Events
          </button>
          <button
            className={`pb-2 text-sm font-medium ${
              activeTab === "activities"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("activities")}
          >
            Activities
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "events" && (
            <EventListing data={event ?? null} page={page} setPage={setPage} />
          )}
          {activeTab === "activities" && (
            <>
              {isActivityLoading ? (
                <ActivityListingSkeleton />
              ) : (
                <ScrollArea className="h-dvh">
                  <div className="space-y-4 px-4 py-2">
                    {activity?.pages.map((page, idx) => (
                      <ActivityListing key={idx} data={page.results ?? null} />
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default OrganizationDetail;
