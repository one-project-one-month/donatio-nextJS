import { PaginationProps } from "./Common";


export type TransactionCreateProps = {
  id: string;
  data: FormData;
};

export type Transaction = {
  id: string;
  organization: string;
  actor: string;
  event: string;
  title: string;
  amount: string;
  type: "donation" | "disbursement";
  status: "pending" | "approved" | "rejected";
  review_required: boolean;
  created_at: string;
  updated_at: string;
  attachments: {
    id: string;
    file: string;
  }[];
};

export type TransactionResponse = PaginationProps<Transaction>;
