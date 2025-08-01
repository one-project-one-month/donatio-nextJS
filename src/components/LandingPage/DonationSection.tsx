import donationImage from "@/assets/image/donation.png";
import Image from "next/image";
import PageSection from "../common/page-section";

export default function DonationSection() {
  return (
    <PageSection>
      <div className="relative flex items-center rounded-3xl overflow-hidden border border-primary p-8 md:p-12 min-h-[300px] md:min-h-[400px]">
        {/* Text Content */}
        <div className="relative z-10 w-full md:w-3/4 md:px-20">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight mb-4">
            Organizations on our platform undertake ongoing activities that
            require continuous support.
          </h2>
          <p className="text-muted-foreground text-xs md:text-base lg:text-xl">
            Check out these amazing activities and donate now.
          </p>
        </div>

        {/* Image */}
        <div className="absolute -bottom-4 right-30 opacity-50 md:opacity-100 pointer-events-none">
          <Image
            src={donationImage}
            alt="A person putting items in a donation box"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </PageSection>
  );
}
