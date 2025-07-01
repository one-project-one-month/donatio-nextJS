'use client'

import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card } from '@/components/ui/card'
import Autoplay from 'embla-carousel-autoplay'

import ahluLogo from '@/assets/image/ahlu.webp'
import thukhaLogo from '@/assets/image/thukha.png'
import thitsaLogo from '@/assets/image/thitsa.webp'
import yinkhwinLogo from '@/assets/image/yinkhwin.jpg'

const partners = [
    { name: 'Ahlu Myanmar', src: ahluLogo },
    { name: 'Thukha Dana', src: thukhaLogo },
    { name: 'Thitsa Foundation', src: thitsaLogo },
    { name: 'Yin Khwin Aid', src: yinkhwinLogo },
    { name: 'Ahlu Myanmar', src: ahluLogo },
    { name: 'Thukha Dana', src: thukhaLogo },
    { name: 'Thitsa Foundation', src: thitsaLogo },
    { name: 'Yin Khwin Aid', src: yinkhwinLogo },
]

export default function MeetTheChangeMakers() {
    return (
        <section className="bg-primary/5 py-16 w-full">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-semibold text-blue-500 mb-10">
                    Meet the Change-Makers.
                </h2>

                <Carousel
                    opts={{ align: 'start', loop: true }}
                    className="w-full"
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                >
                    <CarouselContent className="ml-1 -mr-4">
                        {partners.map((partner, i) => (
                            <CarouselItem
                                key={i}
                                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                            >
                                <Card className="p-6 flex flex-col items-center justify-center gap-4 shadow rounded-xl h-[230px]">
                                    <Image
                                        src={partner.src}
                                        alt={partner.name}
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </Card>
                                <p className="text-gray-800 text-2xl md:text-xl font-medium text-center mt-3">
                                    {partner.name}
                                </p>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center mt-6 gap-4">
                        <CarouselPrevious className="bg-gray-200 text-gray-700 hover:bg-gray-300" />
                        <CarouselNext className="bg-blue-500 text-white hover:bg-blue-600" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
