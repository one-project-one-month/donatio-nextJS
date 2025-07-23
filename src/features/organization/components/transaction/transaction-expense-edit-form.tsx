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
import {
  useCreateTransaction,
  useUpadateTransactionData,
} from "../../hooks/organization-transaction-queries";
import { Transaction } from "@/types/Transaction";

const TransactionExpenseEditFormSchema = z.object({
  title: z.string().nonempty("Title shouldn't be empty"),
  amount: z.string().refine(
    (val) => {
      const num = Number(val);
      return !isNaN(num) && num > 0 && num >= 10000;
    },
    {
      message: "Amount must be at least 10,000 Kyat",
    }
  ),
  image: z.any().refine((val) => {
    return (
      val && val.length > 0 && val.every((file: File) => file instanceof File)
    );
  }, "Image shouldn't be empty"),
});

type TransactionExpenseEditFormValues = z.infer<
  typeof TransactionExpenseEditFormSchema
>;

type TransactionExpenseEditFormProps = {
  initialData: Transaction | null;
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  isView: boolean;
};

function TransactionExpenseEditForm({
  initialData,
  setOpenEdit,
  isView
}: TransactionExpenseEditFormProps) {
  const form = useForm<TransactionExpenseEditFormValues>({
    resolver: zodResolver(TransactionExpenseEditFormSchema),
    defaultValues: {
      title: initialData?.title,
      amount: initialData?.amount.split(".")[0],
      image: initialData?.attachments.map((f) => f.file),
    },
  });

  const { upadateTransaction } = useUpadateTransactionData();

  const handleCreate = async (data: TransactionExpenseEditFormValues) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("amount", data.amount);
    formData.append("type", "disbursement");

    for (const file of data.image) {
      formData.append("uploaded_attachments", file);
    }

    await upadateTransaction({ data: formData, id: initialData?.id ?? "" });
    setOpenEdit(false);
    form.reset();
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleCreate)}
          className="space-y-4 p-8"
        >
          <FormInput
            form={form}
            name="title"
            label="Title"
            labelClass="md:text-lg font-semibold mb-1 dark:text-white"
            wrapperClass="mb-5 mb:mb-3"
            className="h-12"
            placeholder="Enter event title"
            disabled={isView}
            required
          />
          <FormInput
            form={form}
            type="number"
            name="amount"
            label="Amount"
            labelClass="md:text-lg font-semibold mb-1 dark:text-white"
            wrapperClass="mb-5 mb:mb-3"
            className="h-12"
            placeholder="Enter target amount"
            disabled={isView}
            required
          />
          <FormFileDropZone
            name="image"
            type="file"
            form={form}
            label={
              <span className="flex items-center gap-2 dark:text-white">
                <FilePlus2 className="w-5 h-5 text-primary" />
                Upload Receipt Screenshot
              </span>
            }
            labelClass="mb-1 font-semibold text-base"
            wrapperClass="mb-3"
            defaultFiles={initialData?.attachments.map((f) => f.file)}
            disabled={isView}
            required
          />
          { !isView && <Button className="w-full rounded-full text-lg py-6 md:py-8 md:mt-5">
            Edit
          </Button>}
        </form>
      </Form>
    </div>
  );
}

export default TransactionExpenseEditForm;
