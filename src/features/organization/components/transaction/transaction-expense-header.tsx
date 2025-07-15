import { Badge } from "@/components/ui/badge"
import TransactionDonationSearchBox from "./transaction-donation-search-box"


function TransactionExpenseHeader() {
  return (
    <div className="space-y-6">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h1 className="text-primary text-3xl font-semibold">Expenses</h1>
        <Badge variant="outline" className="text-sm text-neutral-500">
          13 Donations
        </Badge>
      </div>

      {/* Actions Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <TransactionDonationSearchBox />
        </div>
      </div>
    </div>
  )
}

export default TransactionExpenseHeader