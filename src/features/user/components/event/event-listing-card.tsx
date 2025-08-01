"use client";

import { Button } from "@/components/ui/button";
import AppConfig from "@/lib/appConfig";
import { Event } from "@/types/Event";
import Image from "next/image";
import Link from "next/link";

import EventPlaceholder1 from "@/assets/image/event1.png";
import EventPlaceholder2 from "@/assets/image/event2.png";
import EventPlaceholder3 from "@/assets/image/event3.png";
import { formatCurrency } from "@/utils/formatCurrency";
import { getRandomPlaceholder } from "@/utils/getRandomPlaceholder";

const DESCRIPTION_TRUNCATE_LENGTH = 150;
const placeholderImages = [
  EventPlaceholder1,
  EventPlaceholder2,
  EventPlaceholder3,
];

function EventListingCard({
  data,
  openForm,
}: {
  data: Event;
  openForm: () => void;
}) {
  const imageUrl =
    data.attachments.length > 0
      ? `${AppConfig.BASE_URL}/${data.attachments[0]}`
      : getRandomPlaceholder(placeholderImages);

  const isLongDescription =
    data.description.length > DESCRIPTION_TRUNCATE_LENGTH;

  return (
    <div className="flex flex-col justify-between">
      <Link href={`/donor/events/${data.id}`} className="flex flex-col h-full">
        <div className="relative h-64 w-full rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex justify-between text-sm my-3">
          <div className="text-neutral-500">{data?.organization.name}</div>
          <span className="text-dodger-blue-600 font-medium">
            {formatCurrency(Number(data.target_amount))} MMK
          </span>
        </div>

        <div className="flex-grow">
          <h3 className="font-medium text-xl md:text-2xl">{data?.title}</h3>
          <p className="my-3 text-neutral-600 text-justify text-sm md:text-base">
            {isLongDescription ? (
              <>
                {`${data.description.substring(
                  0,
                  DESCRIPTION_TRUNCATE_LENGTH
                )}... `}
                <span className="text-blue-500 hover:underline font-semibold">
                  see more
                </span>
              </>
            ) : (
              data.description
            )}
          </p>
        </div>
      </Link>

      <Button
        onClick={(e) => {
          e.stopPropagation();
          openForm();
        }}
        className="mt-auto w-full cursor-pointer p-4 text-base md:p-6 md:text-lg"
      >
        Donate Now
      </Button>
    </div>
  );
}

export default EventListingCard;
