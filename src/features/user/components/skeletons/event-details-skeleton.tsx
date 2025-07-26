import { Skeleton } from "@/components/ui/skeleton";

const EventDetailsSkeleton = () => (
  <div className="w-full p-4">
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Skeleton className="h-7 w-1/3" />

      {/* Banner */}
      <Skeleton className="w-full h-96 rounded-3xl" />

      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="space-y-3">
          <Skeleton className="h-8 w-80" />
          <div className="flex items-center gap-2">
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="h-6 w-32" />
          </div>
        </div>
        <div className="flex flex-col md:items-end gap-3">
          <div className="w-full max-w-sm space-y-2">
            <div className="flex justify-between">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-32" />
            </div>
            <Skeleton className="h-3 w-full rounded-full" />
          </div>
          <Skeleton className="h-6 w-48" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-end">
        <Skeleton className="h-11 w-36 rounded-full" />
        <Skeleton className="h-11 w-36 rounded-full" />
      </div>

      {/* Description Section */}
      <div className="space-y-3">
        <Skeleton className="h-7 w-40" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
        </div>
      </div>
    </div>
  </div>
);

export default EventDetailsSkeleton;