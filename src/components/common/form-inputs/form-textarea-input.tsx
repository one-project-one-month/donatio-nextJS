import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export type FormTextAreaProps<T extends FieldValues> = Omit<
  ComponentProps<"textarea">,
  "form"
> & {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string | ReactNode;
  wrapperClass?: string;
  labelClass?: string;
};

function FormTextAreaInput<T extends FieldValues>({
  form,
  name,
  label,
  wrapperClass,
  labelClass,
  ...props
}: FormTextAreaProps<T>) {

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(wrapperClass)}>
          <FormLabel className={cn("text-neutral-800", labelClass)}>
            {label}
            {props.required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <div className="relative">
              <textarea
                {...field}
                {...props}
                className={cn(
                  "border border-gray-300 rounded-lg p-2 w-full resize-y min-h-[100px] transition-all",
                  props.className
                )}
              />
            </div>
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
}

export default FormTextAreaInput;
