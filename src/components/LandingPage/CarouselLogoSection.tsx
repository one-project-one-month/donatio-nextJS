"use client";

import logo1 from "@/assets/icons/carousel/logo1.png";
import logo2 from "@/assets/icons/carousel/logo2.png";
import logo3 from "@/assets/icons/carousel/logo3.png";
import logo4 from "@/assets/icons/carousel/logo4.png";
import logo5 from "@/assets/icons/carousel/logo5.png";
import logo6 from "@/assets/icons/carousel/logo6.png";
import Image from "next/image";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function CarouselLogoSection() {
  return (
    <section className="w-full overflow-hidden md:py-2">
      <div className="flex items-center w-max animate-scroll py-4">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0 px-12 md:px-[7.5rem]">
            <Image
              src={logo}
              alt={`Sponsor Logo ${i + 1}`}
              width={80}
              height={40}
              className="object-contain w-16 h-8 md:w-25 md:h-15"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
