import Image from "next/image";
import { CalendarDays } from "lucide-react";

import donationImg from "@/assets/image/eventDetails1.png"
import ahluImg from "@/assets/image/ahlu.webp"

export default function EventDetails() {
  return (
    <div className="max-w-5xl mx-auto p-4 rounded-3xl">
      {/* Banner Image */}
      <div className="relative w-full h-64 rounded-xl overflow-hidden">
        <Image
          src={donationImg}// replace with actual image path
          alt="Disaster relief"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-6 flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Rebuilding Hope: Post-Disaster Relief
          </h2>

          {/* Author */}
          <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <Image src={ahluImg} alt="ahluImg"/>
            </div>
            <span>by Ahlu Myanmar</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col md:items-end gap-2">
          {/* Goal */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border-4 border-blue-400 border-t-transparent animate-spin" />
            <span className="font-semibold text-gray-800">10,000,000 MMK</span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <CalendarDays className="w-4 h-4" />
            <span>15 Jun 2025 - 25 Aug 2025</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="px-5 py-2 text-primary border border-primary font-medium rounded-full hover:bg-primary/90 hover:text-white transition">
          See activities
        </button>
        <button className="px-5 py-2 bg-primary text-white font-medium rounded-full hover:bg-primary/80 transition">
          Donate Now
        </button>
      </div>
    </div>
  );
}
