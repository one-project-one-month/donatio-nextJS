import { Skeleton } from "@/components/ui/skeleton";

const ProfilePageSkeleton = () => {
  return (
    <div className="w-full p-10 space-y-10">
      {/* Overview Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-6 w-1/4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Skeleton className="h-32 rounded-xl" />
          <Skeleton className="h-32 rounded-xl" />
          <Skeleton className="h-32 rounded-xl" />
        </div>
      </div>

      {/* Profile Skeleton */}
      <div className="space-y-8">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="w-full aspect-[3/1] rounded-4xl" />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Skeleton className="w-12 h-12 rounded-full" />
            <div>
              <Skeleton className="h-7 w-48 mb-2" />
              <Skeleton className="h-5 w-24" />
            </div>
          </div>
          <Skeleton className="h-[52px] w-48 rounded-full" />
        </div>
      </div>

      {/* Description Skeleton */}
      <div className="space-y-6">
        <Skeleton className="h-8 w-52" />
        <div className="space-y-4">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
        </div>
      </div>

      {/* Certifications Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-64" />
        <div className="flex justify-between items-center gap-8">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Skeleton className="w-full aspect-[4/3] rounded-md" />
            <Skeleton className="w-full aspect-[4/3] rounded-md" />
            <Skeleton className="w-full aspect-[4/3] rounded-md" />
          </div>
          <Skeleton className="w-36 h-36" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePageSkeleton;
