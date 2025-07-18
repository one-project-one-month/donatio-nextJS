import { Skeleton } from "@/components/ui/skeleton";

function EventListingSkeleton() {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 my-3 sm:gap-18 mb-6 gap-2 w-full justify-center">
        {Array.from({length: 9}).map((_, idx) => (
          <div key={idx} className="md:my-0 my-3 flex flex-col justify-between max-h-[600px] max-w-[500px] rounded transition-all duration-300">
            {/* Image skeleton */}
            <div className="rounded-lg overflow-hidden">
              <Skeleton className="w-full h-[300px] rounded" />

              {/* Header info */}
              <div className="flex justify-between mb-1 text-sm my-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>

            {/* Title & description */}
            <div className="text-justify">
              <Skeleton className="h-6 w-40 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-11/12 mb-1" />
              <Skeleton className="h-4 w-9/12" />
            </div>

            {/* Button skeleton */}
            <Skeleton className="h-10 w-32 mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventListingSkeleton;
