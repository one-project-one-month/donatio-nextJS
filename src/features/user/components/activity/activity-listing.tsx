
import { Activity } from "@/types/Activity";
import ActivityListingCard from "./activity-listing-card";



type ActivityListingProps = {
  data: Activity[] | null;
}



function ActivityListing({ data }: ActivityListingProps) {
  return (
    <section>
        <div>
            {data?.map((activity) => (
          <ActivityListingCard key={activity.id} data={activity} />
        ))}
        </div>
    </section>
  );
}

export default ActivityListing;










