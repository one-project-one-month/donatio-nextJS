import Image from 'next/image'
import React from 'react'
import landingImage from '@/assets/image/landing1.png'

export default function HeroSection() {
  return (
    <div className="flex justify-center pt-10 w-full">
        <div className="relative w-full max-w-screen-xl rounded-2xl overflow-hidden">
          <Image
            src={landingImage}
            alt="Landing Image"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[565px] object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
            <p className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Connect, donate, and make<br className="hidden sm:block" /> a difference.
            </p>
            <p className="text-white text-sm sm:text-base md:text-lg mb-6 max-w-3xl">
              Our platform bridges the gap between generous donors and verified organizations,
              ensuring every contribution makes a meaningful impact. Join us in fostering a culture
              of transparency and trust in charitable giving.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium shadow">
              Donate Now
            </button>
          </div>
        </div>
      </div>
  )
}
