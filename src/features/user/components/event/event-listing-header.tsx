import React from "react";
import EventSearchBox from "./event-search-box";
import { Separator } from "@/components/ui/separator";

function EventListingHeader() {
  return (
    <div className="pb-8 pt-0 ">
      <div className="my-6 text-center flex justify-between items-center">
        <h2 className="text-4xl font-extrabold text-primary">Events</h2>

        <EventSearchBox />
      </div>
      <p className="mt-2 text-neutral-400 max-w-2xl mb-3">
        Discover upcoming and ongoing events. Explore details, participate, and
        support causes that matter to you.
      </p>
      <Separator />
    </div>
  );
}

export default EventListingHeader;
