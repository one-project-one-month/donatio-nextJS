import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Image, Eye, Pencil, Trash2 } from "lucide-react";
import { ActivityTableData } from "../../types/Activity";


type ActivitiesProps = {
    data: ActivityTableData;
    setData: (data: ActivityTableData) => void;
}

function ActivityRows({ data, setData }: ActivitiesProps) {
  return (
    <TableRow className="h-24 hover:bg-white">
      <TableCell className="sticky min-w-[200px] text-start bg-white left-0 z-10 p-5">{data.title}</TableCell>
      <TableCell className="min-w-[200px] text-center">{data.date}</TableCell>
      <TableCell className="min-w-[200px] text-center">{data.location}</TableCell>
      <TableCell className="min-w-[200px] text-center">{data.totalVoucher}</TableCell>
      <TableCell className="min-w-[200px] text-start">
        <div>
          <Image />
        </div>
      </TableCell>
      <TableCell className="sticky max-w-[200px] text-center bg-white right-0 z-10">
        <div className="flex items-center justify-center gap-2">
          <Button variant="ghost" size="icon" title="View">
            <Eye className="w-5 h-5 text-blue-500 hover:text-blue-700" />
          </Button>
          <Button variant="ghost" onClick={() => setData(data)} size="icon" title="Edit">
            <Pencil className="w-5 h-5 text-green-500 hover:text-yellow-700" />
          </Button>
          <Button variant="ghost" size="icon" title="Delete">
            <Trash2 className="w-5 h-5 text-red-500 hover:text-red-700" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}

export default ActivityRows