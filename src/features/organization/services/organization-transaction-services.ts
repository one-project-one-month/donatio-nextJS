import API from "@/lib/api/axios";

export const getTransactionData = async (type?: string) => {

    try {
        const response = await API.get(`/organizations/ce379294-7cd3-4b36-93ea-67c663f2cb28/transactions/?type=${type}`);
        return response.data;

    } catch (error) {
        console.error("Error fetching transaction data:", error);
        throw error;
    }

}