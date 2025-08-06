import API from "@/lib/api/axios";
import { getCurrentOrg } from "@/store/userStore";

const currentOrg = getCurrentOrg();

export const getOrganizationEvents = async () => {
  try {
    const response = await API.get(`/organizations/${currentOrg}/events/`);
    return response.data.count;
  } catch (error) {
    console.error("Failed to fetch organization events:", error);
    throw error;
  }
};

export const getOrganizationActivities = async () => {
  try {
    const response = await API.get(`/organizations/${currentOrg}/activities/`);
    return response.data.count;
  } catch (error) {
    console.error("Failed to fetch organization activities:", error);
    throw error;
  }
};
