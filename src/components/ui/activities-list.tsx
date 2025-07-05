"use client"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, MapPin, TrendingUp } from "lucide-react";
import SearchBox from "@/features/user/components/search/search-box";

// interface for activity
export interface Activity {
  id: number;
  title: string;
  date: string;
  eventName: string;
  description: string;
  status: string;
  address: string;
  familiesHelped: number;
  tags: {
    Address?: string;
    Families?: number;
    Status?: string;
  };
}
// activties mock up
const activities = [
  {
    id: 1,
    title: "Community Support Drive",
    date: "2025-07-03",
    eventName: "ICON:Name",
    description:
      "Join us in supporting local families with food, supplies, and essential resources. A day of giving, connecting, and uplifting those in need. Volunteers and donors are welcome to make a meaningful difference by participating in community outreach and support programs.",
    status: "Ongoing",
    address: "123 Kindness Lane, Hopeville",
    familiesHelped: 120,
    tags: {
      Address: "123 Kindness Lane, Hopeville",
      Families: 120,
      Status: "Ongoing"
    }
  },
  {
    id: 2,
    title: "Warm Meals for Winter",
    date: "2025-12-10",
    eventName: "ICON:Name",
    description:
      "Distributing warm meals and care packages to the homeless during the cold season. Volunteers needed for packing and delivery. This initiative ensures that no one is left hungry or cold during the most challenging time of the year, spreading warmth and kindness across the city.",
    status: "Upcoming",
    address: "Shelter HQ, Block 14B, Downtown",
    familiesHelped: 75,
    tags: {
      Address: "Shelter HQ, Block 14B, Downtown",
      Families: 75,
      Status: "Upcoming"
    }
  },
  {
    id: 3,
    title: "Books for All",
    date: "2025-09-15",
    eventName: "ICON:Name",
    description:
      "A literacy-focused campaign to provide books, backpacks, and writing tools to underprivileged school children in rural areas. Through this program, we aim to empower young minds by giving them access to education and knowledge, planting the seeds for a brighter future.",
    status: "Completed",
    address: "Library Hall, Oakridge",
    familiesHelped: 200,
    tags: {
      Address: "Library Hall, Oakridge",
      Families: 200,
      Status: "Completed"
    }
  },
  {
    id: 4,
    title: "Clean Water Project",
    date: "2025-08-01",
    eventName: "ICON:Name",
    description:
      "Building sustainable clean water wells in rural areas without access to clean drinking water. Join us in making health accessible. With your help, we can prevent waterborne diseases and improve the quality of life for entire communities.",
    status: "Ongoing",
    address: "Riverbank Village, Sector 9",
    familiesHelped: 300,
    tags: {
      Address: "Riverbank Village, Sector 9",
      Families: 300,
      Status: "Ongoing"
    }
  },
  {
    id: 6,
    title: "Clean Water Project",
    date: "2025-08-01",
    eventName: "ICON:Name",
    description:
      "Building sustainable clean water wells in rural areas without access to clean drinking water. Join us in making health accessible. With your help, we can prevent waterborne diseases and improve the quality of life for entire communities.",
    status: "Ongoing",
    address: "Riverbank Village, Sector 9",
    familiesHelped: 300,
    tags: {
      Address: "Riverbank Village, Sector 9",
      Families: 300,
      Status: "Ongoing"
    }
  },
  {
    id: 5,
    title: "Clean Water Project",
    date: "2025-08-01",
    eventName: "ICON:Name",
    description:
      "Building sustainable clean water wells in rural areas without access to clean drinking water. Join us in making health accessible. With your help, we can prevent waterborne diseases and improve the quality of life for entire communities.",
    status: "Ongoing",
    address: "Riverbank Village, Sector 9",
    familiesHelped: 300,
    tags: {
      Address: "Riverbank Village, Sector 9",
      Families: 300,
      Status: "Ongoing"
    }
  }
];

//  Main Component for Activity
export default function ActivityLists() {
  return (<div>
    <div className="flex w-full my-12 justify-center">
       <SearchBox/>
     </div>
    <div className="border w-full rounded-lg p-3 my-3">
    <div className="w-full flex justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="border-none outline-none bg-transparent text-slate-600 shadow-none hover:bg-slate-300"><ChevronDown /> Recent Activities</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Activities</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Recent</DropdownMenuItem>
          <DropdownMenuItem>Old </DropdownMenuItem>
          <DropdownMenuItem>Archieved</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <div className=" my-9 p-3 max-h-dvh hover:overflow-y-auto  transition-all duration-300 overflow-hidden">
      {activities?.map((activity) => <ActivityCard key={activity?.id} data={activity} />)}
    </div>
  </div>
  </div>)
}

const ActivityCard = ({ data }: { data: Activity }) => {
  return (<div className="w-full transition-all duration-300 rounded p-2 my-10 hover:my-12">
    <div className="flex md:justify-end justify-end mb-3  ">
      <div className="flex ms-3 md:px-5 items-center text-xs sm:flex hidden  justify-center font-light hover:text-black text-slate-500 transition duration-300 ">
        <MapPin className="border transition-all duration-300 ease-in-out rounded-full md:size-9 md:p-2 p-1 size-7 bg-orange-500/[0.3]  text-orange-900  me-3 hover:rounded-lg transition-all duration-300  " /> {data?.tags?.Address}
      </div>
      <div className="flex ms-3 px-5 items-center justify-center text-xs font-light hover:text-black text-slate-500 transition duration-300">
        <TrendingUp className="  transition-all duration-300 ease-in-out hover:rounded-lg transition-all duration-300 rounded-full me-3 md:size-9 md:p-2 p-1 size-7 bg-orange-500/[0.1]  border text-orange-900" /> {data?.tags?.Families}Families</div>
      <div className="flex ms-3 ps-5 items-center justify-center text-xs font-light hover:text-black text-slate-500 transition duration-300">
        <div className="border bg-blue-300 rounded-lg w-fit p-1 px-2 text-blue-900">{data?.tags?.Status}</div>
      </div>
    </div>
    <div className="flex items-center justify-between my-3">
      <div className="md:text-3xl text-xl font-bold text-blue-500 hover:text-blue-300 transition-all duration-300"><a href="#">{data.title}</a></div>
      <div className="flex items-end justify-center font-light text-slate-500 "><Calendar className="me-3" /> {data?.date}</div>
    </div>
    <div>
      <div className="font-light my-1">{data?.eventName}</div>
    </div>
    <div>
      <div className="text-justify text-slate-400 text-light my-4">
        {data?.description}
      </div>
      <div className="text-end text-blue-300 my-3"><a href="#">View Detail</a></div>
    </div>
    <hr />
  </div>)
}