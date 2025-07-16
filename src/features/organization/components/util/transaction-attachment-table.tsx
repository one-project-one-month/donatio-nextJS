import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ISODateFormat } from "@/lib/dateFormat";
import { Transaction } from "@/types/Transaction";

type TransactionAttachmentTableProps = {
  data: Transaction[] | undefined;
  isLoading?: boolean;
  toggle: (val: string) => void;
  selected: string[];
};

function TransactionAttachmentTable({
  data,
  isLoading,
  selected,
  toggle,
}: TransactionAttachmentTableProps) {
  return (
    <div className="overflow-x-auto max-w-full rounded-2xl border mt-8 relative">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell className="sticky left-0 bg-white">Date</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell className="sticky right-0 bg-white">Action</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow></TableRow>
          ) : (
            data?.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="sticky left-0 bg-white">
                  {ISODateFormat(transaction.updated_at)}
                </TableCell>
                <TableCell>{transaction.title}</TableCell>
                <TableCell>{transaction.amount} MMK</TableCell>
                <TableCell className="sticky right-0 bg-white flex justify-center">
                  <Checkbox checked={selected.includes(transaction.id)} onCheckedChange={() => toggle(transaction.id)} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default TransactionAttachmentTable;
