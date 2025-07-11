"use client";

import Link from "next/link";
import AvatarDropdown from "../common/avatar-dropdown";
import LogoName from "@/components/common/logo-name";
import { MessageCircleMore } from "lucide-react";
import { Button } from "../ui/button";

function UserNavbar() {
  return (
    <nav className="w-full flex justify-between px-5 md:px-12">
      <LogoName />
      <div className="flex justify-center items-center gap-8">
        <div>
          <Button variant="outline" size="sm" className="rounded-full h-10 w-10" asChild>
          <Link href="/donor/chat">
            <MessageCircleMore />
          </Link>
        </Button>
        </div>
        <AvatarDropdown />
      </div>
    </nav>
  );
}

export default UserNavbar;
