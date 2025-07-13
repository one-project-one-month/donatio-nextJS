"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import LogoName from "@/components/common/logo-name";

function Navbar() {
  return (
    <nav className="w-full flex justify-between px-5 py-5 md:px-8">
      <LogoName />
      <div className="flex space-x-5 items-center text-neutral-700">
        <Link href="/">About Us</Link>
        <Link href="/">Organizations</Link>
        <Link href="/">Events</Link>
        <Link href="/">Activites</Link>
        <Button className="px-5 py-5 rounded-full" asChild>
          <Link href="/">Donate Now</Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
