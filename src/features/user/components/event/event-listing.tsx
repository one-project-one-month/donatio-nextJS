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
import { GetAllEventsResponse } from "../../../../types/Event";
import PaginationUI from "@/components/common/pagination-ui";
import NodataBlock from "@/components/common/no-data-block";


type EventListingProps = {
  data: GetAllEventsResponse | null;
  page: number;
  setPage?: (newPage: number) => void;
};

function EventListing({ data, page, setPage }: EventListingProps) {
  const { donateFormData, setDonateForm } = useDonateStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "auto";

    if (!donateFormData) {
      setIsVisible(false);
    }

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
        <NodataBlock value="events" />
      )}
    </>
  );
}

export default EventListing;
