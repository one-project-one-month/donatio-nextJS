import { getRandomImg } from "@/lib/common";
import { Image, UserCircle2 } from "lucide-react";
import React from "react";

type ChatNavProps = {
  data: { name: string; logo: string };
};

function ChatNav({ data }: ChatNavProps) {
  return (
    <div className="flex justify-between items-center cursor-default border-b border-black/5 p-5">
      <div className="flex justify-start space-x-2">
        {data.logo.length !== 0 ? (
          <img
            src={`http://localhost:8000${data.logo}`}
            alt={data.name}
            className="w-8 h-8 object-cover"
          />
        ) : (
          <img
            src={
              getRandomImg("event") ??
              "https://i.pinimg.com/736x/dd/cb/36/ddcb361a6f93e2518268638305e528ba.jpg"
            }
            alt={data.name}
            className="w-8 h-8 object-cover"
          />
        )}
        <h2 className="font-semibold text-primary">{data.name}</h2>
      </div>
      <UserCircle2 size={20} className="text-neutral-600" />
    </div>
  );
}

export default ChatNav;
