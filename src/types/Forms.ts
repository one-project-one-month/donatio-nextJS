export interface ProfileFormData {
  full_name: string;
  phone_number: string;
  profile_picture: File | null;
}

export interface AdminApplicationFormData {
  organization_name: string;
  uploaded_attachments: File | null;
  type: string;
}

// types/common.ts
export interface BreadcrumbLink {
  name: string;
  path: string;
}
