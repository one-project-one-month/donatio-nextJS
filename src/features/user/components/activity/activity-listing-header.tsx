import BreadCrumbUI from "@/components/common/breadcrumb-ui";

import ActivitySearchBox from "./activity-search-box";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ActivityListingHeader() {
  return (
    <div className="py-12 ">
      <BreadCrumbUI
        currentPageTitle="Activities"
        links={[{ name: "Donor", path: "/donor" }]}
      />
      <div className="my-6 text-center flex flex-col space-y-3 justify-center items-center">
        <h2 className="text-4xl font-extrabold text-gray-900">Activities</h2>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
          Browse all your recent activities, track your participation, and stay
          updated with the latest events and opportunities.
        </p>
      </div>
      <div className="my-3 flex space-x-2 items-center justify-center w-full">
        <ActivitySearchBox />
        <Select>
          <SelectTrigger className="w-[180px] py-5 border-primary">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Activities</SelectLabel>
              <SelectItem value="recent">Recent</SelectItem>
              <SelectItem value="old">Old </SelectItem>
              <SelectItem value="archieved">Archieved</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default ActivityListingHeader;
