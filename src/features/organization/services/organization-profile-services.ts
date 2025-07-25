import API from "@/lib/api/axios";

export const getOrganizationProfile = async (id: string) => {
  try {
    const response = await API.get(`/organizations/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch organization profile:", error);
    throw error;
  }
};

export const updateOrganizationProfile = async ({
  id,
  data,
}: {
  id: string;
  data: FormData;
}) => {
  try {
    const response = await API.patch(`/organizations/${id}/`, data);

    return response.data;
  } catch (error) {
    console.error("Failed to update organization profile:", error);
    throw error;
  }
};
