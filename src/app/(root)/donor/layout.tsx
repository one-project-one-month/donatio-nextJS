"use client";

import Footer from "@/components/core/Footer";
import AppNavbar from "@/components/core/app-navbar";
import SearchSection from "@/features/user/components/search/search-section";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const SHOW_SEARCH_ON_PATHS = [
  "/donor/events",
  "/donor/activities",
  "/donor/organizations",
];

function UserLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const showSearchSection = SHOW_SEARCH_ON_PATHS.includes(pathname);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-5 py-5 pt-20 md:px-8 lg:px-12">
        <AppNavbar />
        {showSearchSection && <SearchSection />}
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default UserLayout;
