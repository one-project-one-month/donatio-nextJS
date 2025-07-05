import ChatSidebar from "@/components/core/chat/chat-sidebar"
import { ReactNode } from "react"


function layout({children}: {children: ReactNode}) {
  return (
    <div className="grid grid-cols-3 w-full px-5 h-dvh max-h-[50rem] py-14 space-x-8">
      <div className="col-span-1 hidden md:block">
        <ChatSidebar />
      </div>
      <div className="md:col-span-2 col-span-3">
        {children}
      </div>
    </div>
  )
}

export default layout