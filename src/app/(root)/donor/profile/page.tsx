"use client";
import BreadCrumbUI from "@/components/common/breadcrumb-ui";
import React, { useEffect, useState } from "react";
import userCoverPhoto from "@/assets/image/userCoverPhoto.png";
import { Pencil, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import profile from "@/assets/icons/profile.svg";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAuthStore from "@/store/useAuthStore";
import API from "@/lib/api/axios";

const page = () => {
  type Attachment = {
    id: string;
    file: string;
  };

  type Donation = {
    id: string;
    organization: string;
    actor: string;
    event: string | null;
    title: string;
    amount: string;
    type: string;
    status: string;
    review_required: boolean;
    created_at: string;
    updated_at: string;
    attachments: Attachment[];
  };

  const [lists, setLists] = useState<Donation[]>([]);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await API.get("/transactions/history/");

        setLists(response.data);
      } catch (err) {
        console.error("Failed to fetch user's transsactions:", err);
      }
    };
    getUserInfo();
  }, []);

  const userInfo = useAuthStore((state) => state.userInfo);

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
              <AvatarFallback>{userInfo?.username?.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className="">
              <div>{userInfo?.username}</div>
              <div className="text-gray-500">{userInfo?.email}</div>
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
                {lists.map((list, index) => {
                  const { date, time } = formatDateTime(list.updated_at);
                  return (
                    <TableRow key={index}>
                      <TableCell className="pl-10 py-6">{date}</TableCell>
                      <TableCell className="py-6">{time}</TableCell>
                      <TableCell className="py-6">
                        {/* {list?.organization?} */}
                      </TableCell>
                      <TableCell className="py-6">{list?.amount}</TableCell>
                      <TableCell className="py-6">{list?.status}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

function formatDateTime(isoString: string) {
  const dateObj = new Date(isoString);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const date = `${day}/${month}/${year}`;

  let hours = dateObj.getHours();
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  const seconds = dateObj.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "P.M" : "A.M";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const time = `${hours}:${minutes}:${seconds} ${ampm}`;
  return { date, time };
}

export default page;
