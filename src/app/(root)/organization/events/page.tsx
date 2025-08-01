"use client"
import PaginationUI from "@/components/common/pagination-ui"
import EventHeader from "@/features/organization/components/event/event-header"
import EventTable from "@/features/organization/components/event/event-table"
import { useGetEvents } from "@/features/organization/hooks/organization-event-queries"
import usePagination from "@/hooks/use-pagination"


function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { page, setPage } = usePagination("event_page")
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading } = useGetEvents(page, 5)
  return (
    <div className="p-5">
      <EventHeader totalEvents={data?.count ?? 0} />
      <EventTable data={data?.results ?? null} isLoading={isLoading} />
      <div className="mt-5">
        <PaginationUI 
          totalCount={data?.count ?? 0} 
          isNext={data?.next ? true : false} 
          isPrevious={data?.previous ? true : false}
          setPage={setPage} 
          limit={5} 
          page={page} />
      </div>
    </div>
  )
}

export default page