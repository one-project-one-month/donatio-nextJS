import API from "@/lib/api/axios";

export const getTransactionData = async (type?: string, page?: number, pageSize?: number) => {
  try {
    const response = await API.get(
      `/organizations/ce379294-7cd3-4b36-93ea-67c663f2cb28/transactions/?type=${type}&page=${page??1}&page_size=${pageSize}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transaction data:", error);
    throw error;
  }
};

export const createTransactionService = async ({
  data,
  orgId,
}: {
  data: any;
  orgId: string;
}) => {
  try {
    const response = await API.post(
      `/organizations/ce379294-7cd3-4b36-93ea-67c663f2cb28/transactions/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error creating transaction:", error);
    throw error;
  }
};

export const updateTransactionData = async (data: any, id: string) => {
  try {
    const response = await API.put(
      `/organizations/ce379294-7cd3-4b36-93ea-67c663f2cb28/transactions/${id}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error updating transaction data:", error);
    throw error;
  }
};

export const deleteTransactionService = async (id: string) => {
  try {
    const response = await API.delete(
      `/organizations/ce379294-7cd3-4b36-93ea-67c663f2cb28/transactions/${id}/`
    );
    return response.data;
  } catch (error) {
    console.error("Error delete transaction data:", error);
    throw error;
  }
};
