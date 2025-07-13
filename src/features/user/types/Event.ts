import { PaginationProps } from "@/types/Common";





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


export type GetAllEventsResponse = PaginationProps<Event>;
