import { Calendar, Image, MapPin } from "lucide-react";
import { Activity } from "@/types/Activity";
import Link from "next/link";

type ActivityListingCardProps = {
  data: Activity;
};

function ActivityListingCard({ data }: ActivityListingCardProps) {
  return (
    <article className="w-full rounded-2xl hover:shadow-md shadow-sm dark:shadow-neutral-700 p-4 my-10 transition-all duration-300 bg-white dark:bg-neutral-950">
      {/* Top info row */}
      <div className="flex justify-end mb-3">
        <div className="flex items-center text-xs text-slate-500 hover:text-black transition-colors duration-300">
          <MapPin className="rounded-full md:size-9 md:p-2 p-1 size-7 bg-orange-500/30 text-orange-900 dark:bg-neutral-950 dark:border me-2" />
          <span>{data.location}</span>
        </div>
      </div>

      {/* Title and Date */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between my-3 gap-2">
        <div className="text-xl md:text-3xl font-bold text-primary transition-colors duration-300">
          <span>{data.title}</span>
          <div className="flex items-center gap-2 text-base my-2 text-muted-foreground">
            <div className="rounded-full border p-1">
              <Image size={20}  />
            </div>
            <Link
              href={`/donor/organization/${data.organization.id}`}
              className="hover:underline text-xs"
            >
              by {data.organization.name}
            </Link>
          </div>
        </div>
        <div className="flex items-center text-slate-500 text-sm font-light mt-2 md:mt-0">
          <Calendar className="me-2 size-4" />
          <span>{data.created_at}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-justify text-slate-500 text-sm leading-relaxed my-4">
        {data.description}
      </p>

      <div className="text-end">
        <Link
          href={`/donor/activities/${data.id}`}
          className="text-dodger-blue-400 hover:text-dodger-blue-600 text-sm font-medium transition-colors"
        >
          View Detail
        </Link>
      </div>
    </article>
  );
}

export default ActivityListingCard;
