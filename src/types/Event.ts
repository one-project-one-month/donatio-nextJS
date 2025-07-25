import { PaginationProps } from "@/types/Common";

export type EventTableData = {
  title: string;
  start_date: string;
  end_date: string;
  target_amount: string;
  status: string;
};


export type CreateEventPayload = {
  title: string;
  description: string;
  target_amount: string;
  attachments: File[];
  start_date: string;
  end_date: string;
};

export type Event = {
  id: string;
  organization: {
    id: string;
    admin: {
      id: string;
      username: string;
      email: string;
    };
    name: string;
    phone_number: string | null;
    email: string | null;
    attachments: any[];
  };
  title: string;
  status: "open" | "closed" | string;
  description: string;
  target_amount: string;
  attachments: any[];
  start_date: string;
  end_date: string;
};


export type EventsResponse = PaginationProps<Event>;
