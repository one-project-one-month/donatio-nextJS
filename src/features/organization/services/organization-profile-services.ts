import API from "@/lib/api/axios";
import { OrganizationProfile } from "@/types/Organization";

const MOCK_ID = "51dedd1d-96d6-4d34-8362-10dbb85058ac";

export const getOrganizationProfile = async () => {
  try {
    const response = await API.get(`/organizations/${MOCK_ID}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch organization profile:", error);
    throw error;
  }
};

export const updateOrganizationProfile = async (
  data: any // Using any because the input is from a form, not a pure OrganizationProfile
) => {
  try {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "profile_image" || key === "banner") {
        if (Array.isArray(value) && value[0] instanceof File) {
          formData.append("attachments", value[0]); // Use 'attachments' as the key
        }
      } else if (Array.isArray(value) && value[0] instanceof File) {
        formData.append(key, value[0]);
      } else if (value !== null && value !== undefined) {
        formData.append(key, String(value));
      }
    });
    const response = await API.patch(`/organizations/${MOCK_ID}/`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to update organization profile:", error);
    throw error;
  }
};
