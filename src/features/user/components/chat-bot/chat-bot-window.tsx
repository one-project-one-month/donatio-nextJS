import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getRandomImg, scrollToBottom } from "@/lib/common";
import { ISODateFormat, ISOTimeFormat } from "@/lib/dateFormat";
import { Bot, Image, Mail, Send, UserCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type BoxProps = {
  text: string;
  time: string;
};

function RecieveBox({ text, time }: BoxProps) {
  return (
    <div className="w-full flex justify-start">
      <div className="space-x-3 w-1/2 grid grid-cols-6  my-3">
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

type ChatBotMessage = {
  type: "bot" | "user";
  message: string;
  time: Date;
};


function ChatInput({ sendMessage }: { sendMessage: (msg: string) => void }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    const trimmed = input.trim();
    if (trimmed.length > 0) {
      sendMessage(trimmed);
      setInput("");
    }
  };

  return (
    <div className="p-5 flex space-x-5 justify-center items-center">
      <Input
        className="rounded-full px-5 h-12 py-6 shadow-md bg-white border border-primary text-base focus:ring-2 focus:ring-dodger-blue-50"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
          }
        }}
        placeholder="Enter texts"
      />
      <Button onClick={handleSend} className="rounded-full h-12 w-12">
        <Send />
      </Button>
    </div>
  );
}

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

const data: ChatBotMessage[] = [
    {type: 'bot', message: 'hello', time: new Date()},
    {type: 'bot', message: 'hello', time: new Date()},
    {type: 'bot', message: 'hello', time: new Date()},
    {type: 'bot', message: 'hello', time: new Date()},
    {type: 'bot', message: 'hello', time: new Date()},
    {type: 'bot', message: 'hello', time: new Date()},
    {type: 'bot', message: 'hello', time: new Date()},
    {type: 'bot', message: 'hello', time: new Date()},
]

function ChatBotWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatBotMessage[]>([]);
  const scrollContentRef = useRef(null);

  const sendMessage = (msg: string) => {
    const userMsg: ChatBotMessage = {
      type: "user",
      message: msg,
      time: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);

    // ✅ Replace this with your actual API call later
    setTimeout(() => {
      const botReply: ChatBotMessage = {
        type: "bot",
        message: "I'm a bot. You said: " + msg,
        time: new Date(),
      };
      setMessages((prev) => [...prev, botReply]);
    }, 600);
  };


  useEffect(() => {
      scrollToBottom(scrollContentRef.current, true)
    }, [messages, history]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-[90vw] sm:w-[24rem] bg-white shadow-xl rounded-lg border overflow-hidden flex flex-col"
          >
            <ChatNav data={{ name: "Donatio Bot", logo: "" }} />
            <ScrollArea className="h-[20rem]">
              <div ref={scrollContentRef} className="px-4 py-5 flex flex-col justify-end">
                {messages.length > 0 && (
                  <DateDivider label={ISODateFormat(new Date())} />
                )}
                <div className="flex flex-col w-full">
                  {messages.map((msg, i) =>
                    msg.type === "user" ? (
                      <SenderBox
                        key={i}
                        text={msg.message}
                        time={ISOTimeFormat(msg.time)}
                      />
                    ) : (
                      <RecieveBox
                        key={i}
                        text={msg.message}
                        time={ISOTimeFormat(msg.time)}
                      />
                    )
                  )}
                </div>
              </div>
            </ScrollArea>
            <ChatInput sendMessage={sendMessage} />
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          key="chat-button"
          onClick={() => setIsOpen(true)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="bg-primary fixed bottom-6 right-6 text-white w-14 h-14 rounded-full shadow-md flex items-center justify-center"
        >
          <Bot />
        </motion.button>
      )}

      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-sm text-neutral-500 hover:text-red-400"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default ChatBotWindow;
