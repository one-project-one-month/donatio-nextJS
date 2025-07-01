"use client"
import logo from '@/assets/image/logo.svg'
import Image from 'next/image'

export default function LogosCarousel() {
    return (
        <div className="w-full overflow-hidden">
            <div className="flex gap-40 animate-scroll px-2 py-4 w-max">
                {[...Array(10)].map((_, i) => (
                    <Image
                        key={i}
                        src={logo}
                        alt={`Sponsor Logo ${i + 1}`}
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                ))}
            </div>
            {/* Add keyframe style inline (for carousel) */}
            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
        </div>
    )
}
