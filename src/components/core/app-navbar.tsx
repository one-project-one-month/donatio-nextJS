"use client";

import LogoName from "@/components/common/logo-name";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useAuthStore from "@/store/useAuthStore";
import { MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AvatarDropdown from "../common/avatar-dropdown";
import { CustomMobileNav } from "./custom-mobile-nav";

const NAV_LINKS = [
  { name: "Events", path: "/donor/events" },
  { name: "Activities", path: "/donor/activities" },
  { name: "Organizations", path: "/donor/organizations" },
];

const AuthenticatedNav = () => {
  const pathname = usePathname();
  return (
    <>
      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex flex-1 justify-center items-center">
        <div className="flex space-x-8 items-center text-neutral-700 dark:text-neutral-300">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === link.path ? "text-primary" : ""
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Right-side Actions */}
      <div className="flex flex-1 items-center justify-end gap-x-6 lg:flex-none">
        <Button
          variant="outline"
          size="icon"
          className="hidden rounded-full lg:flex"
          asChild
        >
          <Link href="/donor/chat">
            <MessageCircleMore className="h-5 w-5" />
          </Link>
        </Button>
        <AvatarDropdown />
        <div className="lg:hidden">
          <CustomMobileNav />
        </div>
      </div>
    </>
  );
};

const UnauthenticatedNav = () => (
  <div className="flex flex-1 justify-end">
    <Button className="rounded-lg px-6 py-5" asChild>
      <Link href="/login">Donate Now</Link>
    </Button>
  </div>
);

function AppNavbar() {
  const isAuthenticated = useAuthStore((s) => !!s.accessToken);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-neutral-950">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-5 py-4 md:px-8 lg:px-12">
        <div className="flex-1 md:flex-none">
          <LogoName />
        </div>

        {isAuthenticated ? <AuthenticatedNav /> : <UnauthenticatedNav />}
      </div>
    </header>
  );
}

export default AppNavbar;
