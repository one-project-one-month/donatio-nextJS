import API from "@/lib/api/axios";


type CreateServiceProps = {
    data: FormData;
}

type GetServiceProps = {
    page: number;
    page_size: number;
}

type UpdateServiceProps = {
    id: string;
    data: any;
}

type DeleteServiceProps = {
    id: string;
}



export const createOrganizationActivityService = async({ data }: CreateServiceProps) => {
    try {
        const response = await API.post("/organizations/ce379294-7cd3-4b36-93ea-67c663f2cb28/activities/", data);
        return response.data;
    } catch (error) {
        console.error("Error create activity data:", error);
        throw error;
    }
}


export const getOrganizationActivityService = async ({ page, page_size}: GetServiceProps) => {
    try {
        const response = await API.get(`/organizations/ce379294-7cd3-4b36-93ea-67c663f2cb28/activities/?page=${page??1}&page_size=${page_size}`);
        return response.data;

    } catch(error) {
        console.error("Error get activities data", error)
        throw error;
    }
}

export const updateOrganizationActivityService = async ({ id, data}: UpdateServiceProps) => {
    try {
        const response = await API.patch(`/organizations/ce379294-7cd3-4b36-93ea-67c663f2cb28/activities/${id}/`, data);
        return response.data;

    } catch(error) {
        console.error("Error update activities data", error)
        throw error;
    }
}

export const deleteOrganizationActivityService = async({ id }: DeleteServiceProps) => {
    try {
        const response = await API.delete(`/organizations/ce379294-7cd3-4b36-93ea-67c663f2cb28/activities/${id}/`);
        return response.data;

    } catch(error) {
        console.error("Error delete activiies data", error)
        throw error;
    }
}