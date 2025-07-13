"use client";
import LandingPage from "@/components/LandingPage/LandingPage";
import Footer from "@/components/core/Footer";
import Navbar from "@/components/core/navbar";
import useAuthStore from "@/store/useAuthStore";

function page() {
  const { accessToken, logout } = useAuthStore();

  console.log(accessToken);
  //this is where I need to add logout

  return (
    <div className="w-full">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default page;
