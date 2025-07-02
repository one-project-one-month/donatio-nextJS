import z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/common/form-inputs/form-inputs";
import { Button } from "@/components/ui/button";
import { DonateFormData } from "./donate-form-popup";
import FormFileDropZone from "@/components/common/form-inputs/form-file-drop";
import { useState } from "react";
import { Image, Trash2 } from "lucide-react";

const formOneSchema = z.object({
  organization: z
    .string()
    .min(2, "Organization Name must be at least 2 characters")
    .nonempty("Organization Name shouldn't be empty"),
  event: z
    .string()
    .min(2, "Event must be at least 2 characters")
    .nonempty("Event shouldn't be empty"),
  donationAmount: z.string().refine(
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
  screenShot: z
    .instanceof(File)
    .refine((file) => file.type === "image/jpeg" || file.type === "image/png", {
      message: "File must be a JPG or PNG image",
    }),
});

type formOneValue = z.infer<typeof formOneSchema>;

type DonateForm3Props = {
  formData: DonateFormData;
};

function DonateForm3({ formData }: DonateForm3Props) {
  const form = useForm<formOneValue>({
    resolver: zodResolver(formOneSchema),
    defaultValues: {
      organization: formData.organization,
      event: formData.event,
      donationAmount: String(formData.amount),
      phoneNumber: formData.phoneNumber,
      screenShot: formData.screenShot,
    },
  });

  const handleContinue = (data: formOneValue) => {
    console.log(data);
  };

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
            <FormFileDropZone
              name="screenShot"
              type="file"
              form={form}
              label="Upload Receipt Screenshot"
              labelClass="mb-1 font-semibold text-base"
              wrapperClass="mb-3"
              defaultFile={formData.screenShot}
            />
          <Button className="w-full rounded-full py-6 md:py-8 md:mt-5">
            Donate Now
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default DonateForm3;
