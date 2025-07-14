"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import EventListingCard from "./event-listing-card";
import DonateFormPopUp, { DonateFormData } from "../form/donate-form-popup";
import { useEffect, useState } from "react";
import useDonateStore from "@/store/donateStore";
import { Calendar } from "lucide-react";
import { Event, GetAllEventsResponse } from "../../types/Event";
import PaginationUI from "@/components/common/pagination-ui";

const events = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/40/85/3e/40853ed84d06a00e8cdff97d54d19d6c.jpg",
    orgName: "Helping Hands Foundation",
    target: "$50,000",
    title: "Support Families in Crisis",
    description:
      "Your donation helps provide food, shelter, and education to families displaced by conflict and natural disasters. Every contribution gives children a safer place to sleep and hope for a better tomorrow. Together, we can rebuild communities and restore dignity to those affected.",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/41/d8/c5/41d8c5fe6252221ba0d63d60c029a4d4.jpg",
    orgName: "Green Earth Initiative",
    target: "$25,000",
    title: "Plant Trees, Protect the Future",
    description:
      "Help us plant 10,000 trees this year to combat deforestation and climate change in vulnerable regions. Each tree planted helps purify the air, stabilize the climate, and create habitats for endangered species. Be a part of a greener, healthier planet.",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/736x/0f/54/76/0f5476613757a50da5068eeca596a9e9.jpg",
    orgName: "Bright Minds Education",
    target: "$15,000",
    title: "Educate the Next Generation",
    description:
      "Sponsor school supplies and scholarships for underprivileged children in rural areas. Education is the most powerful tool for change—your support can break the cycle of poverty and empower children to reach their full potential.",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/dd/cb/36/ddcb361a6f93e2518268638305e528ba.jpg",
    orgName: "Water for All",
    target: "$35,000",
    title: "Clean Water, Healthy Lives",
    description:
      "Fund the construction of clean water wells for communities without access to safe drinking water. Clean water prevents disease, supports education, and transforms entire villages. Your gift helps save lives and bring health to the most vulnerable.",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/736x/de/ea/33/deea33b33262ef4788483f82bf1a4842.jpg",
    orgName: "Animal Rescue Alliance",
    target: "$10,000",
    title: "Give Animals a Second Chance",
    description:
      "Support rescue operations, medical care, and shelter for abandoned and injured animals. Your help ensures they receive love, proper nutrition, and the chance to be adopted into safe and caring homes. Every animal deserves compassion and a second chance.",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/736x/de/ea/33/deea33b33262ef4788483f82bf1a4842.jpg",
    orgName: "Animal Rescue Alliance",
    target: "$10,000",
    title: "Give Animals a Second Chance",
    description:
      "Support rescue operations, medical care, and shelter for abandoned and injured animals. Your help ensures they receive love, proper nutrition, and the chance to be adopted into safe and caring homes. Every animal deserves compassion and a second chance.",
  },
];

type EventListingProps = {
  data: GetAllEventsResponse | undefined;
  page: number;
  setPage?: (newPage: number) => void;
};

function EventListing({ data, page, setPage }: EventListingProps) {
  const { donateFormData, setDonateForm } = useDonateStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "auto";

    console.log(donateFormData);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible, donateFormData]);

  return (
    <>
      {data && data?.results?.length !== 0 ? (
        <section>
          <DonateFormPopUp
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            data={donateFormData}
            setData={setDonateForm}
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 my-3 sm:gap-18 mb-6 gap-2 w-full justify-center">
            {data?.results.map((event) => (
              <EventListingCard
                key={event.id}
                data={event}
                setFormData={setDonateForm}
                setIsVisible={setIsVisible}
              />
            ))}
          </div>
          <div>
            <PaginationUI
              page={page}
              totalCount={data.count}
              isNext={data.next ? true : false}
              isPrevious={data.previous ? true : false}
              limit={7}
              setPage={setPage}
            />
          </div>
        </section>
      ) : (
        <div className="h-dvh flex justify-center items-center animate-fade-in bg-neutral-50">
          <div className=" flex text-neutral-500 flex-col items-center justify-center">
            <Calendar size={40} />
            <p className="text-lg">No events found</p>
          </div>
        </div>
      )}
    </>
  );
}

export default EventListing;
