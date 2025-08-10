"use client";

import OrganizationTable from "@/components/common/organization-table";
import TableImageHolder from "@/components/common/table-image-holder";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import EventDetailsDrawer from "@/features/admin/components/event-details-drawer";
import Pagination from "@/features/admin/components/pagination";
import { useEvents } from "@/features/admin/hooks/organization.queries";
import { Events } from "@/features/admin/types";
import { EyeIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";

const EventsPage = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading } = useEvents(page);

  const columns = [
    {
      key: "title",
      label: "Title",
      render: (row: Events) => row.title,
      width: "150px",
    },
    {
      key: "start_date",
      label: "Start Date",
      render: (row: Events) => new Date(row.start_date).toLocaleDateString(),
      width: "150px",
    },
    {
      key: "end_date",
      label: "End Date",
      render: (row: Events) => new Date(row.end_date).toLocaleDateString(),
      width: "150px",
    },
    {
      key: "goal_amount",
      label: "Goal Amount",
      render: (row: Events) => `${row.target_amount}`,
      width: "150px",
    },
    {
      key: "image",
      label: "Image",
      render: (row: Events) => <TableImageHolder data={row.attachments} />,
      width: "150px",
    },
    {
      key: "actions",
      label: "Actions",
      render: (row: Events) => (
        <div className="flex justify-center gap-1">
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                title="Details"
                className="text-blue-600 hover:text-blue-800"
              >
                <EyeIcon size={15} />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <EventDetailsDrawer event={row} />
            </DrawerContent>
          </Drawer>
        </div>
      ),
      width: "150px",
    },
  ];

  return (
    <div className="p-10">
      <OrganizationTable<Events>
        data={data?.results ?? []}
        columns={columns}
        isLoading={isLoading}
      />

      <Pagination
        itemCount={data?.count ?? 0}
        pageSize={7}
        currentPage={page}
      />
    </div>
  );
};

export default EventsPage;
