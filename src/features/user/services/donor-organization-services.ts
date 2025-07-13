import API from "@/lib/api/axios"

export const getOrganizations =  async(page: number) => {
    try {
        const response = await API.get(`/organizations?page=${page}`);

        return response.data;

    } catch(err) {
        throw err
    }
}