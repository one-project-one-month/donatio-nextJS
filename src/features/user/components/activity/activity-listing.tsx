import { Activity } from "@/types/Activity";
import ActivityListingCard from "./activity-listing-card";
import NodataBlock from "@/components/common/no-data-block";

type ActivityListingProps = {
  data: Activity[] | null;
};

function ActivityListing({ data }: ActivityListingProps) {
  return (
    <section>
      {data && data?.length !== 0 ? (
        <div>
          {data?.map((activity) => (
            <ActivityListingCard key={activity.id} data={activity} />
          ))}
        </div>
      ) : (
        <NodataBlock value="activities" />
      )}
    </section>
  );
}

export default ActivityListing;
