"use client";

import LandingPage from "@/components/LandingPage/LandingPage";
import Footer from "@/components/core/Footer";
import Navbar from "@/components/core/navbar";
import { getAccessToken } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Page() {

  const router = useRouter();

  useEffect(() => {
    const token = getAccessToken();
    if(token) {
      router.push("/donor/events");
    }
  },[]);


  return (
    <div className="w-full">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default Page;
