"use client";

import OrganizationTable from "@/components/common/organization-table";
import ConfirmActionButton from "@/features/admin/components/confirm-action-button";
import Pagination from "@/features/admin/components/pagination";
import {
  useOrganizationRequests,
  useUpdateOrganizationRequest,
} from "@/features/admin/queries/useOrganizationRequests";
import { OrganizationRequest } from "@/features/admin/types/admin";
import { formatDate } from "@/utils/formatDate";
import { Check, X } from "lucide-react";
import { useSearchParams } from "next/navigation";

const PendingOrganizationsPage = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading } = useOrganizationRequests(page);
  const { mutate, isPending: isMutating } = useUpdateOrganizationRequest();

  const handleAction = (id: string, action: "approved" | "rejected") => {
    mutate({ id, status: action });
  };

  const columns = [
    {
      key: "organization_name",
      label: "Organization Name",
      render: (row: OrganizationRequest) => row.organization_name,
    },
    {
      key: "submitted_by.username",
      label: "Contact Person",
      render: (row: OrganizationRequest) => row.submitted_by!.username,
    },
    {
      key: "type",
      label: "Type",
      render: (row: OrganizationRequest) => row.type,
    },
    {
      key: "created_at",
      label: "Submission Date",
      render: (row: OrganizationRequest) => formatDate(row.created_at),
    },
    {
      key: "submitted_by.email",
      label: "Email",
      render: (row: OrganizationRequest) => row.submitted_by?.email,
    },
    {
      key: "attachments",
      label: "Uploaded Docs",
      render: (row: OrganizationRequest) =>
        row.attachments?.map((a) => (
          <a
            key={a.id}
            href={a.file}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            File
          </a>
        )),
    },
    {
      key: "status",
      label: "Status",
      render: (row: OrganizationRequest) => row.status,
    },
    {
      key: "actions",
      label: "Actions",
      render: (row: OrganizationRequest) => (
        <div className="flex gap-1">
          <ConfirmActionButton
            icon={<Check size={15} />}
            buttonClassName="text-green-600 hover:text-green-800"
            buttonTitle="Approve"
            dialogTitle="Approve this request?"
            dialogDescription={`Are you sure you want to approve "${row.organization_name}"?`}
            onConfirm={() => handleAction(row.id, "approved")}
            disabled={isMutating}
          />

          <ConfirmActionButton
            icon={<X size={15} />}
            buttonClassName="text-red-600 hover:text-red-800"
            buttonTitle="Reject"
            dialogTitle="Reject this request?"
            dialogDescription={`Are you sure you want to reject "${row.organization_name}"?`}
            onConfirm={() => handleAction(row.id, "rejected")}
            disabled={isMutating}
          />
        </div>
      ),
    },
  ];

  if (isLoading) {
    return <div className="p-10">Loading…</div>;
  }

  return (
    <div className="p-10">
      <OrganizationTable<OrganizationRequest>
        title="Pending Organizations"
        data={data?.results ?? []}
        columns={columns}
      />

      <Pagination
        itemCount={data?.count ?? 0}
        pageSize={7}
        currentPage={page}
      />
    </div>
  );
};

export default PendingOrganizationsPage;
