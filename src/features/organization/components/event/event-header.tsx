"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import EventSearchBox from "./event-search-box";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import EventCreateForm from "./event-create-form";

type EventHeaderProps = {
  totalEvents: number;
};

function EventHeader({ totalEvents }: EventHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h1 className="text-primary text-3xl font-semibold">Events</h1>
        <Badge variant="outline" className="text-sm text-neutral-500">
          {totalEvents} Events
        </Badge>
      </div>

      {/* Actions Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <EventSearchBox />
        </div>
        <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
          <DrawerTrigger asChild>
            <Button className="flex items-center gap-2 w-[220px] py-7 rounded-full">
              <Plus size={18} />
              Create New
            </Button>
          </DrawerTrigger>
          <DrawerContent className="max-w-xl min-w-[600px]">
            <DrawerTitle>Create New Event</DrawerTitle>
            <EventCreateForm />
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default EventHeader;
