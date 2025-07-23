import { PaginationProps } from "@/types/Common"

export type Admin = {
  id: string;
  username: string;
  email: string;
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