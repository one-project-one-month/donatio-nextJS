"use client";

import NodataBlock from "@/components/common/no-data-block";
import PaginationUI from "@/components/common/pagination-ui";
import { useDonationForm } from "@/hooks/use-donation-form";
import { GetAllEventsResponse } from "@/types/Event";
import DonateFormPopUp from "../form/donate-form-popup";
import EventListingCard from "./event-listing-card";

type EventListingProps = {
  data: GetAllEventsResponse | undefined;
  page: number;
  setPage?: (newPage: number) => void;
};

function EventListing({ data, page, setPage }: EventListingProps) {
  const { donationData, openDonationForm, setDonationData } = useDonationForm();

  return (
    <>
      {data && data?.results?.length !== 0 ? (
        <section>
          <DonateFormPopUp data={donationData} setData={setDonationData} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-3 mb-6 w-full">
            {data?.results.map((event) => (
              <EventListingCard
                key={event.id}
                data={event}
                openForm={() =>
                  openDonationForm({
                    organization: event.organization.name,
                    event: event.title,
                    orgId: event.organization.id,
                    eventId: event.id,
                  })
                }
              />
            ))}
          </div>
          <div>
            <PaginationUI
              page={page}
              totalCount={data.count}
              isNext={!!data.next}
              isPrevious={!!data.previous}
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
