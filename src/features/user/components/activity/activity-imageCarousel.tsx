/* eslint-disable @next/next/no-img-element */
"use client"
import * as React from "react"
import { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ActivityAttachmentCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0)
  const carouselRef = React.useRef<HTMLDivElement>(null)

  const handleDotClick = (index: number) => {
    const container = carouselRef.current?.querySelector(
      "[data-carousel-content]"
    ) as HTMLDivElement

    if (container) {
      const itemWidth = container.scrollWidth / images.length
      container.scrollTo({ left: index * itemWidth, behavior: "smooth" })
      setCurrent(index)
    }
  }

  const handleScroll = () => {
    const container = carouselRef.current?.querySelector(
      "[data-carousel-content]"
    ) as HTMLDivElement

    if (container) {
      const scrollLeft = container.scrollLeft
      const itemWidth = container.scrollWidth / images.length
      const index = Math.round(scrollLeft / itemWidth)
      setCurrent(index)
    }
  }

  return (
    <div className="w-full relative" ref={carouselRef}>
      <Carousel className="w-full">
        <CarouselContent
          className="w-full"
          data-carousel-content
          onScroll={handleScroll}
        >
          {images.map((url, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="p-2 w-full relative">
                <Card className="w-full overflow-hidden p-0 rounded-sm relative">
                  <CardContent className="p-0 w-full h-full relative">
                    <img
                      src={url}
                      alt={`Image ${index + 1}`}
                      className="w-full h-[500px] rounded-sm object-cover  rounded-md"
                    />

                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-black shadow-md pointer-events-auto" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-black shadow-md pointer-events-auto" />

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                      {images.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={() => handleDotClick(dotIndex)}
                          className={`h-2 w-2 rounded-full transition-colors duration-300 ${current === dotIndex ? "bg-white" : "bg-white/50"
                            }`}
                          aria-label={`Go to slide ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
