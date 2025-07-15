import { useQuery } from "@tanstack/react-query";
import { getTransactionData } from "../services/organization-transaction-services";
import { TransactionResponse } from "@/types/Transaction";


export const useGetTransactionData = (type?: string) => {
  return useQuery<TransactionResponse>({
    queryKey: ["transactions", type],
    queryFn: () => getTransactionData(type),
  });
}