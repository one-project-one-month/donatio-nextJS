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
            className={`flex justify-start items-center cursor-default border-b hover:bg-gray-100 border-black/5 p-2 relative ${
              i === openIdx && "bg-gray-100"
            }`}
          >
            <div className="p-3">
              <Image className="text-gray-400" />
            </div>
            <div className="p-3">
              <h2 className="font-semibold">{list.name}</h2>
              <p className="text-sm text-neutral-600">Last message field</p>
            </div>
            <Badge className="absolute h-5 w-5 right-2 top-2 rounded-full">
              1
            </Badge>
          </Link>
        );
      })}
    </ScrollArea>
  );
}

export default ChatList;
