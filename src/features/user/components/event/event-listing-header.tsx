import { Separator } from "@/components/ui/separator";
import React from "react";
import EventSearchBox from "./event-search-box";

type EventListingHeaderProps = {
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function EventListingHeader({
  searchValue,
  onSearchChange,
}: EventListingHeaderProps) {
  return (
    <div className="pb-8">
      <div className="my-6 flex flex-col md:flex-row md:justify-between md:items-center gap-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-primary text-left">
          Events
        </h2>
        <EventSearchBox value={searchValue} onChange={onSearchChange} />
      </div>
      <p className="text-sm md:text-lg mt-2 text-neutral-400 max-w-2xl mb-3">
        Discover upcoming and ongoing events. Explore details, participate, and
        support causes that matter to you.
      </p>
      <Separator />
    </div>
  );
}

export default EventListingHeader;
