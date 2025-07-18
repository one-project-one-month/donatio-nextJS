import API from "@/lib/api/axios"


type GetALLChatsProps = {
    page?: number;
    pageSize?: number;
}


export const getAllChatsService = async({ page, pageSize}: GetALLChatsProps) => {
    try {

        const response = await API.get(`/chats/?page=${page??1}`);

        return response.data;

    } catch (error) {
        console.error('Error fetching chats', error);
        throw error;
    }
}