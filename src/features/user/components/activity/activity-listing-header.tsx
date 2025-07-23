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
import { Separator } from "@/components/ui/separator";

function ActivityListingHeader() {
  return (
    <div className="pb-4 ">
      <div className="my-6 text-center flex justify-between w-full items-center">
        <h2 className="text-4xl font-extrabold text-primary">Activities</h2>
        <div className="flex space-x-2 items-center w-1/2 justify-center">
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
      <p className="mb-3 text-neutral-400 max-w-2xl">
        Browse all your recent activities, track your participation, and stay
        updated with the latest events and opportunities.
      </p>
      <Separator />
    </div>
  );
}

export default ActivityListingHeader;
