"use client";
import Footer from "@/components/core/Footer";
import UserNavbar from "@/components/core/user-navbar";
import DonationBanner from "@/features/user/components/banner/donation-banner";
import SearchSection from "@/features/user/components/search/search-section";
import API from "@/lib/api/axios";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import useAuthStore from "@/store/useAuthStore";

function UserLayout({ children }: { children: ReactNode }) {
  
  const pathname = usePathname();
  const hideExtras =
    (pathname.includes("/events/") && pathname !== "/events") ||
    (pathname.includes("/chat") && pathname !== "/chat") ||
    (pathname.includes("/profile") && pathname !== "/profile") ||
    (pathname.includes("/activities/") && pathname !== "/activities");

  const isProfile = pathname.includes("/profile") && pathname !== "/profile";

  const setUserInfo = useAuthStore((state) => state.setUserInfo);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await API.get("/auth/users/me/");
        setUserInfo(response.data);
      } catch (err) {
        console.error("Failed to fetch user info:", err);
      }
    };
    getUserInfo();
  }, []);
    
  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 md:px-8 py-5">
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
