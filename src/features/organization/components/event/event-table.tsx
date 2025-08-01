"use client";

import { useCallback, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EventRows from "./event-rows";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import EventEditForm from "./event-edit-form";
import { Event } from "@/types/Event";
import { useCloseEvent } from "../../hooks/organization-event-queries";

type EventTableProps = {
  data: Event[] | null;
  isLoading: boolean;
};

function EventTable({ data, isLoading }: EventTableProps) {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const [isView, setIsView] = useState<boolean>(false);
  const { closeEvent } = useCloseEvent();

  const handleEdit = useCallback((event: Event) => {
    setIsView(false);
    setSelectedEvent(event);
    setIsEditFormOpen(true);
  }, []);

  const handleDelete = useCallback((id: string) => {
    closeEvent(id);
  }, [closeEvent]);

  const handleView = useCallback((data: Event) => {
    setSelectedEvent(data);
    setIsView(true);
    setIsEditFormOpen(true)
  }, []);

  return (
    <section className="overflow-x-auto max-w-full rounded-2xl border mt-8 relative">
      <Table>
        <TableHeader>
          <TableRow className="h-20 bg-dodger-blue-50 hover:bg-dodger-blue-50">
            <TableHead className="sticky min-w-[200px] text-base p-5 font-bold bg-dodger-blue-50 text-start left-0 z-10">
              Title
            </TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-center">
              Start Date
            </TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-center">
              End Date
            </TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-center">
              Goal Amount
            </TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-start">
              Image
            </TableHead>
            <TableHead className="sticky max-w-[200px] text-base font-bold text-center bg-dodger-blue-50 right-0 z-10">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data && data.length > 0 ? (
            data?.map((event, idx) => (
              <EventRows
                data={event}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleView={handleView}
                key={idx}
              />
            ))
          ) : (
            <TableRow className="h-24">
              <TableCell colSpan={6} className="text-center text-gray-500">
                {isLoading ? "Loading events..." : "No event found."}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Drawer
        direction="right"
        open={isEditFormOpen}
        onOpenChange={setIsEditFormOpen}
      >
        <DrawerContent className="max-w-xl min-w-[600px]">
          <DrawerTitle className="hidden">Edit Event</DrawerTitle>
          <EventEditForm initialData={selectedEvent ?? null} setOpenEdit={setIsEditFormOpen} isView={isView} />
        </DrawerContent>
      </Drawer>
    </section>
  );
}

export default EventTable;
