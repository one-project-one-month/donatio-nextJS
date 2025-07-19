'use client'

import ChatWindow from '@/components/core/chat/chat-window'
import useChatSocket from '@/hooks/use-chat-socket'
import { useParams } from 'next/navigation'
import React from 'react'

function ChatPage() {


  const { chat_id } = useParams();
  const id = chat_id as string;

  useChatSocket(id);




  return (
    <div className='h-full w-full'>
        <ChatWindow type='organization' />
    </div>
  )
}

export default ChatPage