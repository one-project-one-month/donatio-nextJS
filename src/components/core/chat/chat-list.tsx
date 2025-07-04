import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Image } from "lucide-react";

const sampleData = [
  {
    logo: "",
    name: "Humanity Inclusion",
    latestMsg: "Some random text",
  },
  {
    logo: "",
    name: "Global Relief",
    latestMsg: "Thank you for your support!",
  },
  {
    logo: "",
    name: "Food for All",
    latestMsg: "Your donation has been received.",
  },
  {
    logo: "",
    name: "Water Wells",
    latestMsg: "We appreciate your help.",
  },
  {
    logo: "",
    name: "Education First",
    latestMsg: "New updates available.",
  },
];

function ChatList() {
  return (
    <ScrollArea className="h-[33rem]">
      {sampleData.map((data, i) => {
        return (
          <div key={i} className={`flex justify-start items-center cursor-default border-b hover:bg-gray-100 border-black/5 p-2 relative ${i === 0 && 'bg-gray-100'}`}>
            <div className="p-3">
              <Image className="text-gray-400" />
            </div>
            <div className="p-3">
              <h2 className="font-semibold">{data.name}</h2>
              <p className="text-sm text-neutral-600">{data.latestMsg}</p>
            </div>
            <Badge className="absolute h-5 w-5 right-2 top-2 rounded-full">
              1
            </Badge>
          </div>
        );
      })}
    </ScrollArea>
  );
}

export default ChatList;
