"use client";

import { Button } from "@/components/ui/button";
import { FormLabel } from "@/components/ui/form";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import FormFileDropZone from "./form-file-drop";

interface FormQrCodeInputProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  qrUrl: string | null | undefined;
  name: Path<T>;
  label: string;
}

const FormQrCodeInput = <T extends FieldValues>({
  form,
  qrUrl,
  name,
  label,
}: FormQrCodeInputProps<T>) => {
  const [isUploading, setIsUploading] = useState(!qrUrl);

  return (
    <div className="space-y-2">
      <FormLabel>{label}</FormLabel>
      {isUploading ? (
        <FormFileDropZone form={form} name={name} label="" />
      ) : (
        <div className="flex flex-col items-center gap-4 rounded-lg border p-4">
          {qrUrl && <QRCodeSVG value={qrUrl} size={128} />}
          <Button variant="outline" onClick={() => setIsUploading(true)}>
            Replace QR Code
          </Button>
        </div>
      )}
    </div>
  );
};

export default FormQrCodeInput;
