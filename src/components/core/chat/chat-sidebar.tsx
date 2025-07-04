import React from 'react'
import ChatSearchBox from './chat-search-box'
import ChatList from './chat-list'

function ChatSidebar() {
  return (
    <div className='h-full border rounded-2xl'>
      <ChatSearchBox />
      <ChatList />
    </div>
  )
}

export default ChatSidebar