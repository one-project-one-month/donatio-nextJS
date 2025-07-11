import BreadCrumbUI from "@/components/common/breadcrumb-ui";
import React from "react";
import userCoverPhoto from "@/assets/image/userCoverPhoto.png";
import { Pencil, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import profile from "@/assets/icons/profile.svg";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = () => {
  const lists = [
    {
      date: "12/5/2025",
      time: "12:12:30 PM",
      organization: "Alu Myanmar",
      amount: "15,000 MMK",
      status: "success",
    },
    {
      date: "13/5/2025",
      time: "09:45:10 AM",
      organization: "KBZ Bank",
      amount: "250,000 MMK",
      status: "pending",
    },
    {
      date: "14/5/2025",
      time: "03:20:50 PM",
      organization: "AYA Pay",
      amount: "5,000 MMK",
      status: "failed",
    },
    {
      date: "15/5/2025",
      time: "06:05:15 PM",
      organization: "Wave Money",
      amount: "12,500 MMK",
      status: "success",
    },
    {
      date: "16/5/2025",
      time: "11:35:45 AM",
      organization: "Onepay",
      amount: "50,000 MMK",
      status: "pending",
    },
    {
      date: "17/5/2025",
      time: "02:10:20 PM",
      organization: "Ooredoo",
      amount: "3,000 MMK",
      status: "success",
    },
    {
      date: "18/5/2025",
      time: "08:00:00 AM",
      organization: "Mytel Pay",
      amount: "8,800 MMK",
      status: "failed",
    },
    {
      date: "19/5/2025",
      time: "10:25:35 AM",
      organization: "Shwe Bank",
      amount: "100,000 MMK",
      status: "success",
    },
    {
      date: "20/5/2025",
      time: "01:55:55 PM",
      organization: "CB Pay",
      amount: "20,000 MMK",
      status: "pending",
    },
    {
      date: "21/5/2025",
      time: "04:40:10 PM",
      organization: "MAB Bank",
      amount: "75,500 MMK",
      status: "success",
    },
  ];

  return (
    <div className="px-4 pt-10">
      <BreadCrumbUI
        links={[{ name: "Donor", path: "/donor" }]}
        currentPageTitle={"Settings"}
      />

      {/* cover photo  */}
      <div className="relative">
        <img src={userCoverPhoto.src} alt="img" className="mt-8 rounded-3xl" />
        <div className="absolute cursor-pointer p-4 flex items-center justify-center rounded-full bg-white top-5 right-5 hover:bg-white/80 duration-150 transition ease-in-out">
          <Pencil size={15} />
        </div>

        {/* info section  */}
        <div className="my-6 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="">
              <div>Htet Aung Lwin</div>
              <div className="text-gray-500">ayansoetlkwr@mg.com</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-end">
            <Button className="bg-white/0 text-gray-500 shadow-none hover:bg-white/0 cursor-pointer w-fit rounded-full py-6 ">
              <Pencil /> <div className="text-lg font-normal">Edit info</div>
            </Button>
            <Button className="rounded-full py-6 cursor-pointer">
              <img src={profile.src} alt="icon" />
              <div className="text-lg font-normal"> Become an admin</div>
            </Button>
          </div>
        </div>

        {/* history  */}
        <div className="my-10">
          {/* this is title and search box  */}
          <div>
            <div className="text-xl font-semibold">Donation History</div>

            <div className="relative mt-6">
              <Input
                className="rounded-full pl-12 py-6 shadow-md bg-white border border-primary text-base focus:ring-2 focus:ring-dodger-blue-50 placeholder:text-neutral-400 w-2/5"
                type="text"
                placeholder="Search for events"
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400"
                size={20}
              />
            </div>
          </div>
          {/* this is title and search box  */}

          {/* table  */}
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow mt-10">
            <Table>
              <TableHeader>
                <TableRow className="text-lg bg-[#FAFDFF]">
                  <TableHead className="pl-10 py-6">Date</TableHead>
                  <TableHead className="py-6">Time</TableHead>
                  <TableHead className="py-6">Organization</TableHead>
                  <TableHead className="py-6">Amount</TableHead>
                  <TableHead className="py-6">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-gray-500">
                {lists.map((list, index) => (
                  <TableRow key={index}>
                    <TableCell className="pl-10 py-6">{list.date}</TableCell>
                    <TableCell className="py-6">{list.time}</TableCell>
                    <TableCell className="py-6">{list.organization}</TableCell>
                    <TableCell className="py-6">{list.amount}</TableCell>
                    <TableCell className="py-6">{list.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
