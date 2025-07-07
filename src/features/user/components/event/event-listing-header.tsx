import BreadCrumbUI from "@/components/common/breadcrumb-ui";
import React from "react";
import EventSearchBox from "./event-search-box";
import SearchSection from "../search/search-section";
import { Separator } from "@/components/ui/separator";

function EventListingHeader() {
  return (
    <div className="pb-8 pt-0 ">
      <div className="my-6 text-center flex justify-between items-center">
        <h2 className="text-4xl font-extrabold text-primary">Events</h2>

        <EventSearchBox />
      </div>
      <p className="mt-2 text-gray-400 max-w-2xl mb-4">
        Discover upcoming and ongoing events. Explore details, participate, and
        support causes that matter to you.
      </p>
      <Separator />
      <div className="my-3 flex space-x-2 items-center justify-center w-full"></div>
    </div>
  );
}

export default EventListingHeader;
