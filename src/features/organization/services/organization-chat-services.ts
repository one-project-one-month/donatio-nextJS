import API from "@/lib/api/axios"


type GetALLChatsProps = {
    page?: number;
    pageSize?: number;
}


export const getAllChatsService = async({ page, pageSize}: GetALLChatsProps) => {
    try {

        const response = await API.get(`/organizations/ce379294-7cd3-4b36-93ea-67c663f2cb28/chats/?page=${page??1}`);

        return response.data;

    } catch (error) {
        console.error('Error fetching chats', error);
        throw error;
    }
}


export const getChatHistory = async(id: string) => {
    try {
        const response = await API.get(`/chats/${id}/messages/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching chat history', error);
        throw error;
    }
}