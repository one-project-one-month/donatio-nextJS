import { useMutation, useQueryClient } from "@tanstack/react-query"
import { TransactionCreateProps } from "../../../types/Transaction"
import { createTransaction } from "../services/donor-transaction-services"
import { showToast } from "@/lib/toast";
import useDonateStore from "@/store/donateStore";

export const useCreateTransaction = () => {

    const { setDonateForm } = useDonateStore();
    const queryClient = useQueryClient();

    const { mutate: makeTransaction, isSuccess } = useMutation({
        mutationFn: ({ data, id}: TransactionCreateProps) => createTransaction({ data, id }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['transactions']});
            setDonateForm(null);
        },
        onError: () => {
            showToast.error("Failed to create transaction. Please try again.");
        }
    });

    return { makeTransaction, isSuccess};
}