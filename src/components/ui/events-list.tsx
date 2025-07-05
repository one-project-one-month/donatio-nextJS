/* eslint-disable @next/next/no-img-element */
"use client"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import SearchBox from "@/features/user/components/search/search-box";
import { useState } from "react";

// sample data to test
const events = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/40/85/3e/40853ed84d06a00e8cdff97d54d19d6c.jpg",
    orgName: "Helping Hands Foundation",
    target: "$50,000",
    title: "Support Families in Crisis",
    description:
      "Your donation helps provide food, shelter, and education to families displaced by conflict and natural disasters. Every contribution gives children a safer place to sleep and hope for a better tomorrow. Together, we can rebuild communities and restore dignity to those affected."
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/41/d8/c5/41d8c5fe6252221ba0d63d60c029a4d4.jpg",
    orgName: "Green Earth Initiative",
    target: "$25,000",
    title: "Plant Trees, Protect the Future",
    description:
      "Help us plant 10,000 trees this year to combat deforestation and climate change in vulnerable regions. Each tree planted helps purify the air, stabilize the climate, and create habitats for endangered species. Be a part of a greener, healthier planet."
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/0f/54/76/0f5476613757a50da5068eeca596a9e9.jpg",
    orgName: "Bright Minds Education",
    target: "$15,000",
    title: "Educate the Next Generation",
    description:
      "Sponsor school supplies and scholarships for underprivileged children in rural areas. Education is the most powerful tool for change—your support can break the cycle of poverty and empower children to reach their full potential."
  },
  {
    id: 4,
    image: "https://i.pinimg.com/736x/dd/cb/36/ddcb361a6f93e2518268638305e528ba.jpg",
    orgName: "Water for All",
    target: "$35,000",
    title: "Clean Water, Healthy Lives",
    description:
      "Fund the construction of clean water wells for communities without access to safe drinking water. Clean water prevents disease, supports education, and transforms entire villages. Your gift helps save lives and bring health to the most vulnerable."
  },
  {
    id: 5,
    image: "https://i.pinimg.com/736x/de/ea/33/deea33b33262ef4788483f82bf1a4842.jpg",
    orgName: "Animal Rescue Alliance",
    target: "$10,000",
    title: "Give Animals a Second Chance",
    description:
      "Support rescue operations, medical care, and shelter for abandoned and injured animals. Your help ensures they receive love, proper nutrition, and the chance to be adopted into safe and caring homes. Every animal deserves compassion and a second chance."
  }
];

export interface DonationCardData {
  id: number;
  image: string;
  orgName: string;
  target: string;
  title: string;
  description: string;
}

export default function EventLists() {
  // events fetching
  const [page,setPage] = useState(0);
  console.log("Pagination :",page)
  return (
    <div>
    {/* Search Box with dropdown */}
     <div className="flex w-full my-12 justify-center">
       <SearchBox/>
     </div>
      <div className=" flex grid lg:grid-cols-3 md:grid-cols-2 my-3 sm:gap-18 gap-2 w-full flex justify-center sm:p-0 p-3">
        {events.map((event) => (
          <EventCard key={event.id} data={event} />
        ))}
      </div>
      <div className="flex justify-end w-full mt-1">
        <div className="1/2">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className="hover:bg-blue-400 hover:border-gray-300" />
              </PaginationItem>
              {
                [1,2,3].map((item,index)=>(<PaginationItem key={index}>
                <PaginationLink href="#" className="hover:bg-blue-400" onClick={()=>{setPage(item)}}>{item}</PaginationLink>
              </PaginationItem>))
              }
              <PaginationItem>
                <PaginationNext href="#" className="hover:bg-blue-400" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

// event cards
const EventCard = ({ data }: { data: DonationCardData }) => {
  return (<div className=" rounded md:my-0 my-3 flex flex-col justify-between max-h-[600px] max-w-[500px] hover:bg-gray-300/[0.1] hover:p-2 rounded  transition-all duration-300 ">
    <div className='rounded-lg  overflow-hidden'>
      <img src={data?.image} className='w-full rounded max-h-[300px]' alt="img" />
      <div className="flex justify-between mb-1 text-sm my-2">
        <div className="text-slate-300">{data?.orgName}</div>
        <div className='text-blue-400'>{data?.target}</div>
      </div>
    </div>

    {/* description and title */}
    <div className="text-justify">
      <div className='font-bold text-xl'>{data?.title}</div>
      <div className='text-justify text-sm text-slate-500 hover:text-slate-900 my-3 '>{data?.description}</div>
    </div>
    {/* Button to donate */}
    <a href="#" className='border rounded-xl font-bold   text-center bg-blue-400 text-white hover:text-black transition-all duration-300 py-2'>
      Donate Now
    </a>
  </div>)
}