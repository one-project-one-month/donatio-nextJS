import API from "@/lib/api/axios"

export const getActivitiesService = async (pageParam: number = 1, pageSize: number = 10) => {
  try {
    const response = await API.get(`/activities?page=${pageParam}&page_size=${pageSize}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};


export const getActivitiesByIdService = async(id: string) => {
  try {
    const response = await API.get(`/activities/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
}

