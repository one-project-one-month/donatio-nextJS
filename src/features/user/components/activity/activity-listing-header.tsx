import ActivitySearchBox from "./activity-search-box";

import { Separator } from "@/components/ui/separator";

type ActivityListingHeaderProps = {
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function ActivityListingHeader({ searchValue, onSearchChange }: ActivityListingHeaderProps) {
  return (
    <div className="pb-4 ">
      <div className="my-6 text-center flex justify-between w-full items-center">
        <h2 className="text-4xl font-extrabold text-primary">Activities</h2>
          <ActivitySearchBox value={searchValue} onChange={onSearchChange} />
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
