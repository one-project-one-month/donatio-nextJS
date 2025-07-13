"use client";

import LandingPage from "@/components/LandingPage/LandingPage";
import Footer from "@/components/core/Footer";
import Navbar from "@/components/core/navbar";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/app/loading";

function Page() {
  const router = useRouter();

  const accessToken = useAuthStore((state: any) => state.accessToken);

  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
    }
  }, [accessToken, router]);

  if (!accessToken) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default Page;
