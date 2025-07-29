"use client";

import LandingPage from "@/components/LandingPage/LandingPage";
import Footer from "@/components/core/Footer";
import AppNavbar from "@/components/core/app-navbar";

function Page() {
  return (
    <div className="w-full">
      <AppNavbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default Page;
