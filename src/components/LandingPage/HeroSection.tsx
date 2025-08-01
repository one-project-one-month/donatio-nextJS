"use client";

import landingImage from "@/assets/image/landing1.png";
import Image from "next/image";
import Link from "next/link";
import PageSection from "../common/page-section";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <PageSection>
      <div className="relative rounded-3xl overflow-hidden">
        <Image
          src={landingImage}
          alt="Landing Page Image"
          className="w-full h-[500px] md:h-[565px] object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute bg-black/40 inset-0 flex flex-col items-center justify-end text-center p-6 md:p-12">
          <div className="max-w-4xl text-white pb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight">
              Connect, donate, and make a difference.
            </h1>
            <p className="text-sm md:lg lg:text-xl mb-8">
              Our platform bridges the gap between generous donors and verified
              organizations, ensuring every contribution makes a meaningful
              impact.{" "}
              <span className="hidden md:inline">
                Join us in fostering a culture of transparency and trust in
                charitable giving.
              </span>
            </p>
            <Button
              className="rounded-full font-semibold px-8 py-6 text-base"
              variant="secondary"
              size="lg"
              asChild
            >
              <Link href="/login">Donate Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
