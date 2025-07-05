import z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/common/form-inputs/form-inputs";
import { Button } from "@/components/ui/button";
import React from "react";
import { DonateFormData } from "./donate-form-popup";

const formOneSchema = z.object({
  organization: z
    .string()
    .min(2, "Organization Name must be at least 2 characters")
    .nonempty("Organization Name shouldn't be empty"),
  event: z
    .string()
    .min(2, "Event must be at least 2 characters")
    .nonempty("Event shouldn't be empty"),
  donationAmount: z
    .string()
    .refine(
      (val) => {
        const num = Number(val);
        return !isNaN(num) && num > 0 && num >= 10000;
      },
      {
        message: "Donation Amount must be at least 10,000 Kyat",
      }
    ),
  phoneNumber: z
    .string()
    .regex(/^\d{10,15}$/, "Phone Number must be 10-15 digits"),
});

type formOneValue = z.infer<typeof formOneSchema>;

type DonateForm1Props = {
  formData: DonateFormData;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
  setFormData: React.Dispatch<React.SetStateAction<DonateFormData>>;
}

function DonateForm1({ formData, setFormIndex, setFormData}: DonateForm1Props) {
  const form = useForm<formOneValue>({
    resolver: zodResolver(formOneSchema),
    defaultValues: {
      organization: formData.organization,
      event: formData.event,
      donationAmount: "",
      phoneNumber: "",
    },
  });




  const handleContinue = (data: formOneValue) => {
    setFormIndex(2);
    setFormData((prev) => ({
      ...prev,
      ...data,
      amount: Number(data.donationAmount),
    }));
  }

  return (
    <div className="w-full p-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleContinue)}>
          <FormInput
            form={form}
            name="organization"
            label="Organization"
            labelClass="md:text-lg font-semibold mb-1"
            wrapperClass="mb-5 mb:mb-3"
            className="h-12"
            disabled
          />
          <FormInput
            form={form}
            name="event"
            label="Event"
            labelClass="md:text-lg font-semibold mb-1"
            wrapperClass="mb-5 mb:mb-3"
            className="h-12"
            disabled
          />
          <FormInput
            form={form}
            name="donationAmount"
            label="Amount"
            type="number"
            labelClass="md:text-lg font-semibold mb-1"
            wrapperClass="mb-5 mb:mb-3"
            placeholder="Enter amount"
            className="h-12"
            // registerOptions={{ setValueAs: (v: any) => v === "" ? undefined : Number(v) }}
          />
          <FormInput
            form={form}
            name="phoneNumber"
            label="KBZPay Phone Number"
            type="text"
            labelClass="md:text-lg font-semibold mb-1"
            wrapperClass="mb-5 mb:mb-3"
            placeholder="Enter phone number"
            className="h-12"
          />
          <Button className="w-full rounded-full py-6 md:py-8 md:mt-5">
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default DonateForm1;
