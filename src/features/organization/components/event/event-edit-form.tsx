"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FilePlus2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import FormInput from "@/components/common/form-inputs/form-inputs";
import FormTextAreaInput from "@/components/common/form-inputs/form-textarea-input";
import FormFileDropZone from "@/components/common/form-inputs/form-file-drop";
import { Event } from "@/types/Event";
import { useUpdateEvent } from "../../hooks/organization-event-queries";
import FormDateInput from "@/components/common/form-inputs/form-date-input";

const eventFormSchema = z.object({
  title: z.string().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  image: z
    .any()
    .optional(),
  // later to confirm
  // .refine(
  //   (val) =>
  //     !val ||
  //     (Array.isArray(val) &&
  //       val.length > 0 &&
  //       val.every((file: File) => file instanceof File)),
  //   "All uploaded files must be valid"
  // ),
  content: z.string().optional(),
});

type EventValues = z.infer<typeof eventFormSchema>;

type EventEditFormProps = {
  initialData: Event | null;
};

function EventEditForm({ initialData }: EventEditFormProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form = useForm<EventValues, any, EventValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      title: initialData?.title || "",
      startDate: initialData?.start_date,
      endDate: initialData?.end_date,
      image: [],
      content: initialData?.description || "",
    },
  });

  useEffect(() => {
    if (initialData) {
      form.reset({
        title: initialData.title ?? "",
        startDate: initialData.start_date
          ? new Date(initialData.start_date)
          : undefined,
        endDate: initialData.end_date
          ? new Date(initialData.end_date)
          : undefined,
        image: initialData.attachments?.map((at) => at.file) ?? [],
        content: initialData.description ?? "",
      });
    }
  }, [initialData, form]);

  const { updateEvent } = useUpdateEvent();

  const onSubmit = (data: EventValues) => {
    const formData = new FormData();
    formData.append("title", data.title || "");
    formData.append("start_date", data.startDate?.toISOString() || initialData?.start_date || "");
    formData.append("end_date", data.endDate?.toISOString() || initialData?.end_date || "");
    formData.append("description", data.content || "");

    if (data.image?.length) {
      for (const file of data.image) {
        formData.append("upload_attachments", file);
      }
    }

    console.log(data);
    updateEvent({ id: initialData?.id ?? "", data: formData });
    form.reset();
  };

  return (
    <ScrollArea className="h-dvh">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-8">
          <h1 className="text-3xl font-semibold text-primary mb-8">
            Edit Event
          </h1>

          <FormInput
            form={form}
            name="title"
            label="Title"
            labelClass="md:text-lg font-semibold mb-1"
            wrapperClass="mb-5 mb:mb-3"
            className="h-12"
            placeholder="Enter event title"
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
          />

          <FormDateInput
            form={form}
            name="endDate"
            label="End Date"
            type="date"
            labelClass="md:text-lg font-semibold mb-1"
            wrapperClass="mb-5 mb:mb-3"
            className="h-12"
            placeholder="Enter end date"
          />

          <FormFileDropZone
            name="image"
            type="file"
            form={form}
            label={
              <span className="flex items-center gap-2">
                <FilePlus2 className="w-5 h-5 text-primary" />
                Upload Event Images
              </span>
            }
            labelClass="mb-1 font-semibold text-base"
            wrapperClass="mb-3"
          />

          <FormTextAreaInput
            form={form}
            name="content"
            label="Content"
            labelClass="md:text-lg font-semibold mb-1"
            wrapperClass="mb-5 mb:mb-3"
            placeholder="Enter detailed content"
            className="h-32"
          />

          <Button className="w-full rounded-full text-lg py-6 md:py-8 md:mt-5">
            Save Changes
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
}

export default EventEditForm;
