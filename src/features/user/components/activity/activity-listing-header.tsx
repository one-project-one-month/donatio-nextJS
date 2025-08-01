import ActivitySearchBox from "./activity-search-box";

import { Separator } from "@/components/ui/separator";

type ActivityListingHeaderProps = {
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function ActivityListingHeader({
  searchValue,
  onSearchChange,
}: ActivityListingHeaderProps) {
  return (
    <div className="pb-8">
      <div className="my-6 flex flex-col md:flex-row md:justify-between md:items-center gap-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-primary text-left">
          Activities
        </h2>
        <ActivitySearchBox value={searchValue} onChange={onSearchChange} />
      </div>
      <p className="text-sm md:text-lg mt-2 text-neutral-400 max-w-2xl mb-3">
        Browse all your recent activities, track your participation, and stay
        updated with the latest events and opportunities.
      </p>
      <Separator />
    </div>
  );
}

export default ActivityListingHeader;
