import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  ComponentProps,
  HTMLInputTypeAttribute,
  ReactNode,
  useEffect,
} from "react";
import { useState } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { CloudUpload, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  defaultFiles?: string[];
};

type FileOrUrl = File | string;

function FormFileDropZone<T extends FieldValues>({
  form,
  name,
  label,
  type,
  wrapperClass,
  labelClass,
  defaultFiles = [],
  ...props
}: FormFileDropZoneProps<T>) {
  const [files, setFiles] = useState<FileOrUrl[]>(form.getValues(name) || []);
  const [previewFile, setPreviewFile] = useState<FileOrUrl | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleClearFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    form.setValue(name, newFiles as any);
  };

  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop: (dropped) => {
      const newFiles = [...files, ...dropped];
      setFiles(newFiles);
      form.setValue(name, newFiles as any);
    },
  });

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className={cn("w-full", wrapperClass)}>
          <FormLabel className={cn("text-neutral-800", labelClass)}>
            {label}
            {props.required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <div
              {...getRootProps()}
              className={`relative border-dashed border-2 text-center cursor-pointer rounded-lg ${
                isDragActive && "border-primary"
              }`}
            >
              <Input
                {...getInputProps()}
                multiple
                className={cn(
                  "border-gray-300 rounded-lg transition-all pr-10",
                  props.className
                )}
              />

              {isDragActive ? (
                <div className="text-neutral-400 h-40 flex justify-center items-center">
                  <p>Drop the files here</p>
                </div>
              ) : files.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
                  {files.map((file, index) => {
                    const isUrl = typeof file === "string";
                    const imageUrl = isUrl ? file : URL.createObjectURL(file);

                    return (
                      <div
                        key={index}
                        className="relative h-40 rounded overflow-hidden"
                      >
                        <Image
                          src={imageUrl}
                          alt={`Preview ${index}`}
                          fill
                          className="object-cover rounded"
                        />
                        <p className="absolute left-2 top-2 text-white bg-black/30 p-1 px-2 text-xs rounded">
                          {isUrl
                            ? file.split("/").pop()?.slice(0, 15) + "..."
                            : file.name.length > 15
                            ? file.name.slice(0, 15) + "..."
                            : file.name}
                        </p>
                        <div className="absolute right-2 top-2 flex gap-1 z-10">
                          <Dialog
                            open={isPreviewOpen && previewFile === file}
                            onOpenChange={(open) => {
                              setIsPreviewOpen(open);
                              if (!open) setPreviewFile(null);
                            }}
                          >
                            <DialogTrigger
                              asChild
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewFile(file);
                                setIsPreviewOpen(true);
                              }}
                            >
                              <Button size="sm" variant="secondary">
                                Preview
                              </Button>
                            </DialogTrigger>
                            <DialogContent
                              onClick={(e) => e.stopPropagation()}
                              className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden"
                            >
                              <DialogTitle></DialogTitle>
                              <div className="relative w-full h-[80vh]">
                                <Image
                                  src={imageUrl}
                                  alt="Full image preview"
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            </DialogContent>
                          </Dialog>

                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClearFile(index);
                            }}
                          >
                            <Trash2 />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col h-40 text-neutral-400 justify-center items-center">
                  <CloudUpload size={50} className="mb-2" />
                  <p className="mb-2">Select files or drag and drop</p>
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
