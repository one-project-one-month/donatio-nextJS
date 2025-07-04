import { ScrollArea } from "@/components/ui/scroll-area";
import { Image } from "lucide-react";
import React from "react";

function RecieveBox() {
  return (
    <div className="w-full flex justify-start">
      <div className="space-x-3 w-1/2 grid grid-cols-6  my-3">
      <span className="w-6 h-6 p-1 md:w-11 md:h-11 col-span-1 rounded-full border flex justify-center items-center">
        <Image />
      </span>
      <div className="border border-primary p-3 col-span-5 w-auto  max-w-5/6 rounded-lg rounded-l-none rounded-b-lg">
        <p className="text-primary text-sm md:text-base break-words w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          quidem.
        </p>
        <div className="float-end text-xs text-gray-500">12:00 AM</div>
      </div>
    </div>
    </div>
  );
}

function SenderBox() {
  return (
    <div className="w-full flex justify-end">
      <div className="space-x-3 w-1/2 flex justify-end col-start-2 my-3">
      <div className="border bg-primary border-primary p-3 w-auto  max-w-5/6 rounded-lg rounded-r-none rounded-b-lg">
        <p className="text-white text-sm md:text-base break-words w-full">
          hello
        </p>
        <div className="float-end text-xs text-white">12:00 AM</div>
      </div>
      <span className="w-6 h-6 p-1 md:w-11 md:h-11 rounded-full border flex justify-center items-center">
        <Image />
      </span>
    </div>
    </div>
  );
}

function ChatMessageBox() {
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
            <SenderBox />
            <RecieveBox />
            <SenderBox />
            <RecieveBox />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

export default ChatMessageBox;
