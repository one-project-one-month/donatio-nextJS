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
        <EventHeader />
        <EventTable />
        <div className="mt-5">
        <PaginationUI totalCount={10} isNext={true}  isPrevious={true} limit={5} page={2}/>
      </div>
    </div>
  )
}

export default page