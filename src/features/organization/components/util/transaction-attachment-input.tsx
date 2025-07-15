import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { useState } from 'react';
import { useGetTransactionData } from '../../hooks/organization-transaction-queries';
import { Label } from '@/components/ui/label';
import TransactionTable from '../transaction/transaction-table';

type TransactionAttachmentInputProps = {
  value: string[];
  onChange: (value: string[]) => void;
};

const TransactionAttachmentInput = ({ value, onChange }: TransactionAttachmentInputProps) => {
  const [open, setOpen] = useState(false);
  const [tempSelected, setTempSelected] = useState<string[]>(value);


  const { data: responseData , isLoading} = useGetTransactionData("donation");

  const toggle = (val: string) => {
    setTempSelected((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };

  const handleSave = () => {
    onChange(tempSelected);
    setOpen(false);
  };

  return (
    <div className="space-y-2">
      <Label className='md:text-lg font-semibold mb-3'>Expenses</Label>
      <div className="min-h-[40px] flex flex-wrap gap-2 p-2 border rounded-md">
        {value.length === 0 && <span className="text-muted-foreground">No items selected</span>}
        {value.map((val) => (
          <Badge key={val} variant="secondary">
            {responseData?.results.find((o) => o.id === val)?.title}
          </Badge>
        ))}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button type="button" variant="outline" size="sm">
              + Add
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-6xl">
            <DialogHeader>
              <DialogTitle>Select Transactions</DialogTitle>
            </DialogHeader>

            <TransactionTable data={responseData?.results} isLoading={isLoading} />

            <DialogFooter>
              <Button onClick={handleSave}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default TransactionAttachmentInput;
