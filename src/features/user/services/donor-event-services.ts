import API from "@/lib/api/axios"

export const getEvents = async (page: number, size: number) => {
    try {

        const response = await API.get(`/events?page=${page}&page_size=${size}`);

        return response.data;

    } catch (err) {
        throw err;
    }
}
