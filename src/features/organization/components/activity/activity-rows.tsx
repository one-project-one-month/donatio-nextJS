import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Image, Eye, Pencil, Trash2 } from "lucide-react";
import { Activity } from "@/types/Activity";
import { ISODateFormat } from "@/lib/dateFormat";
import TableImageHolder from "@/components/common/table-image-holder";
import Link from "next/link";

type ActivitiesProps = {
    data: Activity;
    handleEdit: (data: Activity) => void;
    handleDelete: (id: string) => void;
}

function ActivityRows({ data, handleEdit, handleDelete }: ActivitiesProps) {
  return (
    <TableRow className="h-24 hover:bg-white dark:hover:bg-neutral-900">
      <TableCell className="sticky min-w-[200px] text-start bg-white dark:bg-neutral-950 left-0 z-10 p-5">{data.title}</TableCell>
      <TableCell className="min-w-[200px] text-center">{ISODateFormat(data.created_at)}</TableCell>
      <TableCell className="min-w-[200px] text-center">{data.location}</TableCell>
      <TableCell className="min-w-[200px] text-center">{data.activity_transactions.length}</TableCell>
      <TableCell className="min-w-[200px] text-start">
        <TableImageHolder data={data.attachments} />
      </TableCell>
      <TableCell className="sticky max-w-[200px] text-center bg-white dark:bg-neutral-950 right-0 z-10">
        <div className="flex items-center justify-center gap-2">
          <Button variant="ghost" size="icon" title="View" asChild>
            <Link href={`/donor/activities/${data.id}`}>
            <Eye className="w-5 h-5 text-blue-500 hover:text-blue-700" />
            </Link>
          </Button>
          <Button variant="ghost" onClick={() => handleEdit(data)} size="icon" title="Edit">
            <Pencil className="w-5 h-5 text-green-500 hover:text-yellow-700" />
          </Button>
          <Button variant="ghost" onClick={() => handleDelete(data.id)} size="icon" title="Delete">
            <Trash2 className="w-5 h-5 text-red-500 hover:text-red-700" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}

export default ActivityRows