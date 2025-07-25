"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface ImageLightboxProps {
  imageUrl: string;
  altText: string;
  children: React.ReactNode;
}

export const ImageLightbox = ({
  imageUrl,
  altText,
  children,
}: ImageLightboxProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl bg-transparent border-none shadow-none">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={imageUrl}
            alt={altText}
            fill
            className="object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
