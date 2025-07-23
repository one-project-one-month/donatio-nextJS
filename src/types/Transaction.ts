import { Attachment } from "./Activity";
import { PaginationProps } from "./Common";


export type TransactionCreateProps = {
  id: string;
  data: FormData;
};

export type TransactionAttachment = {
  id: string;
  file: string;
}

type Organization = {
  id: string;
  admin: string;
  name: string;
  attachments: Attachment[];
}

type Actor = {
  id: string;
  username: string;
  email: string;
  profile: any | null;
}

export type Transaction = {
  id: string;
  organization: Organization;
  actor: Actor;
  event: string;
  title: string;
  amount: string;
  type: "donation" | "disbursement";
  status: "pending" | "approved" | "rejected";
  review_required: boolean;
  created_at: string;
  updated_at: string;
  attachments: TransactionAttachment[];
};

export type TransactionResponse = PaginationProps<Transaction>;


export type TempSelectedTransaction = {
  title: string;
  id: string;
}
