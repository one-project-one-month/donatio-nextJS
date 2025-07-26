'use client'

import PaginationUI from "@/components/common/pagination-ui";
import Pagination from "@/features/admin/components/pagination";
import ActivityHeader from "@/features/organization/components/activity/activity-header";
import ActivityTable from "@/features/organization/components/activity/activity-table";
import { useGetActivity } from "@/features/organization/hooks/organization-activity-queries";
import usePagination from "@/hooks/use-pagination";

function page() {
  const { page, setPage } = usePagination("activity_page");
  const { data, isLoading } = useGetActivity(page, 5);

  return (
    <div className="p-5">
      <ActivityHeader totalActivities={data?.count?? 0} />
      <ActivityTable data={data?.results?? null} isLoading={isLoading} />
      <div className="mt-5">
        <PaginationUI
          totalCount={data?.count ?? 0}
          isNext={data?.next ? true : false}
          isPrevious={data?.previous ? true : false}
          limit={5}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

export default page;
