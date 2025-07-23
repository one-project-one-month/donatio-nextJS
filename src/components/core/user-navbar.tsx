"use client";

import Link from "next/link";
import AvatarDropdown from "../common/avatar-dropdown";
import LogoName from "@/components/common/logo-name";
import { MessageCircleMore } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";

const urlDatas = [
  {
    name: "events",
    path: "/donor/events",
  },
  {
    name: "activities",
    path: "/donor/activities",
  },
  {
    name: "organizations",
    path: "/donor/organizations",
  },
];


type UserNavbarProps = {
  isProfile: boolean;
}

function UserNavbar({ isProfile }: UserNavbarProps) {
  const url = usePathname();

  return (
    <nav className="w-dvw left-0 fixed top-0 z-40">
      <div className="md:max-w-7xl mx-auto bg-white dark:bg-neutral-950 py-5 flex justify-between px-5 md:px-12">
        <div className="md:w-[250px] flex justify-start">
          <LogoName />
        </div>
        {!isProfile && (
          <div className="flex space-x-5 items-center justify-between text-neutral-700 dark:text-neutral-300">
            {urlDatas.map((data) => {
              return (
                <Link
                  key={data.name}
                  className={`hidden md:block text-center ${
                    url === data.path && "text-primary"
                  }`}
                  href={data.path}
                >
                  {data.name}
                </Link>
              );
            })}
          </div>
        )}

        <div className="flex justify-end items-center gap-8">
          <div className="flex justify-center items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full h-10 w-10"
              asChild
            >
              <Link href="/donor/chat">
                <MessageCircleMore />
              </Link>
            </Button>
              <ModeToggle />
          </div>
          <AvatarDropdown />
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;
