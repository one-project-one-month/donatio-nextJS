import Footer from "@/components/core/Footer";
import UserNavbar from "@/components/core/user-navbar";
import DonationBanner from "@/features/user/components/banner/donation-banner";
import SearchSection from "@/features/user/components/search/search-section";
import { ReactNode } from "react";

function UserLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="max-w-7xl mx-auto md:px-8 py-5">
        {/* w-dvw : asked later */}
        <UserNavbar />
        <SearchSection />
        {children}
        <DonationBanner />
      </div>

      <Footer />
    </>
  );
}

export default UserLayout;
