import BreadCrumbUI from "@/components/common/breadcrumb-ui";
import React from "react";
import EventSearchBox from "./event-search-box";

function EventListingHeader() {
  return (
    <div className="py-12 ">
      <BreadCrumbUI
        currentPageTitle="Events"
        links={[{ name: "Donor", path: "/donor" }]}
      />
      <div className="my-6 text-center flex flex-col space-y-3 justify-center items-center">
        <h2 className="text-4xl font-extrabold text-gray-900">Events</h2>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
          Discover upcoming and ongoing events. Explore details, participate,
          and support causes that matter to you.
        </p>
      </div>
      <div className="my-3 flex space-x-2 items-center justify-center w-full">
      <EventSearchBox />
      </div>
    </div>
  );
}

export default EventListingHeader;
