"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AppConfig from "@/lib/appConfig";
import { Attachment } from "@/types/Activity";
import Image from "next/image";

interface CertificateListDialogProps {
  certificates: Attachment[];
  children?: React.ReactNode;
}

export const CertificateListDialog = ({
  certificates,
  children,
}: CertificateListDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children ? children : <Button variant="outline">View All</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>All Certifications</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="relative w-full aspect-[4/3] rounded-md overflow-hidden"
            >
              <Image
                src={`${AppConfig.BASE_ORIGIN}${certificate.file}`}
                alt="Certificate"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
