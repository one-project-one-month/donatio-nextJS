import API from "@/lib/api/axios";

export const getEvents = async (
  page: number,
  size: number,
  search?: string
) => {
  try {
    let url = `/events?page=${page}&page_size=${size}`;
    if (search) {
      url += `&search=${search}`;
    }
    const response = await API.get(url);
    return response.data;
  } catch (err) {
    throw err;
  }
};
