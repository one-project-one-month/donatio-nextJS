'use client'


import { useQuery } from "@tanstack/react-query"
import { getAllChatsService, getChatHistory } from "../services/organization-chat-services"
import { ChatHistory, GetAllChatResponse } from "@/types/Chat"
import useChatStore from "@/store/chatStore"


export const useGetAllChats = () => {

    return useQuery<GetAllChatResponse>({
        queryKey: ['chats', 'organization'],
        queryFn: () => getAllChatsService({})
    })
}


export const useGetChatHistory = (id: string | null) => {

    return useQuery<ChatHistory[]>({
        queryKey: ['chats', 'history', id],
        queryFn: () => getChatHistory(id??""),
        enabled: !!id,
    })
}