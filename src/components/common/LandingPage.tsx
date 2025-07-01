import Image from 'next/image'
import React from 'react'

import landingImage from '@/assets/images/landing1.png'

export default function LandingPage() {
  return (

     <div className="flex justify-center">
      <div className="relative">
        <Image
          src={landingImage}
          alt="Landing Image"
          className="rounded-2xl w-[1340px] h-[565px] object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 rounded-2xl bg-black/30 flex flex-col items-center justify-center">
          <p className="text-white text-[60px] font-bold mb-4">Connect, donate, and make a difference.</p>
          <p className="text-white mb-6 max-w-2xl">
            Our platform bridges the gap between generous donors and verified organizations,
            ensuring every contribution makes a meaningful impact. Join us in fostering a culture of
            transparency and trust in charitable giving.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold shadow">
            Donate Now
          </button>
        </div>
      </div>
    </div>

  )
}
