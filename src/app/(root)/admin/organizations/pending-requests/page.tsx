"use client";

import OrganizationTable from "@/components/common/organization-table";
import { Button } from "@/components/ui/button";
import { RowData } from "@/types/admin";
import { Check, X } from "lucide-react";
import { formatDate } from "@/utils/formatDate";

const mockData = [
  {
    id: "af54872c-6f87-4963-9e78-357dde67461f",
    organization_name: "test org",
    status: "pending",
    submitted_by: {
      username: "tom",
      email: "oaksoe.thein01@gmail.com",
    },
    approved_by: null,
    approved_at: null,
    created_at: "2025-07-07T11:28:53.985670Z",
    updated_at: "2025-07-07T11:28:53.985702Z",
    attachments: [
      {
        id: "8ded6556-d593-4066-bb8f-d39f768da5ee",
        file: "/media/attachments/Screen_Shot_2025-07-03_at_9_fRTrDZn.14.12_PM.png",
      },
    ],
  },
  {
    id: "c9f1ef19-26d8-4ab2-811a-5de47376e2d8",
    organization_name: "new org",
    status: "pending",
    submitted_by: {
      id: "b3d8b797-b1a5-4660-8c33-557535149a8d",
      username: "tom",
      email: "oaksoe.thein01@gmail.com",
    },
    approved_by: null,
    approved_at: null,
    created_at: "2025-07-07T13:06:35.549961Z",
    updated_at: "2025-07-07T13:06:35.550057Z",
    attachments: [
      {
        id: "19312f39-a97d-4a99-bebc-dd0d12758fcc",
        file: "/media/attachments/Screen_Shot_2025-07-03_at_9_PEDTYjC.14.12_PM.png",
      },
    ],
  },
];

const columns = [
  {
    key: "organization_name",
    label: "Organization Name",
    render: (row: RowData) => row.organization_name,
  },
  {
    key: "submitted_by.username",
    label: "Contact Person",
    render: (row: RowData) => row.submitted_by?.username,
  },
  {
    key: "created_at",
    label: "Submission Date",
    render: (row: RowData) => formatDate(row.created_at),
  },
  {
    key: "submitted_by.email",
    label: "Email",
    render: (row: RowData) => row.submitted_by?.email,
  },
  {
    key: "attachments",
    label: "Uploaded Docs",
    render: (row: RowData) =>
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
    render: (row: RowData) => row.status,
  },
  {
    key: "actions",
    label: "Actions",
    render: (row: RowData) => (
      <div>
        <Button
          variant="ghost"
          size="icon"
          title="Approve"
          className="text-green-600 hover:text-green-800"
        >
          <Check size={15} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          title="Reject"
          className="text-red-600 hover:text-red-800"
        >
          <X size={15} />
        </Button>
      </div>
    ),
  },
];

const PendingOrganizationsPage = () => {
  return (
    <div className="p-10">
      <OrganizationTable<RowData>
        title="Pending Organizations"
        data={mockData}
        columns={columns}
      />
    </div>
  );
};

export default PendingOrganizationsPage;
