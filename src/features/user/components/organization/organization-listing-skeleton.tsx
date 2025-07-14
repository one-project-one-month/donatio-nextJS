import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function OrganizationListingSkeleton() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8  p-3 md:p-0 grid-cols-1 gap-12 ">
        {Array.from({ length: 12 }).map((org, idx) => (
          <div key={idx} className="bg-white text-center cursor-default transition-all flex flex-col relative group">
            {/* Image wrapper */}
            <div className="w-full h-[240px] flex justify-center items-center  rounded-2xl overflow-hidden">
              <Skeleton className=" w-full h-full rounded object-contain" />
            </div>

            {/* Title text */}
            <div className="text-start pl-3 text-lg font-semibold my-3 transition-all duration-300">
              <Skeleton className="h-6 w-3/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrganizationListingSkeleton;
