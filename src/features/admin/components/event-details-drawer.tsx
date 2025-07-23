"use client";

import { Button } from "@/components/ui/button";
import { DrawerClose, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Events } from "@/features/admin/types";
import { formatDate } from "@/utils/formatDate";
import { X } from "lucide-react";

interface Props {
  event: Events;
}

const EventDetailsDrawer = ({ event }: Props) => {
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
        <Field label="Organization" value={event.organization.name} />
        <Field label="Status" value={event.status} />
        <Field label="Start Date" value={formatDate(event.start_date)} />
        <Field label="End Date" value={formatDate(event.end_date)} />
        <Field label="Target Amount" value={`$${event.target_amount}`} />
        <Field label="Description" value={event.description} />

        <div>
          <div className="text-xs text-muted-foreground mb-1">
            Attachments
          </div>
          <div className="space-y-1">
            {event.attachments.length > 0 ? (
              event.attachments.map((a) => (
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
              <div className="text-muted-foreground">No attachments</div>
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

export default EventDetailsDrawer;