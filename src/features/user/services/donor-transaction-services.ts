import API from "@/lib/api/axios";
import { TransactionCreateProps } from "../../../types/Transaction";

export const createTransaction = async({ data, id}: TransactionCreateProps) => {
    try {
        const response = await API.post(`/organizations/${id}/transactions/`, data);
        return response.data;
    } catch (error) {
        console.error("Error creating transition:", error);
        throw error;
    }
}