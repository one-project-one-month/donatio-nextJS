export type PaginatedResponse<
  T = OrganizationRequest | VerifiedOrganization | Events
> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

interface Attachment {
  id: string;
  file: string;
}

interface Admin {
  id: string;
  username: string;
  email: string;
}

interface Organization {
  id: string;
  admin: Admin;
  name: string;
  phone_number: string | null;
  email: string | null;
  attachments: Attachment[];
}

export interface OrganizationRequest {
  id: string;
  organization_name: string;
  status: string;
  submitted_by: {
    username: string;
    email: string;
  };
  type: string;
  approved_by: string | null;
  approved_at: string | null;
  created_at: string;
  updated_at: string;
  attachments: Attachment[];
}

export interface VerifiedOrganization {
  id: string;
  name: string;
  admin: Admin;
  type: string;
  kpay_qr_url: string | null;
  description: string | null;
  phone_number: string | null;
  email: string | null;
  additional_info: string | null;
  created_at: string;
  updated_at: string;
  attachments: Attachment[];
}

export type UpdatePayload = {
  id: string;
  status: "approved" | "rejected";
};

export interface Events {
  id: string;
  organization: Organization;
  title: string;
  status: string;
  description: string;
  target_amount: string;
  attachments: Attachment[];
  start_date: string;
  end_date: string;
}