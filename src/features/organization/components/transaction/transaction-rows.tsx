import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Check, Eye, Pencil, Trash2 } from "lucide-react";
import { Transaction } from "@/types/Transaction";
import { ISODateFormat } from "@/lib/dateFormat";
import TableImageHolder from "@/components/common/table-image-holder";
import { Badge } from "@/components/ui/badge";

type TransactionRowsProps = {
    data: Transaction;
}

function TransactionRows({ data }: TransactionRowsProps) {
  return (
    <TableRow className="h-24 hover:bg-white">
      <TableCell className="sticky min-w-[200px] text-start bg-white left-0 z-10 p-5">{ISODateFormat(data.created_at)}</TableCell>
      <TableCell className="min-w-[200px] text-start">{data.title}</TableCell>
      <TableCell className={`min-w-[200px] text-center`}>
        <Badge className="capitalize" variant={data.status === "pending" ? "secondary" : data.status === "approved" ? "default" : "destructive"}>
          {data.status}
        </Badge>
      </TableCell>
      <TableCell className="min-w-[200px] text-start">{data.amount} MMK</TableCell>
      
      <TableCell className="min-w-[200px] text-start">
        <TableImageHolder data={data.attachments} />
      </TableCell>
      <TableCell className="sticky min-w-[200px] text-center bg-white right-0 z-10">
        <div className="flex items-center justify-center gap-2">
          <Button variant="ghost" size="icon" title="View">
            <Eye className="w-5 h-5 text-blue-500 hover:text-blue-700" />
          </Button>
          { data.status === "pending" && (<Button variant="ghost" size="icon" title="Approve">
            <Check className="w-5 h-5 text-green-500 hover:text-green-700" />
          </Button>)}
        </div>
      </TableCell>
    </TableRow>
  )
}

export default TransactionRows