import Image from 'next/image'
import React from 'react'

import donateImg1 from '@/assets/image/donateImg1.jpg'
import donateImg2 from '@/assets/image/donateImg2.jpg'
import donateImg3 from '@/assets/image/donateImg3.jpg'
import donateImg4 from '@/assets/image/donateImg4.jpg'

export default function BuildingTrustSection() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={donateImg1}
            alt="Donate Image 1"
            className="w-full h-auto object-cover rounded-xl"
          />
          <Image
            src={donateImg2}
            alt="Donate Image 2"
            className="w-full h-auto object-cover rounded-xl"
          />
          <Image
            src={donateImg3}
            alt="Donate Image 3"
            className="w-full h-auto object-cover rounded-xl"
          />
          <Image
            src={donateImg4}
            alt="Donate Image 4"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-snug">
            Empowering Generosity,<br />
            Building Trust.
          </h2>
          <p className="text-gray-700 text-base leading-relaxed font-light">
            At Donatio, we believe in a world where giving is easy, transparent, and impactful.
            We connect passionate donors like you with thoroughly vetted organizations,
            ensuring every contribution reaches its intended cause.
            Learn more about our commitment to integrity and community.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold w-fit shadow hover:bg-primary/90 transition">
            Donate Now
          </button>
        </div>
      </div>
  )
}
