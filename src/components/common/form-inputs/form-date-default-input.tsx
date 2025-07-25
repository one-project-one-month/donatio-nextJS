"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { parseDate } from "chrono-node";
import { formatDate } from "@/components/common/form-inputs/form-date-input";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type FormInputProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  type?: string;
  wrapperClass?: string;
  labelClass?: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
  isView?: boolean;
};

function FormDefaultDateInput<T extends FieldValues>({
  form,
  name,
  label,
  type,
  wrapperClass,
  labelClass,
  isView,
  ...props
}: FormInputProps<T>) {
  const [open, setOpen] = React.useState(false);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const selectedDate: Date | undefined = field.value;
        const formattedValue = selectedDate ? formatDate(selectedDate) : "";

        return (
          <FormItem className={cn(wrapperClass)}>
            {label && (
              <FormLabel className={cn("text-neutral-800", labelClass)}>
                {label}
                {props.required && <span className="text-red-500">*</span>}
              </FormLabel>
            )}
            <FormControl>
              <div className="relative">
                <Input
                  id="date"
                  type="text"
                  placeholder={props.placeholder || "Select a date"}
                  className={cn("bg-background pr-10", props.className)}
                  value={formattedValue}
                  disabled={isView} // ✅ Disable input in view mode
                  onChange={(e) => {
                    if (isView) return;
                    const parsed = parseDate(e.target.value);
                    if (parsed) {
                      field.onChange(parsed);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (isView) return;
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setOpen(true);
                    }
                  }}
                />
                <Popover open={!isView && open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                      disabled={isView} 
                    >
                      <CalendarIcon className="size-3.5" />
                      <span className="sr-only">Select date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="end"
                  >
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        if (!isView) {
                          field.onChange(date);
                          setOpen(false);
                        }
                      }}
                      captionLayout="dropdown"
                      month={selectedDate}
                      onMonthChange={() => { }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        );
      }}
    />
  );
}

export default FormDefaultDateInput;
