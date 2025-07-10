export interface RowData {
  id: string;
  organization_name: string;
  status: string;
  submitted_by: {
    username: string;
    email: string;
  } | null;
  approved_by: string | null;
  approved_at: string | null;
  created_at: string;
  updated_at: string;
  attachments: {
    id: string;
    file: string;
  }[];
}
