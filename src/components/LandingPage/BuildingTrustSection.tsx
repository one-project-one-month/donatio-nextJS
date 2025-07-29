import Image from "next/image";
import Link from "next/link";

import donateImg1 from "@/assets/image/donateImg1.jpg";
import donateImg2 from "@/assets/image/donateImg2.jpg";
import donateImg3 from "@/assets/image/donateImg3.jpg";
import donateImg4 from "@/assets/image/donateImg4.jpg";
import PageSection from "../common/page-section";
import { Button } from "../ui/button";

const images = [
  { src: donateImg1, alt: "Happy children receiving aid" },
  { src: donateImg2, alt: "Volunteers sorting donation items" },
  { src: donateImg3, alt: "A person placing money in a donation box" },
  { src: donateImg4, alt: "A community gathering for a charity event" },
];

export default function BuildingTrustSection() {
  return (
    <PageSection>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover rounded-xl shadow-md"
            />
          ))}
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary leading-snug">
            Empowering Generosity,
            <br />
            Building Trust.
          </h2>
          <p className="text-muted-foreground text-xs md:text-base leading-relaxed">
            At Donatio, we believe in a world where giving is easy, transparent,
            and impactful. We connect passionate donors like you with thoroughly
            vetted organizations, ensuring every contribution reaches its
            intended cause. Learn more about our commitment to integrity and
            community.
          </p>
          <Button
            className="w-fit cursor-pointer p-4 md:p-6 rounded-full font-medium shadow text-sm md:text-base"
            size="lg"
            asChild
          >
            <Link href="/login">Donate Now</Link>
          </Button>
        </div>
      </div>
    </PageSection>
  );
}
