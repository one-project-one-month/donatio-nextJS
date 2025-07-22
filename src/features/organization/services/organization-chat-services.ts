import API from "@/lib/api/axios"
import { getCurrentOrg } from "@/store/userStore";


const currentOrg = getCurrentOrg();

type GetALLChatsProps = {
    page?: number;
    pageSize?: number;
}


export const getAllChatsService = async({ page, pageSize}: GetALLChatsProps) => {
    try {

        const response = await API.get(`/organizations/${currentOrg}/chats/?page=${page??1}`);

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