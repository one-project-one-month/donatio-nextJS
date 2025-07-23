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
import {
  useDeleteTransaction,
  useUpadateTransactionData,
} from "../../hooks/organization-transaction-queries";
import { useCallback, useState } from "react";
import { Dialog, DialogHeader, DialogContent, DialogTitle } from "@/components/ui/dialog";
import TransactionExpenseEditForm from "./transaction-expense-edit-form";

type TransactionTableProps = {
  data: Transaction[] | undefined;
  isLoading?: boolean;
};

function TransactionTable({ data, isLoading }: TransactionTableProps) {

  
  const [ selectedData, setSelectedData ] = useState<Transaction>();
  const [ isOpenEdit, setIsOpenEdit ] = useState<boolean>(false);
  const [isView, setIsView] = useState<boolean>(false);

  const { deleteTransaction } = useDeleteTransaction();
  const { upadateTransaction } = useUpadateTransactionData();

  //delete the transaction
  const handleDelete = useCallback((id: string) => {
    deleteTransaction(id);
  }, []);


  //handling approve for transactions
  const handleApprove = useCallback(async (id: string) => {

    const formData = new FormData();
    formData.append('status', 'approved');

    await upadateTransaction({ data: formData, id});
  }, []);

  //handle select initial data to edit
  const handleSelectTransaction = useCallback((data: Transaction) => {

    setIsView(false);
    setSelectedData(data);
    setIsOpenEdit(true);

  },[]);


  const handleView = useCallback((data: Transaction) => {

    handleSelectTransaction(data);
    setIsView(true);

  },[]);

  return (
    <section className="overflow-x-auto max-w-full rounded-2xl border mt-8 relative">
      <Table>
        <TableHeader>
          <TableRow className="h-20 bg-dodger-blue-50 dark:bg-neutral-950 hover:bg-dodger-blue-50">
            <TableHead className="sticky min-w-[200px] text-base p-5 font-bold dark:bg-neutral-950 bg-dodger-blue-50 text-start left-0 z-10">
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
            <TableHead className="sticky min-w-[200px] text-base font-bold text-center dark:bg-neutral-950 bg-dodger-blue-50 right-0 z-10">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data && data.length > 0 ? (
            data.map((transaction) => (
              <TransactionRows
                key={transaction.id}
                data={transaction}
                handleDelete={handleDelete}
                handleApprove={handleApprove}
                handleEdit={handleSelectTransaction}
                handleView={handleView}
              />
            ))
          ) : (
            <TableRow className="h-24">
              <TableCell colSpan={6} className="text-center text-gray-500">
                {isLoading
                  ? "Loading transactions..."
                  : "No transactions found."}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Dialog open={isOpenEdit} onOpenChange={setIsOpenEdit}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-primary text-2xl font-semibold">Edit Expenses</DialogTitle>
              </DialogHeader>
              <TransactionExpenseEditForm initialData={selectedData?? null} setOpenEdit={setIsOpenEdit} isView={isView} />
            </DialogContent>
        </Dialog>
    </section>
  );
}

export default TransactionTable;
