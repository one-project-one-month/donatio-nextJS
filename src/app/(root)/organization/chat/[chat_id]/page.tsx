"use client";

import ChatWindow from "@/components/core/chat/chat-window";
import { useGetChatHistory } from "@/features/organization/hooks/organization-chat-queries";
import { useGetOrganizationById } from "@/features/user/hooks/donor-organization-queries";
import { useChatSocket } from "@/hooks/use-chat-socket";
import useChatStore from "@/store/chatStore";
import { getCurrentOrg } from "@/store/userStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";

function ChatPage() {
  const { chat_id } = useParams();
  const id = chat_id as string;

  const currentOrg = getCurrentOrg();

  const { data: org } = useGetOrganizationById(currentOrg ?? "");
  const { setMessage } = useChatStore();

  const { send } = useChatSocket(id);
  const { data: history, isSuccess } = useGetChatHistory(id);

  useEffect(() => {
    if (isSuccess) {
      setMessage([]);
    }
  }, [history]);

  return (
    <div className="h-full w-full">
      <ChatWindow
        sendMessage={send}
        type="organization"
        history={history ?? null}
        navData={{
          name: org?.name ?? "",
          logo: org?.attachments[0]?.file ?? "",
        }}
      />
    </div>
  );
}

export default ChatPage;
