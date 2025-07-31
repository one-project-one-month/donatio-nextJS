import API from "@/lib/api/axios";

export const getOrganizations = async (
  page: number,
  pageSize?: number,
  search?: string
) => {
  try {
    let url = `/organizations?page=${page}&page_size=${pageSize}`;
    if (search) {
      url += `&search=${search}`;
    }
    const response = await API.get(url);

    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getOrganizationById = async (id: string) => {
  try {
    const response = await API.get(`/organizations/${id}`);

    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getOrganizationEvents = async (id: string) => {
  try {
    const response = await API.get(`/organizations/${id}/events/`);

    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getOrganizationActivities = async (
  pageParam: number = 1,
  pageSize: number = 10,
  id: string
) => {
  try {
    const response = await API.get(
      `/organizations/${id}/activities?page=${pageParam}&page_size=${pageSize}`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const requestOrganizationAdmin = async (formData: FormData) => {
  try {
    const response = await API.post("/organization-requests/", formData);

    return response.data;
  } catch (err) {
    throw err;
  }
};
