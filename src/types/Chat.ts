import { PaginationProps } from "./Common";
import { Organization } from "./Organization";

export type Donor = {
  id: string;
  username: string;
  email: string;
  is_staff: boolean;
  is_superuser: boolean;
  profile: any;
  joined_at: string;
  is_org_admin: boolean;
};

export type Chat = {
  id: string;
  donor: Donor;
  organization: Organization;
  created_at: string;
};

export type Sender = {
  type: string;
  id: string;
};

export type MessageInput = {
  message: string;
  sender_type: 'organization' | 'donor';
  sender_id: string;
};

export type MessageResponse = MessageInput & {
  timestamp: string;
};

export type ChatList = {
  id: string;
  logo: string;
  name: string;
  lastMsg: string;
};


export type ChatHistory = {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  chat: string;
  donor: string | null;
  organization: string | null;
}

export type GetAllChatResponse = PaginationProps<Chat>;


export type StartChatResponse = {
  created: boolean;
  chat_id: string;
}
