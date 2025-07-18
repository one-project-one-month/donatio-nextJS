import { PaginationProps } from "./Common";

export type Donor = {
  id: string;
  username: string;
  email: string;
  is_staff: boolean;
  is_superuser: boolean;
  profile: string | null;
  joined_at: string;
  is_org_admin: boolean;
};

export type Organization = {
  id: string;
  admin: string;
  name: string;
};

export type Chat = {
  id: string;
  donor: Donor;
  organization: Organization;
  created_at: string;
};


export type ChatList = {
    id: string;
    logo: string;
    name: string;
    lastMsg: string;
}


export type Message = {
    sender_type: 'organization' | "donor";
    sender_id: string;
    message: string;
}


export type GetAllChatResponse = PaginationProps<Chat>;



