import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ComponentProps, HTMLInputTypeAttribute, ReactNode } from "react";
import { useState } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { CloudUpload, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export type FormFileDropZoneProps<T extends FieldValues> = Omit<
  ComponentProps<"input">,
  "form" | "input"
> & {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string | ReactNode;
  type?: HTMLInputTypeAttribute;
  wrapperClass?: string;
  labelClass?: string;
  defaultFile?: File;
};

function FormFileDropZone<T extends FieldValues>({
  form,
  name,
  label,
  type,
  wrapperClass,
  labelClass,
  defaultFile,
  ...props
}: FormFileDropZoneProps<T>) {
  const [file, setFile] = useState<any>(defaultFile?? undefined);
  const [isFile, setIsFile] = useState<boolean>(defaultFile? true: false);

  const handleClearFile = () => {
    setFile(undefined);
    setIsFile(false);
    form.setValue(name, undefined as any);
  }

  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxFiles: 1,
    onDrop: (files) => {
      if (files && files.length > 0) {
        const selectedFile = files[0];
        setFile(selectedFile);
        setIsFile(true);
        form.setValue(name, selectedFile as any)
      }
    },
  });

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("w-full", wrapperClass)}>
          <FormLabel className={cn("text-neutral-800", labelClass)}>
            {label}
            {props.required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <div
              {...getRootProps()}
              className={`relative border-dashed border-2  text-center cursor-pointer rounded-lg ${
                isDragActive && "border-primary"
              }`}
            >
              <Input
                {...getInputProps()}
                className={cn(
                  "border-gray-300 rounded-lg transition-all pr-10",
                  props.className
                )}
              />
              {isDragActive ? (
                <div className="text-neutral-400 h-40 flex justify-center items-center">
                  <p>Drop the files here</p>
                </div>
              ) : isFile ? (
                <div className="relative h-40">
                  <Image
                    src={URL.createObjectURL(file)}
                    alt="Uploaded file preview"
                    layout="fill"
                    objectFit="cover"
                  />
                  <p className="absolute left-2 top-2 text-white bg-black/30 p-2 rounded-2xl px-3 text-xs">{file.name}</p>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2 z-10"
                    onClick={(e) => {
                      handleClearFile();
                      e.stopPropagation();
                    }}
                  >
                    <Trash2 />
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col h-40 text-neutral-400 justify-center items-center">
                  <CloudUpload size={50} className="mb-2" />
                  <p className="mb-2">Select your file or drag and drop</p>
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
}

export default FormFileDropZone;
