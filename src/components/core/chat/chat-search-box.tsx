import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function ChatSearchBox() {
  return (
    <div className='w-full p-5'>
        <div className="relative w-full">
        <Input
        className="rounded-full pl-12 pr-4 py-6 shadow-md bg-white border border-primary text-base focus:ring-2 focus:ring-dodger-blue-50"
        type="text"
        placeholder="Search for chats"
      />
      <Search
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500"
        size={20}
      />
      </div>
    </div>
  )
}

export default ChatSearchBox