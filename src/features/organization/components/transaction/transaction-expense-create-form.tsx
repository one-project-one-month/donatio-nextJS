"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FilePlus2 } from "lucide-react";
import FormInput from "@/components/common/form-inputs/form-inputs";
import { z } from "zod";
import FormFileDropZone from "@/components/common/form-inputs/form-file-drop";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateTransaction } from "../../hooks/organization-transaction-queries";

const TransactionExpenseCreateFormSchema = z.object({
  title: z.string().nonempty("Title shouldn't be empty"),
  amount: z
    .string()
    .refine(
      (val) => {
        const num = Number(val);
        return !isNaN(num) && num > 0 && num >= 10000;
      },
      {
        message: "Amount must be at least 10,000 Kyat",
      }
    ),
  image: z
    .any().refine((val) => {
    return (
      val && val.length > 0 && val.every((file: File) => file instanceof File)
    );
  }, "Image shouldn't be empty"),
});

type TransactionExpenseCreateFormValues = z.infer<typeof TransactionExpenseCreateFormSchema>;

type TransactionExpenseCreateFormProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function TransactionExpenseCreateForm({ setIsOpen }: TransactionExpenseCreateFormProps) {
  const form = useForm<TransactionExpenseCreateFormValues>({
    resolver: zodResolver(TransactionExpenseCreateFormSchema),
    defaultValues: {
      title: "",
      amount: "",
      image: undefined,
    },
  });

  const { createTransaction } = useCreateTransaction();

  const handleCreate = async (data: TransactionExpenseCreateFormValues) => {

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("amount", data.amount);
    formData.append("type", "disbursement");

    for (const file of data.image) {
      formData.append("uploaded_attachments", file);
    }

    await createTransaction({ data: formData, id: ""});
    form.reset();
    setIsOpen(false);
  };

  return (
    <div>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(handleCreate)} className="space-y-4 p-8">
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
        <FormInput
          form={form}
          type="number"
          name="amount"
          label="Amount"
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
                Upload Receipt Screenshot
              </span>
            }
            labelClass="mb-1 font-semibold text-base"
            wrapperClass="mb-3"
            required
          />
        <Button className="w-full rounded-full text-lg py-6 md:py-8 md:mt-5">
            Create
          </Button>
      </form>
    </Form>
    </div>
  );
}

export default TransactionExpenseCreateForm;
