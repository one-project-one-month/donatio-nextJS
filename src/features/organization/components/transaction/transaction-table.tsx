import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Transaction } from "@/types/Transaction";
import TransactionRows from "./transaction-rows";

type TransactionTableProps = {
  data: Transaction[] | undefined;
  isLoading?: boolean;
};

function TransactionTable({ data, isLoading }: TransactionTableProps) {
  return (
    <section className="overflow-x-auto max-w-full rounded-2xl border mt-8 relative">
      <Table>
        <TableHeader>
          <TableRow className="h-20 bg-dodger-blue-50 hover:bg-dodger-blue-50">
            <TableHead className="sticky min-w-[200px] text-base p-5 font-bold bg-dodger-blue-50 text-start left-0 z-10">
              Date
            </TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-start">
              Title
            </TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-center">
              Status
            </TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-start">
              Amount
            </TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-start">
              Receipt
            </TableHead>
            <TableHead className="sticky min-w-[200px] text-base font-bold text-center bg-dodger-blue-50 right-0 z-10">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data && data.length > 0
            ? data.map((transaction) => (
                <TransactionRows key={transaction.id} data={transaction} />
              ))
            : (
                <TableRow className="h-24">
                  <TableCell colSpan={6} className="text-center text-gray-500">
                    { isLoading ? "Loading transactions..." : "No transactions found." }
                  </TableCell>
                </TableRow>
              )}
        </TableBody>
      </Table>
    </section>
  );
}

export default TransactionTable;
