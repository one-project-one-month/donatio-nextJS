"use client";

import PaginationUI from "@/components/common/pagination-ui";
import TransactionExpenseHeader from "@/features/organization/components/transaction/transaction-expense-header";
import TransactionTable from "@/features/organization/components/transaction/transaction-table";
import { useGetTransactionData } from "@/features/organization/hooks/organization-transaction-queries";
import usePagination from "@/hooks/use-pagination";

function page() {
  const { page, setPage } = usePagination();
  const { data, isLoading } = useGetTransactionData("disbursement", page, 5);

  return (
    <div>
      <TransactionExpenseHeader data={{totalExpense: data?.count}} />
      <TransactionTable data={data?.results} isLoading={isLoading} />
      {!isLoading && data !== undefined && (
        <div className="mt-3">
            <PaginationUI
          isNext={data.next ? true : false}
          isPrevious={data.previous ? true : false}
          totalCount={data.count}
          page={page}
          limit={5}
          setPage={setPage}
        />
        </div>
      )}
    </div>
  );
}

export default page;
