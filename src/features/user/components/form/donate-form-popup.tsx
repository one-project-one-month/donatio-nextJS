"use client";

import React, { useState } from "react";
import DonateForm1 from "@/features/user/components/form/donate-form-1";
import DonateForm2 from "@/features/user/components/form/donate-form-2";
import DonateForm3 from "@/features/user/components/form/donate-form-3";
import FormStepper from "@/components/common/form-stepper";
import useDonateStore from "@/store/donateStore";

export type DonateFormData = {
  organization: string;
  event: string;
  amount: number;
  phoneNumber: string;
  screenShot: File | undefined;
};

type DonateFormPopUpProps = {
    data: DonateFormData | null;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setData: (data: any) => void;
    isVisible: boolean;
}

function DonateFormPopUp({ data, setData, setIsVisible, isVisible }:DonateFormPopUpProps) {
  const [formIndex, setFormIndex] = useState<number>(1);


  const handleClosePopUp = () => {
    setIsVisible(false);
    setData(null);
    setFormIndex(1);
  }

  return (
    <>
    {
      isVisible && <div onClick={handleClosePopUp} className="fixed z-50 bg-black/40 top-0 left-0 w-full h-dvh flex items-center justify-center">
      {/* donate form tabs */}
      <div onClick={(e) => {
        e.stopPropagation()
      }} className="w-full max-w-[35rem] bg-white rounded-2xl p-5 m-2">
        <FormStepper totalStep={3} captions={["Donation detail", "Upload Recipte", "Comfirmation"]} formIndex={formIndex} />
        {formIndex === 1 && (
          <DonateForm1
            formData={data}
            setFormData={setData}
            setFormIndex={setFormIndex}
          />
        )}
        {formIndex === 2 && (
          <DonateForm2 setFormData={setData} setFormIndex={setFormIndex} />
        )}
        {formIndex === 3 && <DonateForm3 formData={data} />}
      </div>
    </div>
    }
    </>
  );
}

export default DonateFormPopUp;
