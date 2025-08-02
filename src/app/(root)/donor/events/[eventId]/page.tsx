"use client";
import BreadCrumbUI from "@/components/common/breadcrumb-ui";
import EventActions from "@/features/user/components/event-detail/event-actions";
import EventBanner from "@/features/user/components/event-detail/event-banner";
import EventDescription from "@/features/user/components/event-detail/event-description";
import EventHeader from "@/features/user/components/event-detail/event-header";
import EventDetailsSkeleton from "@/features/user/components/skeletons/event-details-skeleton";
import { useEventDetailQuery } from "@/features/user/hooks/use-event-detail-query";
import { useParams } from "next/navigation";

export default function EventDetails() {
  const params = useParams();
  const eventId = params.eventId as string;
  const { data: event, isLoading, isError } = useEventDetailQuery(eventId);

  if (isLoading) {
    return <EventDetailsSkeleton />;
  }

  if (isError || !event) {
    return <div>Error loading event details.</div>;
  }

  const {
    id,
    title,
    description,
    attachments,
    target_amount,
    organization,
    start_date,
    end_date,
    current_amount
  } = event;

  const bannerUrl = attachments.length > 0 ? attachments[0].file : null;

  return (
    <div className="w-full p-4">
      <div className="space-y-6">
        <BreadCrumbUI
          links={[{ name: "Events", path: "/donor/events" }]}
          currentPageTitle={title}
        />
        <EventBanner bannerUrl={bannerUrl} />
        <EventHeader
          title={title}
          organization={organization}
          target_amount={target_amount}
          current_amount={current_amount}
          start_date={start_date}
          end_date={end_date}
        />
        <EventActions
          organizationName={organization.name}
          eventTitle={title}
          orgId={organization.id}
          eventId={id}
        />
        <EventDescription description={description} />
      </div>
    </div>
  );
}
