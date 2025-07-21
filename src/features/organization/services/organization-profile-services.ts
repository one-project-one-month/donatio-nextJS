import API from "@/lib/api/axios";
import { OrganizationProfile } from "@/types/Organization";

const MOCK_ID = "9b13b258-160e-4085-add0-310d0eafb4ff";

export const getOrganizationProfile = async () => {
  try {
    const response = await API.get(`/organizations/${MOCK_ID}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch organization profile:", error);
    throw error;
  }
};
