"use client";
import { Button } from "@/components/ui/button";
import DonateFormPopUp, {
  DonateFormData,
} from "@/features/user/components/form/donate-form-popup";
import { useState } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const [donateData, setDonateData] = useState<DonateFormData | null>();
  return (
    <div className="flex gap-4 justify-end">
      <Button
        variant="outline"
        className="rounded-3xl font-medium !px-8 !py-6  border-dodger-blue-600 text-dodger-blue-600 hover:bg-dodger-blue-600 hover:text-white"
      >
        See activities
      </Button>
      <Button
        className="rounded-3xl font-medium !px-8 !py-6"
        onClick={() => setIsVisible(true)}
      >
        Donate Now
      </Button>
      <DonateFormPopUp
        data={{
          organization: organizationName,
          event: eventTitle,
          amount: 0,
          phoneNumber: "",
          screenShot: undefined,
          orgId,
          eventId,
        }}
        setData={setDonateData}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </div>
  );
};

export default EventActions;
