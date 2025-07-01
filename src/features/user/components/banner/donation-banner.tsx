import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

import donationBox from "@/assets/image/donation_box.png";

function DonationBanner() {
  return (
    <section className="md:h-[20rem] relative lg:h-[24rem] h-[15rem]  flex justify-center items-center w-full md:border border-b md:border-primary md:rounded-2xl my-12">
      <div className="w-full md:w-3/4 md:mr-12 mr-4 z-20 text-left p-5">
        <h1 className="text-xl md:text-4xl mb-4 md:mb-8 font-bold">
          Organizations on our platform undertake ongoing activities that
          require continuous support.
        </h1>
        <p className="text-sm md:text-xl text-neutral-500">
          Check out these amazing activities and donate now.
        </p>
      </div>
      <Image
        src={donationBox}
        alt="donation box"
        className="w-1/6 absolute right-1/8 bottom-0 opacity-50"
      />

      <span className="absolute right-2 md:right-8 top-2/3 z-30 p-1 text-white rounded-full bg-primary hover:bg-dodger-blue-500 transition-colors duration-200">
        <Link href="/">
        <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
        </Link>
      </span>
    </section>
  );
}

export default DonationBanner;
