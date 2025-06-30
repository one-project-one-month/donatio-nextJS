import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ComponentProps, HTMLInputTypeAttribute } from "react";
import { useState } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

export type FormInputProps<T extends FieldValues> = Omit<
  ComponentProps<"input">,
  "form" | "input"
> & {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  type?: HTMLInputTypeAttribute;
  wrapperClass?: string;
  labelClass?: string;
};

function FormInput<T extends FieldValues>({
  form,
  name,
  label,
  type,
  wrapperClass,
  labelClass,
  ...props
}: FormInputProps<T>) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleViewPasswordToggle = () => {
    setShowPassword((prev) => (prev ? false : true));
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={cn("text-neutral-800", labelClass)}>
            {label}
            {props.required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                type={type === "password" && showPassword ? "text" : type}
                {...field}
                {...props}
                className={cn(
                  "border-gray-300 rounded-lg transition-all pr-10",
                  props.className
                )}
              />
              {type === "password" && (
                <span
                  onClick={handleViewPasswordToggle}
                  className="absolute z-10 cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-all"
                >
                  {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                </span>
              )}
            </div>
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
}

export default FormInput;
