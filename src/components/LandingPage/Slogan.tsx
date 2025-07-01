import Image from 'next/image'
import React from 'react'

import logo from '@/assets/image/logo.svg'

export default function Slogan() {
  return (
     <div className="w-full max-w-screen-xl bg-primary/5 rounded-2xl shadow-md px-6 py-16 sm:px-10 sm:py-20 flex flex-col items-center gap-16">
        <p className="text-primary text-2xl sm:text-4xl md:text-5xl font-bold text-center tracking-wide sm:tracking-wider leading-tight">
          Empowering Change Through <br className="hidden sm:block" />
          Transparent Donations
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full mb-10">
          {[
            {
              title: 'Connect with Verified Organizations Effortlessly',
              desc: 'We ensure that all organizations on our platform are thoroughly vetted.',
            },
            {
              title: 'Experience Full Transparency in Donation',
              desc: 'Stay informed with detailed reports on your donations.',
            },
            {
              title: 'Join a Community of Compassionate Donors',
              desc: 'Be part of a growing network dedicated to making a difference.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full h-auto flex flex-col items-center text-center gap-4"
            >
              <Image src={logo} alt={`Icon ${index + 1}`} width={40} height={40} className="object-contain" />
              <p className="font-semibold text-lg sm:text-xl">{item.title}</p>
              <p className="text-sm sm:text-base font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
  )
}
