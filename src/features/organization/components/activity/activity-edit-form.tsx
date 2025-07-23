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
  description: z.string().min(1, "Content is required"),
});

type ActivityValues = z.infer<typeof activityFormSchema>;

type ActivityEditFormProps = {
  initialData: Activity | null; 
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ActivityEditForm({ initialData, setIsOpen }: ActivityEditFormProps) {
  const form = useForm<ActivityValues>({
    resolver: zodResolver(activityFormSchema),
    defaultValues: {
      title: initialData?.title || "",
      location: initialData?.location || "",
      transactions: initialData?.activity_transactions.map((at) => {
        return { title: at.transaction.title, id: at.transaction.id }
      }) || [],
      description: initialData?.description || "",
    },
  });

  const { updateActivity } = useUpadateActivity();

  const onSubmit = async (data: ActivityValues) => {
    
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('location', data.location);
    

    for(const t of data.transactions) {
      formData.append('transaction_ids', t.id)
    }

    await updateActivity({ id: initialData?.id?? "", data: formData})
    setIsOpen(false);
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
          labelClass="md:text-lg font-semibold mb-1 dark:text-white"
          wrapperClass="mb-5 mb:mb-3"
          className="h-12"
          placeholder="Enter activity title"
          required
        />
        <FormInput
          form={form}
          name="location"
          label="Location"
          labelClass="md:text-lg font-semibold mb-1 dark:text-white"
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
          <FormTextAreaInput
          form={form}
          name="description"
          label="Description"
          labelClass="md:text-lg font-semibold mb-1 dark:text-white"
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
