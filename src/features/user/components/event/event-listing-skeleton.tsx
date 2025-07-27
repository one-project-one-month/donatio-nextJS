import { Skeleton } from "@/components/ui/skeleton";

type EventListingSkeletonProps = {
  count?: number;
};

function EventListingSkeleton({ count = 9 }: EventListingSkeletonProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-3 mb-6 w-full">
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded transition-all duration-300"
          >
            {/* Image skeleton */}
            <div className="rounded-lg overflow-hidden">
              <Skeleton className="w-full h-64 rounded" />

              {/* Header info */}
              <div className="flex justify-between mb-1 text-sm my-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>

            {/* Title & description */}
            <div className="text-justify mt-2">
              <Skeleton className="h-6 w-1/2 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-11/12 mb-2" />
              <Skeleton className="h-4 w-9/12" />
            </div>

            {/* Button skeleton */}
            <Skeleton className="h-12 w-full mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventListingSkeleton;

