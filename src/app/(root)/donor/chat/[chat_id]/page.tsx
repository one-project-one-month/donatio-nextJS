'use client'

import ChatWindow from '@/components/core/chat/chat-window'
import { useGetChatHistory } from '@/features/organization/hooks/organization-chat-queries';
import { useGetUser } from '@/features/user/hooks/donor-user-queries';
import { useChatSocket } from '@/hooks/use-chat-socket';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

function ChatPage() {

    const { chat_id } = useParams();
    const id = chat_id as string;


    const { data: user } = useGetUser();

  
    const { send } = useChatSocket(id);
    const { data: history, isLoading } = useGetChatHistory(id);

  return (
    <div className='h-full w-full'>
        <ChatWindow type='donor' sendMessage={send} history={history??null} navData={{name: user?.username??"", logo: ""}} />
    </div>
  )
}

export default ChatPage