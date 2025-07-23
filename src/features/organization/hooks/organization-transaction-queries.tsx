import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createTransactionService,
  deleteTransactionService,
  getTransactionData,
  updateTransactionData,
} from "../services/organization-transaction-services";
import { TransactionResponse } from "@/types/Transaction";
import { showToast } from "@/lib/toast";

export const useGetTransactionData = (type?: string, page?: number, pageSize?: number, isUnLinked = false) => {
  return useQuery<TransactionResponse>({
    queryKey: ["transactions", type || "all", page],
    queryFn: () => getTransactionData(type, page, pageSize, isUnLinked),
  });
};

export const useUpadateTransactionData = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: upadateTransaction } = useMutation({
    mutationFn: ({ data, id }: { data: any; id: string }) => {
      return updateTransactionData(data, id);
    },
    onSuccess: () => {

      queryClient.invalidateQueries({ queryKey: ["transactions", "all"] });
      queryClient.invalidateQueries({ queryKey: ["transactions", "donation"] });
      queryClient.invalidateQueries({
        queryKey: ["transactions", "disbursement"],
      });
      showToast.success("Transaction data updated successfully.");
    },
    onError: (error) => {
      console.error("Error updating transaction data:", error);
      showToast.error("Failed to update transaction data. Please try again.");
    },
  });

  return { upadateTransaction };
};

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: createTransaction, isSuccess } = useMutation({
    mutationFn: ({ data, id }: { data: any; id: string }) => {
      return createTransactionService({ data, orgId: id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions", "all"] });
      queryClient.invalidateQueries({ queryKey: ["transactions", "donation"] });
      queryClient.invalidateQueries({
        queryKey: ["transactions", "disbursement"],
      });
      showToast.success("Transaction created successfully.");
    },
    onError: (error) => {
      console.error("Error creating transaction:", error);
      showToast.error("Failed to create transaction. Please try again.");
    },
  });

  return { createTransaction, isSuccess };
};

export const useDeleteTransaction = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTransaction } = useMutation({
    mutationFn: (id: string) => {
      return deleteTransactionService(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions", "all"] });
      queryClient.invalidateQueries({ queryKey: ["transactions", "donation"] });
      queryClient.invalidateQueries({
        queryKey: ["transactions", "disbursement"],
      });
      showToast.success("Transaction deleted successfully.");
    },
    onError: (error) => {
      console.error("Error creating transaction:", error);
      showToast.error(error.message);
    },
  });

  return { deleteTransaction };
};
