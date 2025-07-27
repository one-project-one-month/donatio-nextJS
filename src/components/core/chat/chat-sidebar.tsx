import React from "react";
import ChatSearchBox from "./chat-search-box";
import ChatList from "./chat-list";
import { Chat } from "@/types/Chat";

type ChatSidebarProps = {
  data: Chat[] | null;
  isLoading: boolean;
  isDonor: boolean;
};

function ChatSidebar({ data, isLoading, isDonor }: ChatSidebarProps) {
  const chatList = data?.map((c) => {
    return {
      id: c.id,
      name: isDonor ? c.organization.name ?? "": c.donor.username ?? "",
      logo: isDonor ? c.organization.attachments[0].file ?? "": c.donor.profile.profile_picture ?? "",
      lastMsg: "",
    };
  });

  return (
    <div className="h-full border rounded-2xl">
      <ChatSearchBox />
      {isLoading ? (
        <div>loading....</div>
      ) : (
        <ChatList data={chatList ?? null} isDonor={isDonor} />
      )}
    </div>
  );
}

export default ChatSidebar;
