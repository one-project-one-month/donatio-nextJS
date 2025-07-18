import { Badge } from "@/components/ui/badge"
import TransactionDonationSearchBox from "./transaction-donation-search-box"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FilePlus2 } from "lucide-react"
import TransactionExpenseCreateForm from "./transaction-expense-create-form"
import { useState } from "react"

type TransactionExpensenHeaderProps = {
  data: {
    totalExpense?: number;
  }
};

function TransactionExpenseHeader({ data }: TransactionExpensenHeaderProps) {

  const [ isOpen, setIsOpen ] = useState<boolean>(false);


  return (
    <div className="space-y-6">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h1 className="text-primary text-3xl font-semibold">Expenses</h1>
        <Badge variant="outline" className="text-sm text-neutral-500">
           {data.totalExpense} Expenses
        </Badge>
      </div>

      {/* Actions Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <TransactionDonationSearchBox />
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2 w-[220px] py-7 rounded-full"> 
                <FilePlus2 className="w-5 h-5 text-white" />
                Add Expenses
            </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-primary text-2xl font-semibold">Create Expenses</DialogTitle>
              </DialogHeader>
              <TransactionExpenseCreateForm setIsOpen={setIsOpen} />
            </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default TransactionExpenseHeader