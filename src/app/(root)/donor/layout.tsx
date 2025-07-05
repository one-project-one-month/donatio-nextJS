
import Footer from "@/components/core/Footer";
import UserNavbar from "@/components/core/user-navbar";
import { ReactNode } from "react";


function UserLayout({children}:{children: ReactNode}) {
  return (
    <div className="max-w-7xl mx-auto md:px-8 py-5"> 
    {/* w-dvw : asked later */}
        <UserNavbar />
        {children}
        <Footer />
    </div>
  )
}

export default UserLayout;