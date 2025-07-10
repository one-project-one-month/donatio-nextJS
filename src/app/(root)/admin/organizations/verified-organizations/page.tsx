"use client";

import OrganizationTable from "@/components/common/organization-table";
import { Button } from "@/components/ui/button";
import { useVerifiedOrganizations } from "@/queries/useOrganizationRequests";
import { VerifiedOrganization } from "@/types/admin";
import { formatDate } from "@/utils/formatDate";
import { PencilIcon } from "lucide-react";

const VerifiedOrganizationsPage = () => {
  const { data = [], isLoading } = useVerifiedOrganizations();

  const renderOrDash = (value: string | null | undefined) => {
    return value ?? "-";
  };

  const columns = [
    {
      key: "organization_name",
      label: "Organization Name",
      render: (row: VerifiedOrganization) => row.name,
    },
    {
      key: "admin.username",
      label: "Admin Name",
      render: (row: VerifiedOrganization) => row.admin!.username,
    },
    {
      key: "email",
      label: "Email",
      render: (row: VerifiedOrganization) => renderOrDash(row?.email),
    },
    {
      key: "phone_number",
      label: "Phone Number",
      render: (row: VerifiedOrganization) => renderOrDash(row?.phone_number),
    },
    {
      key: "type",
      label: "Type",
      render: (row: VerifiedOrganization) => row.type,
    },
    {
      key: "created_at",
      label: "Joined Date",
      render: (row: VerifiedOrganization) => formatDate(row.created_at),
    },
    {
      key: "attachments",
      label: "Uploaded Docs",
      render: (row: VerifiedOrganization) =>
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
      key: "actions",
      label: "Actions",
      render: (row: VerifiedOrganization) => (
        <div>
          <Button
            variant="ghost"
            size="icon"
            title="Approve"
            className="text-blue-600 hover:text-blue-800"
          >
            <PencilIcon size={15} />
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
      <OrganizationTable<VerifiedOrganization>
        title="Verified Organizations"
        data={data}
        columns={columns}
      />
    </div>
  );
};

export default VerifiedOrganizationsPage;
