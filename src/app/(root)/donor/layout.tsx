"use client";
import Footer from "@/components/core/Footer";
import UserNavbar from "@/components/core/user-navbar";
import DonationBanner from "@/features/user/components/banner/donation-banner";
import SearchSection from "@/features/user/components/search/search-section";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

function UserLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideExtras =
    (pathname.includes("/events/") && pathname !== "/events") ||
    (pathname.includes("/chat") && pathname !== "/chat") ||
    (pathname.includes("/profile") && pathname !== "/profile");

  const isProfile = pathname.includes("/profile") && pathname !== "/profile";

  return (
    <>
      <div className="max-w-7xl mx-auto pt-10 md:px-8 py-5">
        {/* w-dvw : asked later */}
        <UserNavbar isProfile={isProfile} />
        {!hideExtras && <SearchSection />}
        {children}
        {!hideExtras && <DonationBanner />}
      </div>

      <Footer />
    </>
  );
}

export default UserLayout;
