import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import ahluLogo from "@/assets/image/ahlu.webp";
import thitsaLogo from "@/assets/image/thitsa.webp";
import thukhaLogo from "@/assets/image/thukha.png";
import yinkhwinLogo from "@/assets/image/yinkhwin.jpg";
import PageSection from "../common/page-section";

const partners = [
  { name: "Ahlu Myanmar", src: ahluLogo },
  { name: "Thukha Dana", src: thukhaLogo },
  { name: "Thitsa Foundation", src: thitsaLogo },
  { name: "Yin Khwin Aid", src: yinkhwinLogo },
  { name: "Ahlu Myanmar", src: ahluLogo },
  { name: "Thukha Dana", src: thukhaLogo },
  { name: "Thitsa Foundation", src: thitsaLogo },
  { name: "Yin Khwin Aid", src: yinkhwinLogo },
];

export default function ChangeMakersSection() {
  return (
    <PageSection className="bg-primary/4">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-10">
          Meet the Change-Makers
        </h2>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent className="-ml-4">
            {partners.map((partner, i) => (
              <CarouselItem
                key={i}
                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="p-4 flex flex-col items-center justify-center gap-4 shadow rounded-xl h-full aspect-square">
                  <div className="flex-grow flex items-center justify-center">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-contain"
                    />
                  </div>
                  <p className="text-foreground text-sm md:text-xl font-medium text-center">
                    {partner.name}
                  </p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/75" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/75" />
        </Carousel>
      </div>
    </PageSection>
  );
}
