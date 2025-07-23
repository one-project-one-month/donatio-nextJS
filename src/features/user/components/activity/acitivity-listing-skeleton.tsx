import { Skeleton } from "@/components/ui/skeleton";

function ActivityListingSkeleton() {
  return (
    <div>
      <div className="p-5">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="w-full rounded-2xl shadow-sm p-3 my-10 cursor-default animate-pulse">
            {/* Tags section */}
            <div className="flex md:justify-end justify-end mb-3">
              <Skeleton className="h-6 w-24 ms-3 md:px-5 hidden sm:flex rounded" />
              <Skeleton className="h-6 w-28 ms-3 px-5 rounded" />
              <Skeleton className="h-6 w-16 ms-3 ps-5 rounded" />
            </div>

            {/* Title and date */}
            <div className="flex items-center justify-between my-3">
              <Skeleton className="h-10 w-48 md:w-64 rounded" />
              <Skeleton className="h-6 w-20" />
            </div>

            {/* Event name */}
            <div>
              <Skeleton className="h-5 w-40 font-light my-1 rounded" />
            </div>

            {/* Description */}
            <div>
              <Skeleton className="h-20 w-full text-justify text-slate-400 font-light my-4 rounded" />
              <div className="text-end text-blue-300 my-3">
                <Skeleton className="h-6 w-20 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityListingSkeleton;
