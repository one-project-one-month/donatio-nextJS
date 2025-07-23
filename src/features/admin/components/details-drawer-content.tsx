"use client";

import { Button } from "@/components/ui/button";
import { DrawerClose, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { VerifiedOrganization } from "@/features/admin/types";
import { formatDate } from "@/utils/formatDate";
import { X } from "lucide-react";

interface Props {
  org: VerifiedOrganization;
}

const DetailsDrawerContent = ({ org }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <DrawerHeader className="p-0 pb-5">
        <DrawerTitle></DrawerTitle>
        <DrawerClose asChild>
          <Button variant="ghost" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </DrawerClose>
      </DrawerHeader>

      <div className="space-y-6 px-3">
        <Field label="Contact Person" value={org.admin?.username ?? "-"} />
        <Field label="Submission Date" value={formatDate(org.created_at)} />
        <Field label="Email" value={org.email ?? "-"} />
        <Field label="Phone" value={org.phone_number ?? "-"} />
        <Field label="Type" value={org.type} />
        <Field label="Description" value={org.description ?? "-"} />
        <Field label="Additional Info" value={org.additional_info ?? "-"} />

        <div>
          <div className="text-xs text-muted-foreground mb-1">
            Uploaded Docs
          </div>
          <div className="space-y-1">
            {org.attachments.length > 0 ? (
              org.attachments.map((a) => (
                <a
                  key={a.id}
                  href={a.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline block"
                >
                  {a.file.split("/").pop()}
                </a>
              ))
            ) : (
              <div className="text-muted-foreground">No documents</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Field = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-xs text-muted-foreground">{label}</div>
    <div className="p-2 bg-gray-100 rounded">{value}</div>
  </div>
);

export default DetailsDrawerContent;
