"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetUser } from "@/features/user/hooks/donor-user-queries";
import { getCurrentOrg, getUser } from "@/store/userStore";
import { MessageInput } from "@/types/Chat";
import { Send } from "lucide-react";
import React, { useState } from "react";

type ChatInputProps = {
  sendMessage: (data: MessageInput) => void;
  type: 'organization' | 'donor';
};

function ChatInput({ sendMessage, type }: ChatInputProps) {
  const [input, setInput] = useState("");


  const currentOrg = getCurrentOrg()?? "";
  const currentUser = getUser()?? "";


  const handleSendMessage = () => {


    if (input.trim()) {
      const data: MessageInput = {
        message: input,
        sender_id: type === 'donor' ? currentUser: currentOrg,
        sender_type: type,
      };

      sendMessage(data);
      setInput("");
    }
  };

  return (
    <div className="p-5 flex space-x-5 justify-center items-center">
      <Input
        className="rounded-full px-4 h-15 py-6 shadow-md bg-white border border-primary text-base focus:ring-2 focus:ring-dodger-blue-50"
        type="text"
        value={input}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
          e.preventDefault();
            handleSendMessage();
          }
        }}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter texts"
      />
      <Button onClick={handleSendMessage} className="rounded-full h-15 w-15">
        <Send />
      </Button>
    </div>
  );
}

export default ChatInput;
