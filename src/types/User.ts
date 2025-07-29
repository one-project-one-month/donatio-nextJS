export type Organization = {
  id: string;
  admin: string;
  name: string;
  attachments: string[];
};

export type Profile = {
  id: string;
  full_name: string | null;
  profile_picture: string | null;
  phone_number: string | null;
};

export type User = {
  id: string;
  username: string;
  email: string;
  is_superuser: boolean;
  profile: Profile | null;
  joined_at: string;
  is_org_admin: boolean;
  organizations: Organization[];
};
