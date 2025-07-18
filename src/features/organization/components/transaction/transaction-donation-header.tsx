import { Badge } from "@/components/ui/badge"
import TransactionExpenseSearchBox from "./transaction-expense-search-box"

type TransactionDonationHeaderProps = {
  data: {
    totalDonations?: number;
  }
};


function TransactionDonationHeader({data }: TransactionDonationHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h1 className="text-primary text-3xl font-semibold">Donations</h1>
        <Badge variant="outline" className="text-sm text-neutral-500">
          {data.totalDonations?? 0} Donations
        </Badge>
      </div>

      {/* Actions Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <TransactionExpenseSearchBox />
        </div>
      </div>
    </div>
  )
}

export default TransactionDonationHeader