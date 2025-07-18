'use client'


import { useQuery } from "@tanstack/react-query"
import { getAllChatsService } from "../services/donor-chat-services"
import { Chat } from "@/types/Chat"


export const useGetAllChats = () => {

    return useQuery<Chat[]>({
        queryKey: ['chats', 'donor'],
        queryFn: () => getAllChatsService({})
    })
}