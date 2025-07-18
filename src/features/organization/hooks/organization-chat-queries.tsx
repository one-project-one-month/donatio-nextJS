'use client'


import { useQuery } from "@tanstack/react-query"
import { getAllChatsService } from "../services/organization-chat-services"
import { GetAllChatResponse } from "@/types/Chat"


export const useGetAllChats = () => {

    return useQuery<GetAllChatResponse>({
        queryKey: ['chats', 'organization'],
        queryFn: () => getAllChatsService({})
    })
}