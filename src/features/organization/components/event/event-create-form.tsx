"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FilePlus2 } from "lucide-react";
import FormInput from "@/components/common/form-inputs/form-inputs";
import { z } from "zod";
import FormFileDropZone from "@/components/common/form-inputs/form-file-drop";
import { ScrollArea } from "@/components/ui/scroll-area";
import FormDateInput from "@/components/common/form-inputs/form-date-input";
import FormTextAreaInput from "@/components/common/form-inputs/form-textarea-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateEvent } from "../../hooks/organization-event-queries";

// schema for event form validation
const eventFormSchema = z.object({
  title: z.string().nonempty("Title shouldn't be empty"),
  startDate: z.date(),
  endDate: z.date(),
  goalAmount: z
    .string()
    .refine(
      (val) => {
        const num = Number(val);
        return !isNaN(num) && num > 0 && num >= 1000000;
      },
      {
        message: "Target Amount must be at least 10,000,00 Kyat",
      }
    ),
  image: z
    .any(),
  content: z.string().min(1, "Content is required"),
});
type EventFormValues = z.infer<typeof eventFormSchema>;

function EventCreateForm() {
const { createEvent } = useCreateEvent();

  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      title: "",
      startDate: new Date(),
      endDate: new Date(),
      image: undefined,
      content: "",
    },
  });

  const onSubmit = (data: EventFormValues) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("startDate", data.startDate.toISOString());
    formData.append("endDate", data.endDate.toISOString());
    formData.append("goalAmount", data.goalAmount);
    if (data.image) {
      formData.append("image", data.image);
    }
    const formattedData = {
      title: data.title,
      start_date: data.startDate.toISOString(),
      end_date: data.endDate.toISOString(),
      target_amount: data.goalAmount,
      description: data.content,
      attachments: data.image ? [data.image] : [],
    };
    createEvent(formattedData);
    form.reset();
  };

  return (
    <ScrollArea className="h-dvh">
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-8">
        <h1 className="text-3xl font-semibold text-primary mb-8">Create New Event</h1>
        <FormInput
          form={form}
          name="title"
          label="Title"
          labelClass="md:text-lg font-semibold mb-1"
          wrapperClass="mb-5 mb:mb-3"
          className="h-12"
          placeholder="Enter event title"
          required
        />
        <FormDateInput
          form={form}
          name="startDate"
          label="Start Date"
          type="date"
          labelClass="md:text-lg font-semibold mb-1"
          wrapperClass="mb-5 mb:mb-3"
          className="h-12"
          placeholder="Enter start date"
          required
        />
        <FormDateInput
          form={form}
          name="endDate"
          type="date"
          label="End Date"
          labelClass="md:text-lg font-semibold mb-1"
          wrapperClass="mb-5 mb:mb-3"
          className="h-12"
          placeholder="Enter end date"
          required
        />
        <FormInput
          form={form}
          type="number"
          name="goalAmount"
          label="Goal Amount"
          labelClass="md:text-lg font-semibold mb-1"
          wrapperClass="mb-5 mb:mb-3"
          className="h-12"
          placeholder="Enter target amount"
          required
        />
        <FormFileDropZone
            name="image"
            type="file"
            form={form}
            label={
              <span className="flex items-center gap-2">
                <FilePlus2 className="w-5 h-5 text-primary" />
                Upload Attachments
              </span>
            }
            labelClass="mb-1 font-semibold text-base"
            wrapperClass="mb-3"
            required
          />
          <FormTextAreaInput
          form={form}
          name="content"
          label="Content"
          labelClass="md:text-lg font-semibold mb-1"
          wrapperClass="mb-5 mb:mb-3"
          placeholder="Enter detail content"
          className="h-12"
          required
        />
        <Button className="w-full rounded-full text-lg py-6 md:py-8 md:mt-5">
            Create
          </Button>
      </form>
    </Form>
    </ScrollArea>
  );
}

export default EventCreateForm;
