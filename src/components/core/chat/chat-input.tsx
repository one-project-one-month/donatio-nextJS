import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import React from 'react'

function ChatInput() {
  return (
    <div className='p-5 flex space-x-5 justify-center items-center'>
      <Input
        className="rounded-full px-4 h-15 py-6 shadow-md bg-white border border-primary text-base focus:ring-2 focus:ring-dodger-blue-50"
        type="text"
        placeholder="Enter texts"
      />
      <Button className='rounded-full h-15 w-15'>
        <Send />
      </Button>
    </div>
  )
}

export default ChatInput