'use client'

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import useChatStore from "@/store/chatStore";
import type { ChatList } from "@/types/Chat";
import { Image } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type ChatListProps = {
  data: ChatList[] | null;
  isDonor: boolean;
};

function ChatList({ data, isDonor }: ChatListProps) {

  const [ openIdx, setOpenIdx ] = useState<number | null>(null);
  const { setMessage } = useChatStore();


  const handleCurrentChat = async (idx: number, id: string) => {
    setOpenIdx(idx);
    setMessage([]);
  }



  return (
    <ScrollArea className="h-[33rem]">
      {data?.map((list, i) => {
        return (
          <Link
            href={`${isDonor ? "/donor" : "/organization"}/chat/${list.id}`}
            onClick={() => handleCurrentChat(i, list.id)}
            key={i}
            className={`flex justify-start items-center cursor-default border-b hover:bg-neutral-100 dark:hover:bg-neutral-900 border-black/5 p-2 relative ${
              i === openIdx && "bg-neutral-100 dark:bg-neutral-900"
            }`}
          >
            <div className="p-3">
              <Image className="text-gray-400" />
            </div>
            <div className="p-3">
              <h2 className="font-semibold">{list.name}</h2>
            </div>
          </Link>
        );
      })}
    </ScrollArea>
  );
}

export default ChatList;
