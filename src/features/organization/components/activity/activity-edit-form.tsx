"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FilePlus2 } from "lucide-react";
import FormInput from "@/components/common/form-inputs/form-inputs";
import { z } from "zod";
import FormFileDropZone from "@/components/common/form-inputs/form-file-drop";
import { ScrollArea } from "@/components/ui/scroll-area";
import FormTextAreaInput from "@/components/common/form-inputs/form-textarea-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Activity } from "@/types/Activity";
import TransactionAttachmentInput from "../util/transaction-attachment-input";
import { useUpadateActivity } from "../../hooks/organization-activity-queries";

const activityFormSchema = z.object({
  title: z.string().nonempty("Title shouldn't be empty"),
  location: z.string().nonempty("Location shouldn't be empty"),
  transactions: z
    .array(z.any()).min(1, "At least one transaction is required"),
  image: z.any().refine((val) => {
    return val && val.length > 0 && val.every((file: File) => file instanceof File);
  }, "Image shouldn't be empty"),
  description: z.string().min(1, "Content is required"),
});

type ActivityValues = z.infer<typeof activityFormSchema>;

type ActivityEditFormProps = {
  initialData: Activity | null; 
};

function ActivityEditForm({ initialData }: ActivityEditFormProps) {
  const form = useForm<ActivityValues>({
    resolver: zodResolver(activityFormSchema),
    defaultValues: {
      title: initialData?.title || "",
      location: initialData?.location || "",
      transactions: initialData?.activity_transactions.map((at) => {
        return { title: at.transaction.title, id: at.transaction.id }
      }) || [],
      image: initialData?.attachments.map((at) => at.file),
      description: initialData?.description || "",
    },
  });

  const { updateActivity } = useUpadateActivity();

  const onSubmit = (data: ActivityValues) => {


    // const oldData = {
    //   title: initialData?.title || "",
    //   location: initialData?.location || "",
    //   transactions: initialData?.activity_transactions.map((at) => {
    //     return { title: at.transaction.title, id: at.transaction.id }
    //   }) || [],
    //   image: initialData?.attachments.map((at) => at.file),
    //   description: initialData?.description || "",
    // }

    // const changes = getChangedTo(oldData, data);

    // console.log('data', data);
    // console.log(changes);
    
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('location', data.location);
    

    for(const t of data.transactions) {
      formData.append('transaction_ids', t.id)
    }
    
    for(const file of data.image) {
      formData.append('upload_attachments', file);
    }

    updateActivity({ id: initialData?.id?? "", data: formData})

    form.reset();
  };

  return (
    <ScrollArea className="h-dvh">
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-8">
        <h1 className="text-3xl font-semibold text-primary mb-8">Edit New Activity</h1>
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
        <FormField
            name="transactions"
            control={form.control}
            render={({ field }) => (
              <TransactionAttachmentInput
                value={field.value}
                onChange={field.onChange}
              />
            )}
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
          name="description"
          label="Description"
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
