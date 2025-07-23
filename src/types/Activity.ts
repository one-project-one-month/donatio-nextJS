import { PaginationProps } from "./Common";
import { Organization } from "./Organization";
import { Transaction } from "./Transaction";

export type ActivityTableData = {
    title: string;
    date: string;
    location: string;
    totalVoucher: number;
    image: string;
    content: string;
}

export type CreateActivityPayload = {
    title: string;
    description: string;
    location: string;
    attachments: File[];
    transaction_ids: string[];
    content: string;
}

export type ActivityTransaction = {
  id: string;
  transaction: Transaction;
  linked_at: string;
}

export type Activity = {
  id: string;
  organization: Organization;
  title: string;
  description: string;
  location: string;
  created_at: string;
  updated_at: string;
  activity_transactions: ActivityTransaction[];
  attachments: any[];
}


export type ActivityResponse = PaginationProps<Activity>;