import EventHeader from "@/features/organization/components/event/event-header"
import EventPagination from "@/features/organization/components/event/event-pagination"
import EventTable from "@/features/organization/components/event/event-table"


function page() {
  return (
    <div className="p-5 w-full">
        <EventHeader />
        <EventTable />
        <EventPagination />
    </div>
  )
}

export default page