"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import EventCard from "./EventCard";

import event1 from "@/assets/image/event1.png";
import event2 from "@/assets/image/event2.png";
import event3 from "@/assets/image/event3.png";


const events = [
    {
        image: event1,
        org: "Dana Connect",
        title: "Rebuilding Hope: Post-Disaster Relief",
        description:
            "Help families recover from recent natural disasters. Your donation provides immediate aid, shelter, and long-term rebuilding support.",
        amount: "10,000,000 MMK",
    },
    {
        image: event2,
        org: "Ahlu Myanmar",
        title: "Empowering Futures: Youth Education Program",
        description:
            "This program provides school supplies, education, and mentorship for underprivileged children.",
        amount: "10,000,000 MMK",
    },
    {
        image: event3,
        org: "Thisa Foundation",
        title: "Green Initiatives: Reforestation & Conservation",
        description:
            "Focuses on large-scale tree planting and conservation efforts to protect ecosystems.",
        amount: "10,000,000 MMK",
    },
    {
        image: event1,
        org: "Dana Connect",
        title: "Rebuilding Hope: Post-Disaster Relief",
        description:
            "Help families recover from recent natural disasters. Your donation provides immediate aid, shelter, and long-term rebuilding support.",
        amount: "10,000,000 MMK",
    },
    {
        image: event2,
        org: "Ahlu Myanmar",
        title: "Empowering Futures: Youth Education Program",
        description:
            "This program provides school supplies, education, and mentorship for underprivileged children.",
        amount: "10,000,000 MMK",
    },
    {
        image: event3,
        org: "Thisa Foundation",
        title: "Green Initiatives: Reforestation & Conservation",
        description:
            "Focuses on large-scale tree planting and conservation efforts to protect ecosystems.",
        amount: "10,000,000 MMK",
    },
];

export default function EventsSection() {
    return (
        <section className="py-16 px-6 text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-10">
                Events You Can Support
            </h2>

            <Carousel className="w-full max-w-6xl mx-auto"
                opts={{ align: 'start', loop: true }}>
                <CarouselContent>
                    {events.map((event, idx) => (
                        <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                            <EventCard {...event} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-6">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </section>
    );
}
