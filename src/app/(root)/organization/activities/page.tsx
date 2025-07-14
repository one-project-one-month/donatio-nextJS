import PaginationUI from "@/components/common/pagination-ui"
import Pagination from "@/features/admin/components/pagination"
import ActivityHeader from "@/features/organization/components/activity/activity-header"
import ActivityTable from "@/features/organization/components/activity/activity-table"


function page() {
  return (
    <div className="p-5 w-full">
      <ActivityHeader />
      <ActivityTable />
      <div className="mt-5">
        <PaginationUI totalCount={10} isNext={true}  isPrevious={true} limit={5} page={2}/>
      </div>
    </div>
  )
}

export default page