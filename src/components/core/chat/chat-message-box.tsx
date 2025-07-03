import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

function ChatMessageBox() {
  return (
    <ScrollArea className="h-[33rem] border-b">
      <div className="flex flex-col justify-end items-end h-full">
        <div>Top Section</div>
        <div>Expandable Middle</div>
        <div>Bottom Section</div>
      </div>
    </ScrollArea>
  );
}

export default ChatMessageBox;
