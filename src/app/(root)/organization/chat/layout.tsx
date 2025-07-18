'use client'

import ChatSidebar from "@/components/core/chat/chat-sidebar";
import { useGetAllChats } from "@/features/organization/hooks/organization-chat-queries";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  const { data, isLoading } = useGetAllChats();


  return (
    <div className="grid grid-cols-3 w-full px-5 h-dvh max-h-[50rem] py-14 space-x-8">
      <div className="col-span-1 hidden md:block">
        <ChatSidebar data={data?.results?? null} isLoading={isLoading} isDonor={false} />
      </div>
      <div className="md:col-span-2 col-span-3">{children}</div>
    </div>
  );
}

export default layout;
