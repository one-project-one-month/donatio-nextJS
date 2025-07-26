import { Attachment } from "@/features/admin/types/admin";
import { PaginationProps } from "@/types/Common";

export type Admin = {
  id: string;
  username: string;
  email: string;
};

export type OrganizationRequestDetails = {
  id: string;
  organization_name: string;
  status: "approved" | "pending" | "rejected";
  type: string;
  submitted_by: Admin;
  approved_by: Admin;
  approved_at: string;
  created_at: string;
  updated_at: string;
  attachments: Attachment[];
};

export type OrganizationStats = {
  total_received_money: number;
  total_expense: number;
  total_current_balance: number;
};

export type OrganizationProfile = {
  id: string;
  admin: Admin;
  name: string;
  type: string;
  kpay_qr_url: string | null;
  description: string | null;
  phone_number: string | null;
  email: string | null;
  organization_request: OrganizationRequestDetails;
  additional_info: string | null;
  created_at: string;
  updated_at: string;
  attachments: Attachment[];
  kpay_qr_image: string | null;
  stats: OrganizationStats;
  total_donations: number;
  total_donors: number;
};

export type Organization = {
  id: string;
  admin: Admin;
  name: string;
  type: string;
  kpay_qr_url: string | null;
  description: string | null;
  phone_number: string | null;
  email: string | null;
  additional_info: string | null;
  created_at: string;
  updated_at: string;
  attachments: any[];
};

export type GetAllOrganizationsResponse = PaginationProps<Organization>;