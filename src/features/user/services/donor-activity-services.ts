import API from "@/lib/api/axios";

export const getActivitiesService = async (
  pageParam: number = 1,
  pageSize: number = 10,
  search?: string
) => {
  try {
    let url = `/activities?page=${pageParam}&page_size=${pageSize}`;
    if (search) {
      url += `&search=${search}`;
    }

    const response = await API.get(url);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getActivitiesByIdService = async (id: string) => {
  try {
    const response = await API.get(`/activities/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
