export interface Attachment {
  id: string;
  file: string;
}

export interface OrganizationRequest {
  id: string;
  organization_name: string;
  status: string;
  submitted_by: {
    username: string;
    email: string;
  } | null;
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
  admin: { id: string; username: string; email: string } | null;
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
