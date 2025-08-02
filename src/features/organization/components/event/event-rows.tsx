import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash2 } from "lucide-react";
import TableImageHolder from "@/components/common/table-image-holder";
import { Event } from "@/types/Event";
import { ISODateFormat } from "@/lib/dateFormat";
type EventRowsProps = {
  data: Event;
  handleEdit: (data: Event) => void;
  handleDelete: (id: string) => void;
  handleView: (data: Event) => void;
};

function EventRows({ data, handleEdit, handleDelete, handleView }: EventRowsProps) {
  return (
    <TableRow className="h-24 hover:bg-white dark:bg-neutral-950 ">
      <TableCell className="sticky min-w-[200px] text-start dark:bg-neutral-950 dark:hover:bg-neutral-900 bg-white left-0 z-10 p-5">{data.title}</TableCell>
      <TableCell className="min-w-[200px] text-center">{ISODateFormat(data.start_date)}</TableCell>
      <TableCell className="min-w-[200px] text-center">{ISODateFormat(data.end_date)}</TableCell>
      <TableCell className="min-w-[200px] text-center">{data.target_amount} MMK</TableCell>
      <TableCell className="min-w-[200px] text-start">
        <div>
          <TableImageHolder data={data.attachments} />
        </div>
      </TableCell>
      <TableCell className="sticky min-w-[200px] text-center dark:bg-neutral-950 dark:hover:bg-neutral-900 bg-white right-0 z-10">
        <div className="flex items-center justify-center gap-2">
          <Button variant="ghost" size="icon" title="View" onClick={() => handleView(data)}>
            <Eye className="w-5 h-5 text-blue-500 hover:text-blue-700" />
          </Button>
          <Button variant="ghost" size="icon" title="Edit" onClick={() => handleEdit(data)}>
            <Pencil className="w-5 h-5 text-green-500 hover:text-yellow-700" />
          </Button>
          {/* <Button variant="ghost" size="icon" title="Delete" onClick={() => handleDelete(data.id)}>
            <Trash2 className="w-5 h-5 text-red-500 hover:text-red-700" />
          </Button> */}
        </div>
      </TableCell>
    </TableRow>
  );
}

export default EventRows;