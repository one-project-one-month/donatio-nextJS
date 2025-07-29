import API from "@/lib/api/axios";

export const getUserService = async () => {
  try {
    const response = await API.get("/auth/users/me/");
    return response.data;
  } catch (error) {
    throw error;
  }
};
