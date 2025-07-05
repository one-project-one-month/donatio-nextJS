import { Image, UserCircle2 } from 'lucide-react'
import React from 'react'

function ChatNav() {
  return (
    <div className="flex justify-between items-center cursor-default border-b border-black/5 p-5">
            <div className="flex justify-start space-x-2">
              <Image className="text-gray-400" />
              <h2 className="font-semibold text-primary">Org Name</h2>
            </div>
            <UserCircle2 size={20} className='text-neutral-600' />
          </div>
  )
}

export default ChatNav