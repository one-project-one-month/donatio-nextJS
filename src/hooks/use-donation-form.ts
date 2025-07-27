"use client";

import useDonateStore from "@/store/donateStore";
import { useEffect } from "react";

type DonationPayload = {
  orgId: string;
  eventId: string;
  organization: string;
  event: string;
};

/**
 * A custom hook to manage the state and lifecycle of the donation form.
 * It automatically handles cleaning up the form data when the component
 * that uses it unmounts, preventing state leaks between pages.
 */
export const useDonationForm = () => {
  const { donateFormData, setDonateForm } = useDonateStore();

  useEffect(() => {
    return () => {
      setDonateForm(null);
    };
  }, [setDonateForm]);

  const openForm = (payload: DonationPayload) => {
    setDonateForm({
      ...payload,
      amount: 0,
      phoneNumber: "",
      screenShot: undefined,
    });
  };

  return {
    donationData: donateFormData,
    openDonationForm: openForm,
    setDonationData: setDonateForm,
  };
};
