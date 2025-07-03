"use client";

import React, { useState } from "react";
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
}

function DonateFormPopUp({ data, setIsVisible, isVisible}:DonateFormPopUpProps) {
  const [formData, setFormData] = useState<DonateFormData>(data);
  const [formIndex, setFormIndex] = useState<number>(1);

  return (
    <>
    {
      isVisible && <div onClick={() => setIsVisible(false)} className="absolute bg-black/40 top-0 left-0 w-full h-full flex items-center justify-center">
      {/* donate form tabs */}
      <div onClick={(e) => {
        e.stopPropagation()
      }} className="w-full max-w-[35rem] bg-white rounded-2xl p-5 m-2">
        <FormStepper totalStep={3} captions={["Donation detail", "Upload Recipte", "Comfirmation"]} formIndex={formIndex} />
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
    }
    </>
  );
}

export default DonateFormPopUp;
