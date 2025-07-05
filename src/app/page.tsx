import LandingPage from "@/components/LandingPage/LandingPage"
import Footer from "@/components/core/Footer"
import Navbar from "@/components/core/navbar"

function page() {
  return (
    <div className="w-full py-5">
      <Navbar />
      <LandingPage />
      <Footer />

    </div>
  )
}

export default page