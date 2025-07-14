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
import FormTextAreaInput from "@/components/common/form-inputs/form-textarea-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActivityTableData } from "../../types/Activity";

const activityFormSchema = z.object({
  title: z.string().nonempty("Title shouldn't be empty"),
  location: z.string().nonempty("Location shouldn't be empty"),
  image: z.any().refine((val) => {
    return val && val.length > 0 && val.every((file: File) => file instanceof File);
  }, "Image shouldn't be empty"),
  content: z.string().min(1, "Content is required"),
});

type ActivityValues = z.infer<typeof activityFormSchema>;

type ActivityEditFormProps = {
  initialData: ActivityTableData | null; 
};

function ActivityEditForm({ initialData }: ActivityEditFormProps) {
  const form = useForm<ActivityValues>({
    resolver: zodResolver(activityFormSchema),
    defaultValues: {
      title: initialData?.title || "",
      location: initialData?.location || "",
      image: undefined,
      content: initialData?.content || "",
    },
  });

  const onSubmit = (data: ActivityValues) => {
    // handle form submission
    console.log(data);
  };

  return (
    <ScrollArea className="h-dvh">
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-8">
        <h1 className="text-3xl font-semibold text-primary mb-8">Create New Activity</h1>
        <FormInput
          form={form}
          name="title"
          label="Title"
          labelClass="md:text-lg font-semibold mb-1"
          wrapperClass="mb-5 mb:mb-3"
          className="h-12"
          placeholder="Enter activity title"
          required
        />
        <FormInput
          form={form}
          name="location"
          label="Location"
          labelClass="md:text-lg font-semibold mb-1"
          wrapperClass="mb-5 mb:mb-3"
          className="h-12"
          placeholder="Enter activity location"
          required
        />
        <FormFileDropZone
            name="image"
            type="file"
            form={form}
            label={
              <span className="flex items-center gap-2">
                <FilePlus2 className="w-5 h-5 text-primary" />
                Add Activity Photos
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
            Save Changes
          </Button>
      </form>
    </Form>
    </ScrollArea>
  );
}

export default ActivityEditForm;
