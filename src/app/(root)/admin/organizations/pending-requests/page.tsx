"use client";

import OrganizationTable from "@/components/common/organization-table";
import { Button } from "@/components/ui/button";
import Pagination from "@/features/admin/pagination";
import {
  useOrganizationRequests,
  useUpdateOrganizationRequest,
} from "@/queries/useOrganizationRequests";
import { OrganizationRequest } from "@/types/admin";
import { formatDate } from "@/utils/formatDate";
import { Check, X } from "lucide-react";
import { useSearchParams } from "next/navigation";

const PendingOrganizationsPage = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading } =
    useOrganizationRequests<OrganizationRequest>(page);
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
        <div>
          <Button
            variant="ghost"
            size="icon"
            title="Approve"
            className="text-green-600 hover:text-green-800"
            disabled={isMutating}
            onClick={() => handleAction(row.id, "approved")}
          >
            <Check size={15} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            title="Reject"
            className="text-red-600 hover:text-red-800"
            disabled={isMutating}
            onClick={() => handleAction(row.id, "rejected")}
          >
            <X size={15} />
          </Button>
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
