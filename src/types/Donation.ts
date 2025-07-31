export interface Attachment {
  id: string;
  file: string;
}

export interface Organization {
  id: string;
  name: string;
  type?: string;
  description?: string;
}

export interface Donation {
  id: string;
  organization?: Organization;
  actor: string;
  event?: string | null;
  title: string;
  amount: string;
  type: string;
  status: "success" | "pending" | "failed" | "completed" | "error";
  review_required: boolean;
  created_at: string;
  updated_at: string;
  attachments: Attachment[];
}
