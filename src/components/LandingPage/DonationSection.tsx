import donationImage from "@/assets/image/donation.png"; // Adjust the path as necessary
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SupportHeaderSection() {
  return (
    <section className="relative flex w-full max-w-screen-xl mx-auto px-4 py-16 border border-blue-300 rounded-3xl overflow-hidden">
      <div className="px-20 py-6 flex items-center justify-between w-full">
        {/* Left Text (3/4) */}
        <div className="w-3/4 pr-6 z-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Organizations on our platform undertake ongoing activities <br />
            that require continuous support.
          </h2>
          <p className="text-gray-600 text-lg">
            Check out these amazing activities and donate now.
          </p>
        </div>

        {/* Right Arrow (1/4) */}
        <div className="w-1/4 flex justify-end items-end z-10">
          <button className="bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600 transition">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Bottom-right Image (hitting the border) */}
      <div className="absolute bottom-0 right-40">
        <Image
          src={donationImage}
          alt="Decorative Figure"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>
    </section>
  );
}
