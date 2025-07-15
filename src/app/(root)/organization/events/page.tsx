import PaginationUI from "@/components/common/pagination-ui"
import EventHeader from "@/features/organization/components/event/event-header"
import EventTable from "@/features/organization/components/event/event-table"


function page() {
  return (
    <div>
        <EventHeader />
        <EventTable />
        <div className="mt-5">
        <PaginationUI totalCount={10} isNext={true}  isPrevious={true} limit={5} page={2}/>
      </div>
    </div>
  )
}

export default page