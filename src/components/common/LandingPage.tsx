import Image from 'next/image'
import React from 'react'

import landingImage from '@/assets/image/landing1.png'
import logo from '@/assets/image/logo.svg'

export default function LandingPage() {
  return (

    <div className='gap-10'>
      {/* Image */}
      <div className="flex justify-center pt-10">
        <div className="relative">
          <Image
            src={landingImage}
            alt="Landing Image"
            className="rounded-2xl w-[1340px] h-[565px] object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 rounded-2xl bg-black/30 flex flex-col items-center justify-center">
            <p className="text-white text-[60px] font-bold mb-4 text-center ">Connect, donate, and make<br /> a difference.</p>
            <p className="text-white text-[20px] mb-6 max-w-2xl text-center">
              Our platform bridges the gap between generous donors and verified organizations,
              ensuring every contribution makes a meaningful impact. Join us in fostering a culture of
              transparency and trust in charitable giving.
            </p>
            <button className="bg-white text-black px-6 py-4 rounded-full font-medium shadow">
              Donate Now
            </button>
          </div>
        </div>

      </div>
      {/* Logos carousel */}
      <div className="flex justify-center mt-10">
        <div className="flex gap-10 overflow-x-auto py-4 px-2 w-full justify-between">
          {/* Example logos, replace src with your actual logo paths */}
          <Image src={logo} alt="Logo 1" width={40} height={40} className="object-contain" />
          <Image src={logo} alt="Logo 2" width={40} height={40} className="object-contain" />
          <Image src={logo} alt="Logo 3" width={40} height={40} className="object-contain" />
          <Image src={logo} alt="Logo 3" width={40} height={40} className="object-contain" />
          <Image src={logo} alt="Logo 3" width={40} height={40} className="object-contain" />
          <Image src={logo} alt="Logo 3" width={40} height={40} className="object-contain" />
          <Image src={logo} alt="Logo 4" width={40} height={40} className="object-contain" />
          <Image src={logo} alt="Logo 5" width={40} height={40} className="object-contain" />
        </div>
      </div>

      {/* Slogan */}
      <div className="flex justify-center mt-10">
        <div className='bg-primary/5 w-[1340px] h-[572px] shadow-md rounded-2xl flex flex-col items-center justify-center gap-24'>
          <div>
            <p className="text-primary text-[32px] font-bold text-center">
              Empowering Change Through <br />
              Transparent Donations
            </p>
          </div>
          {/*  */}
          <div className='flex justify-center items-center gap-10 flex-wrap'>
            <div className='w-[400px] h-[212px] flex justify-center items-center flex-col gap-4'>
              <Image src={logo} alt="Logo" width={40} height={40} className="object-contain" />
              <p className='font-semibold text-2xl text-center'>Connect with Verified Organizations Effortlessly</p>
              <p className='text-base font-light text-center'>We ensure that all organizations on our platform are thoroughly vetted.</p>
            </div>
             <div className='w-[400px] h-[212px] flex justify-center items-center flex-col gap-4'>
              <Image src={logo} alt="Logo" width={40} height={40} className="object-contain" />
              <p className='font-semibold text-2xl text-center'>Experience Full Transparency<br/> in Donation</p>
              <p className='text-base font-light text-center'>Stay informed with detailed reports on your doantions.</p>
            </div>
             <div className='w-[400px] h-[212px] flex justify-center items-center flex-col gap-4'>
              <Image src={logo} alt="Logo" width={40} height={40} className="object-contain" />
              <p className='font-semibold text-2xl text-center'>Join a Community of Compassionate Donors</p>
              <p className='text-base font-light text-center'>Be part of a growing network dedicated to making a difference.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
