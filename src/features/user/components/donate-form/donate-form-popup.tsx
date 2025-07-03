"use client";

import React, { useEffect, useState } from "react";
import DonateForm1 from "./donate-form-1";
import DonateForm2 from "./donate-form-2";
import DonateForm3 from "./donate-form-3";
import FormStepper from "@/components/common/form-stepper";

export type DonateFormData = {
  organization: string;
  event: string;
  amount: number;
  phoneNumber: string;
  screenShot: File | undefined;
};

type DonateFormPopUpProps = {
  data: DonateFormData;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
};

// aung pyae fixed that user can't scroll the page when form is popped-up

function DonateFormPopUp({
  data,
  setIsVisible,
  isVisible,
}: DonateFormPopUpProps) {
  const [formData, setFormData] = useState<DonateFormData>(data);
  const [formIndex, setFormIndex] = useState<number>(1);

  // ✅ Lock scroll when popup is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      onClick={() => setIsVisible(false)}
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[35rem] bg-white rounded-2xl p-5 relative"
      >
        {/* Close Button (optional) */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-lg"
        >
          &times;
        </button>

        {/* Stepper */}
        <FormStepper
          totalStep={3}
          captions={["Donation detail", "Upload Receipt", "Confirmation"]}
          formIndex={formIndex}
        />

        {/* Steps */}
        {formIndex === 1 && (
          <DonateForm1
            formData={formData}
            setFormData={setFormData}
            setFormIndex={setFormIndex}
          />
        )}
        {formIndex === 2 && (
          <DonateForm2 setFormData={setFormData} setFormIndex={setFormIndex} />
        )}
        {formIndex === 3 && <DonateForm3 formData={formData} />}
      </div>
    </div>
  );
}

export default DonateFormPopUp;
