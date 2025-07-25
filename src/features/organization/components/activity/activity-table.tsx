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
import ActivityRows from "./activity-rows";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import ActivityEditForm from "./activity-edit-form";
import { Activity } from "@/types/Activity";
import { useDeleteActivity } from "../../hooks/organization-activity-queries";

type ActivityTableProps = {
  data: Activity[] | null;
  isLoading: boolean;
};

function ActivityTable({ data, isLoading }: ActivityTableProps) {

  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity>();

  const { deleteActivity } = useDeleteActivity();

  const handleEdit = useCallback((activity: Activity) => {
    setSelectedActivity(activity);
    setIsEditFormOpen(true);
  }, []);


  const handleDelete = useCallback((id: string) => {
    deleteActivity(id);
  },[]);

  return (
    <section className="overflow-x-auto max-w-full rounded-2xl border mt-8 relative">
      <Table>
        <TableHeader>
          <TableRow className="h-20 bg-dodger-blue-50 dark:bg-neutral-950 hover:bg-dodger-blue-50">
            <TableHead className="sticky min-w-[200px] text-base p-5 font-bold dark:bg-neutral-950 bg-dodger-blue-50 text-start left-0 z-10">
              Title
            </TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-center">
              Date
            </TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-center">
              Location
            </TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-center">
              Transitions
            </TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-start">
              Image
            </TableHead>
            <TableHead className="sticky max-w-[200px] text-base font-bold text-center dark:bg-neutral-950 bg-dodger-blue-50 right-0 z-10">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data && data.length > 0 ? (
            data?.map((event, rowIdx) => (
              <ActivityRows
                data={event}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                key={rowIdx}
              />
            ))
          ) : (
            <TableRow className="h-24">
              <TableCell colSpan={6} className="text-center text-gray-500">
                {isLoading ? "Loading activities..." : "No activity found."}
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
          <DrawerTitle></DrawerTitle>
          <ActivityEditForm initialData={selectedActivity ?? null} setIsOpen={setIsEditFormOpen} />
        </DrawerContent>
      </Drawer>
    </section>
  );
}

export default ActivityTable;
