import API from "@/lib/api/axios";

const MOCK_ID = "9b13b258-160e-4085-add0-310d0eafb4ff";

export const getOrganizationEvents = async () => {
  try {
    const response = await API.get(`/organizations/${MOCK_ID}/events/`);
    return response.data.count;
  } catch (error) {
    console.error("Failed to fetch organization events:", error);
    throw error;
  }
};

export const getOrganizationActivities = async () => {
  try {
    const response = await API.get(`/organizations/${MOCK_ID}/activities/`);
    return response.data.count;
  } catch (error) {
    console.error("Failed to fetch organization activities:", error);
    throw error;
  }
};
