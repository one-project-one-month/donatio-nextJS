import API from "@/lib/api/axios"

export const getOrganizations =  async(page: number) => {
    try {
        const response = await API.get(`/organizations?page=${page}`);

        return response.data;

    } catch(err) {
        throw err;
    }
}


export const getOrganizationById = async(id: string) => {
    try {
        const response = await API.get(`/organizations/${id}`);

        return response.data;

    } catch (err) {
        throw err;
    }
}


export const getOrganizationEvents = async(id: string) => {
    try {
        const response = await API.get(`/organizations/${id}/events/`);

        return response.data;

    } catch (err) {
        throw err;
    }
}


export const getOrganizationActivities = async (pageParam: number = 1, pageSize: number = 10, id: string) => {
  try {
    const response = await API.get(`/organizations/${id}/activities?page=${pageParam}&page_size=${pageSize}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};