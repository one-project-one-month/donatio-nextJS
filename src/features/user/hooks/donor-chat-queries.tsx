'use client'


import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getAllChatsService, startChatService } from "../services/donor-chat-services"
import { Chat, StartChatResponse } from "@/types/Chat"
import { useRouter } from "next/navigation"


export const useGetAllChats = () => {

    return useQuery<Chat[]>({
        queryKey: ['chats', 'donor'],
        queryFn: () => getAllChatsService({})
    })
}


export const useStartChat = () => {

    const router = useRouter();
    const queryClient = useQueryClient();


    const { mutate: startChat} = useMutation({
        mutationFn: (id: string) => startChatService(id),
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['chats'], exact: false})
            router.push(`/donor/chat/${data.chat_id}`);
        }
    });

    return { startChat }
}