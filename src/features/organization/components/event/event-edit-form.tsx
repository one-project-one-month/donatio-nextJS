"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FilePlus2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import FormInput from "@/components/common/form-inputs/form-inputs";
import FormTextAreaInput from "@/components/common/form-inputs/form-textarea-input";
import FormFileDropZone from "@/components/common/form-inputs/form-file-drop";
import FormDefaultDateInput from "@/components/common/form-inputs/form-date-default-input";

import { Event } from "@/types/Event";
import { useUpdateEvent } from "../../hooks/organization-event-queries";

// schema for event form validation
const eventFormSchema = z.object({
  title: z.string().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  image: z.any().optional(),
  target_amount: z.string().optional(),
  content: z.string().optional(),
  status: z.enum(["open", "closed"]).optional(),
})
  .refine(
    (data) => {
      if (!data.startDate || !data.endDate) return true;
      return data.endDate > data.startDate;
    },
    {
      message: "End date must be after start date",
      path: ["endDate"],
    }
  );

type EventValues = z.infer<typeof eventFormSchema>;

type EventEditFormProps = {
  initialData: Event | null;
  isView?: boolean;
  setOpenEdit?: React.Dispatch<React.SetStateAction<boolean>>;
};

function EventEditForm({ initialData, isView, setOpenEdit }: EventEditFormProps) {
  const form = useForm<EventValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      title: initialData?.title || "",
      startDate: initialData?.start_date ? new Date(initialData.start_date) : undefined,
      endDate: initialData?.end_date ? new Date(initialData.end_date) : undefined,
      target_amount: initialData?.target_amount || "",
      image: [],
      content: initialData?.description || "",
      status: (initialData?.status as "open" | "closed") || "open",
    },
  });

  const { updateEvent } = useUpdateEvent();

  useEffect(() => {
    if (initialData) {
      form.reset({
        title: initialData.title ?? "",
        startDate: initialData.start_date ? new Date(initialData.start_date) : undefined,
        endDate: initialData.end_date ? new Date(initialData.end_date) : undefined,
        image: initialData.attachments?.map((at) => at.file) ?? [],
        target_amount: initialData.target_amount ?? "",
        content: initialData.description ?? "",
        status: (initialData.status as "open" | "closed") ?? "open",
      });
    }
  }, [initialData, form]);

  const onSubmit = (data: EventValues) => {
    console.log("Form data before submission:", data);
    const formData = new FormData();
    formData.append("title", data.title || "");
    formData.append(
      "start_date",
      data.startDate?.toISOString() || initialData?.start_date || ""
    );
    formData.append(
      "end_date",
      data.endDate?.toISOString() || initialData?.end_date || ""
    );
    formData.append("description", data.content || "");
    formData.append("target_amount", data.target_amount || "");
    formData.append("status", data.status || initialData?.status || "open");

    if (data.image?.length) {
      for (const file of data.image) {
        formData.append("upload_attachments", file);
      }
    }

    updateEvent({ id: initialData?.id ?? "", data: formData });
    setOpenEdit?.(false);
    form.reset();
  };

  return (
    <ScrollArea className="h-dvh">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-8">
          <h1 className="text-3xl font-semibold text-primary mb-8">
            {isView ? "View Event" : "Edit Event"}
          </h1>

          <FormInput
            form={form}
            name="title"
            label="Title"
            labelClass="md:text-lg font-semibold mb-1"
            wrapperClass="mb-5"
            className="h-12"
            placeholder="Enter event title"
            disabled={isView}
          />

          <FormDefaultDateInput
            form={form}
            name="startDate"
            label="Start Date"
            type="date"
            labelClass="md:text-lg font-semibold mb-1"
            wrapperClass="mb-5"
            className="h-12"
            placeholder="Enter start date"
            required={!isView}
            isView={isView}
          />

          <FormDefaultDateInput
            form={form}
            name="endDate"
            label="End Date"
            type="date"
            labelClass="md:text-lg font-semibold mb-1"
            wrapperClass="mb-5"
            className="h-12"
            placeholder="Enter end date"
            required={!isView}
            isView={isView}
          />

          <FormInput
            form={form}
            name="target_amount"
            label="Target Amount"
            labelClass="md:text-lg font-semibold mb-1"
            wrapperClass="mb-5"
            className="h-12"
            placeholder="Enter target amount"
            disabled={isView}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <div className="mb-5">
                <label className="md:text-lg font-semibold mb-1 block text-neutral-800">
                  Status {!isView && <span className="text-red-500">*</span>}
                </label>
                <select
                  {...field}
                  disabled={isView}
                  className="w-full h-12 border rounded-md px-3 text-sm disabled:opacity-70"
                >
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            )}
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
            defaultFiles={initialData?.attachments.map((f) => f.file)}
            disabled={isView}
          />

          <FormTextAreaInput
            form={form}
            name="content"
            label="Content"
            labelClass="md:text-lg font-semibold mb-1"
            wrapperClass="mb-5"
            placeholder="Enter detailed content"
            className="h-32"
            disabled={isView}
          />

          {!isView && (
            <Button className="w-full rounded-full text-lg py-6 md:py-8 md:mt-5">
              Save Changes
            </Button>
          )}
        </form>
      </Form>
    </ScrollArea>
  );
}

export default EventEditForm;
