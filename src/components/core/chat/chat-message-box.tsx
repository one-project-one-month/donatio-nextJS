"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ISODateFormat, ISOTimeFormat } from "@/lib/dateFormat";
import { getMessages } from "@/store/chatStore";
import { ChatHistory } from "@/types/Chat";
import { Image } from "lucide-react";
import { useEffect, useRef } from "react";

type BoxProps = {
  text: string;
  time: string;
};

function RecieveBox({ text, time }: BoxProps) {
  return (
    <div className="w-full flex justify-start">
      <div className="space-x-3 w-1/2 grid grid-cols-6  my-3">
        <span className="w-6 h-6 p-1 md:w-11 md:h-11 rounded-full border flex justify-center items-center">
          <Image />
        </span>
        <div className="border border-primary p-3 col-span-5 w-fit max-w-full rounded-lg rounded-l-none rounded-b-lg">
          <div className="flex items-end gap-2 flex-wrap">
            <p className="text-primary text-sm md:text-base break-words">
              {text}
            </p>
            <span className="text-xs text-gray-500 whitespace-nowrap">
              {time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SenderBox({ text, time }: BoxProps) {
  return (
    <div className="w-full flex justify-end">
      <div className="space-x-3 w-1/2 flex justify-end col-start-2 my-3">
        <div className="border bg-primary border-primary p-3 w-fit max-w-full rounded-lg rounded-r-none rounded-b-lg">
          <div className="flex items-end gap-2 flex-wrap">
            <p className="text-white text-sm md:text-base break-words">
              {text}
            </p>
            <span className="text-xs text-white/80 whitespace-nowrap">
              {time}
            </span>
          </div>
        </div>
        <span className="w-6 h-6 p-1 md:w-11 md:h-11 rounded-full border flex justify-center items-center">
          <Image />
        </span>
      </div>
    </div>
  );
}

function DateDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center my-4">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 text-gray-500 text-sm">{label}</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
}

type ChatMessageBoxProps = {
  type: "organization" | "donor";
  history: ChatHistory[] | null;
};

function ChatMessageBox({ type, history }: ChatMessageBoxProps) {
  const messages = getMessages();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const historyDates = Array.from(
    new Set((history ?? []).map((hs) => ISODateFormat(hs.timestamp)))
  ).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  //getting the unique array of history datas

  const isLastHistoryToday: boolean =
    ISODateFormat(new Date()) !== Array.from(historyDates).pop(); // check the last date is today or not to avoid overlap

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, history]);

  return (
    <ScrollArea className="h-[33rem]">
      <div className="md:px-8 px-4 py-5 flex flex-col justify-end">
        {/* UI for message history */}
        {historyDates &&
          Array.from(historyDates).map((dte) => {
            return (
              <div key={dte}>
                <DateDivider label={dte} />
                <div className="flex flex-col w-full">
                  {history
                    ?.filter((h) => ISODateFormat(h.timestamp) === dte)
                    .map((msg, i) => {
                      return (
                        <div key={i}>
                          {msg.sender === type ? (
                            <SenderBox
                              text={msg.content}
                              time={ISOTimeFormat(msg.timestamp)}
                            />
                          ) : (
                            <RecieveBox
                              text={msg.content}
                              time={ISOTimeFormat(msg.timestamp)}
                            />
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        <div>
          {messages.length > 0 && isLastHistoryToday && (
            <DateDivider label={ISODateFormat(new Date())} />
          )}
          <div className="flex flex-col w-full">
            {/* UI for current messages  */}
            {messages.map((msg, i) => {
              return (
                <div key={i}>
                  {msg.sender_type === type ? (
                    <SenderBox
                      text={msg.message}
                      time={ISOTimeFormat(msg.timestamp)}
                    />
                  ) : (
                    <RecieveBox
                      text={msg.message}
                      time={ISOTimeFormat(msg.timestamp)}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div ref={bottomRef} />
      </div>
    </ScrollArea>
  );
}

export default ChatMessageBox;
