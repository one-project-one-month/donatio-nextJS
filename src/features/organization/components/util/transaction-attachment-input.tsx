import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { useState } from "react";
import { useGetTransactionData } from "../../hooks/organization-transaction-queries";
import TransactionAttachmentTable from "./transaction-attachment-table";
import { FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import usePagination from "@/hooks/use-pagination";
import PaginationUI from "@/components/common/pagination-ui";
import { TempSelectedTransaction } from "@/types/Transaction";


type TransactionAttachmentInputProps = {
  value: TempSelectedTransaction[];
  onChange: (value: TempSelectedTransaction[]) => void;
};

const TransactionAttachmentInput = ({
  value,
  onChange,
}: TransactionAttachmentInputProps) => {
  const [open, setOpen] = useState(false);
  const [tempSelected, setTempSelected] = useState<TempSelectedTransaction[]>(value);
  const { page, setPage } = usePagination("transaction_page");

  const { data: responseData, isLoading } = useGetTransactionData(
    "disbursement",
    page,
    5
  );

  const toggle = (val: TempSelectedTransaction) => {
  setTempSelected((prev) =>
    prev.some((item) => item.id === val.id)
      ? prev.filter((v) => v.id !== val.id)
      : [...prev, val]
  );
};


  const handleSave = () => {
    onChange(tempSelected);
    setOpen(false);
  };

  const handleClear = () => {
    onChange([]);
    setTempSelected([]);
  };

  return (
    <FormItem className="space-y-2">
      <FormLabel className="text-base md:text-lg font-medium">
        Expenses
      </FormLabel>

      <div className="flex flex-col gap-2 border rounded-md p-3 bg-background">
        <div className="flex flex-wrap gap-2 min-h-[40px] max-h-[120px] overflow-y-auto">
          {value.length === 0 ? (
            <span className="text-muted-foreground">No items selected</span>
          ) : (
            value.map((val) => (
              <Badge key={val.id} variant="secondary">
                {responseData?.results.find((o) => o.id === val.id)?.title || val.title}
              </Badge>
            ))
          )}
        </div>

        <div className="flex gap-2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button type="button" variant="outline" size="sm">
                + Add
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl sm:rounded-xl">
              <DialogHeader>
                <DialogTitle className="text-xl">
                  Select Transactions
                </DialogTitle>
              </DialogHeader>

              <div className="py-2 px-1">
                <TransactionAttachmentTable
                  selected={tempSelected}
                  toggle={toggle}
                  data={responseData?.results}
                  isLoading={isLoading}
                />
              </div>

              <div className="mt-3">
                <PaginationUI
                  isNext={responseData?.next ? true : false}
                  isPrevious={responseData?.previous ? true : false}
                  totalCount={responseData?.count?? 0}
                  page={page}
                  limit={5}
                  setPage={setPage}
                />
              </div>

              <DialogFooter className="mt-4">
                <Button
                  onClick={handleSave}
                  disabled={tempSelected.length === 0}
                >
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={handleClear}
          >
            Clear All
          </Button>
        </div>
      </div>
      <FormMessage className="text-xs" />
    </FormItem>
  );
};

export default TransactionAttachmentInput;
