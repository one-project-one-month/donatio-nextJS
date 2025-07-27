"use client";
import { Button } from "@/components/ui/button";
import DonateFormPopUp from "@/features/user/components/form/donate-form-popup";
import { useDonationForm } from "@/hooks/use-donation-form";

interface EventActionsProps {
  organizationName: string;
  eventTitle: string;
  orgId: string;
  eventId: string;
}

const EventActions = ({
  organizationName,
  eventTitle,
  orgId,
  eventId,
}: EventActionsProps) => {
  const { donationData, openDonationForm, setDonationData } = useDonationForm();

  const handleDonateClick = () => {
    openDonationForm({
      organization: organizationName,
      event: eventTitle,
      orgId,
      eventId,
    });
  };

  return (
    <div className="flex gap-4 justify-end">
      <Button
        variant="outline"
        className="rounded-3xl font-medium cursor-pointer !px-8 !py-6  border-dodger-blue-600 text-dodger-blue-600 hover:bg-dodger-blue-600 hover:text-white"
      >
        See activities
      </Button>
      <Button
        className="rounded-3xl font-medium !px-8 !py-6 cursor-pointer"
        onClick={handleDonateClick}
      >
        Donate Now
      </Button>
      <DonateFormPopUp
        data={donationData}
        setData={setDonationData}
      />
    </div>
  );
};

export default EventActions;
