"use client";

import OrganizationTable from "@/components/common/organization-table";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import ConfirmActionButton from "@/features/admin/components/confirm-action-button";
import DetailsDrawerContent from "@/features/admin/components/details-drawer-content";
import Pagination from "@/features/admin/components/pagination";
import {
  useDeleteOrganization,
  useVerifiedOrganizations,
} from "@/features/admin/hooks/organization.queries";
import { VerifiedOrganization } from "@/features/admin/types";
import { formatDate } from "@/utils/formatDate";
import { EyeIcon, Trash2Icon } from "lucide-react";
import { useSearchParams } from "next/navigation";

const VerifiedOrganizationsPage = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { data, isLoading } = useVerifiedOrganizations(page);
  const { mutate: deleteOrg, isPending: isDeleting } = useDeleteOrganization();

  const handleDelete = (id: string) => {
    deleteOrg(id);
  };

  const columns = [
    {
      key: "organization_name",
      label: "Organization Name",
      render: (row: VerifiedOrganization) => row.name,
      width: "150px",
    },
    {
      key: "admin.username",
      label: "Admin Name",
      render: (row: VerifiedOrganization) => row.admin!.username,
      width: "150px",
    },
    {
      key: "email",
      label: "Email",
      render: (row: VerifiedOrganization) => row?.email ?? "-",
      width: "200px",
    },
    {
      key: "phone_number",
      label: "Phone Number",
      render: (row: VerifiedOrganization) => row?.phone_number ?? "-",
      width: "200px",
    },
    {
      key: "type",
      label: "Type",
      render: (row: VerifiedOrganization) => row.type,
      width: "100px",
    },
    {
      key: "created_at",
      label: "Joined Date",
      render: (row: VerifiedOrganization) => formatDate(row.created_at),
      width: "150px",
    },
    {
      key: "actions",
      label: "Actions",
      render: (row: VerifiedOrganization) => (
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
              <DetailsDrawerContent org={row} />
            </DrawerContent>
          </Drawer>

          <ConfirmActionButton
            icon={<Trash2Icon size={15} />}
            buttonClassName="text-red-600 hover:text-red-800"
            buttonTitle="Reject"
            dialogTitle={`Are you sure you want to remove "${row.name}"?`}
            dialogDescription="This action will hide all their events and disable new donations."
            onConfirm={() => handleDelete(row.id)}
            disabled={isDeleting}
          />
        </div>
      ),
      width: "100px",
    },
  ];

  return (
    <div className="p-10">
      <OrganizationTable<VerifiedOrganization>
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

export default VerifiedOrganizationsPage;
