import { ScrollArea } from "@/components/ui/scroll-area";
import { getMessages } from "@/store/chatStore";
import { Image } from "lucide-react";


const messages = [
  { id: 1, sender: "me", text: "Hey! How are you doing?", time: "09:00 AM" },
  { id: 2, sender: "other", text: "I'm good, thanks! How about you?", time: "09:01 AM" },
  { id: 3, sender: "me", text: "Doing well. Are you coming to the event tonight?", time: "09:02 AM" },
  { id: 4, sender: "other", text: "Yes, I'll be there. Looking forward to it!", time: "09:03 AM" },
  { id: 5, sender: "me", text: "Great! Let me know if you need a ride.", time: "09:04 AM" },
  { id: 6, sender: "other", text: "Thanks! I have a ride, but I appreciate it.", time: "09:05 AM" },
  { id: 7, sender: "me", text: "No problem. See you tonight!", time: "09:06 AM" },
  { id: 8, sender: "other", text: "See you!", time: "09:07 AM" },
  { id: 9, sender: "me", text: "By the way, did you finish the report?", time: "09:08 AM" },
  { id: 10, sender: "other", text: "Yes, I sent it to your email.", time: "09:09 AM" },
]

type BoxProps = {
  text: string;
  time: string;
}

function RecieveBox({text, time}:BoxProps) {
  return (
    <div className="w-full flex justify-start">
      <div className="space-x-3 w-1/2 grid grid-cols-6  my-3">
      <span className="w-6 h-6 p-1 md:w-11 md:h-11 col-span-1 rounded-full border flex justify-center items-center">
        <Image />
      </span>
      <div className="border border-primary p-3 col-span-5 w-auto  max-w-5/6 rounded-lg rounded-l-none rounded-b-lg">
        <p className="text-primary text-sm md:text-base break-words w-full">
          {text}
        </p>
        <div className="float-end text-xs text-gray-500">{time}</div>
      </div>
    </div>
    </div>
  );
}

function SenderBox({text, time}:BoxProps) {
  return (
    <div className="w-full flex justify-end">
      <div className="space-x-3 w-1/2 flex justify-end col-start-2 my-3">
      <div className="border bg-primary border-primary p-3 w-auto  max-w-5/6 rounded-lg rounded-r-none rounded-b-lg">
        <p className="text-white text-sm md:text-base break-words w-full">
          {text}
        </p>
        <div className="float-end text-xs text-white">{time}</div>
      </div>
      <span className="w-6 h-6 p-1 md:w-11 md:h-11 rounded-full border flex justify-center items-center">
        <Image />
      </span>
    </div>
    </div>
  );
}


type ChatMessageBoxProps = {
  type: "organization" | "donor"
}

function ChatMessageBox({ type }: ChatMessageBoxProps) {

  const messages = getMessages();



  return (
    <ScrollArea className="h-[33rem]">
      <div className="md:px-8 px-4 py-5 flex flex-col justify-end">
        <div>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">today</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex flex-col w-full">
            {
              messages.map((msg, i) => {
                return (
                  <div key={i}>
                  {msg.sender_type === type ? <SenderBox text={msg.message} time="10: 00PM" /> : <RecieveBox text={msg.message} time="10:00 PM" />}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

export default ChatMessageBox;
