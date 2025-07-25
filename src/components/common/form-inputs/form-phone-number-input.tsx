"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export type FormPhoneNumberInputProps<T extends FieldValues> = Omit<
  ComponentProps<"input">,
  "form"
> & {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
};

function FormPhoneNumberInput<T extends FieldValues>({
  form,
  name,
  label,
  ...props
}: FormPhoneNumberInputProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-neutral-800">
            {label}
            {props.required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <div
              className={cn(
                "flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
                props.className
              )}
            >
              <span className="text-muted-foreground">09</span>
              <div className="mx-2 h-4 w-px bg-input" />
              <Input
                type="tel"
                {...field}
                {...props}
                className="w-full border-0 bg-transparent p-0 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
}

export default FormPhoneNumberInput;
