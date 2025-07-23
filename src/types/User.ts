export type Organization = {
    id: string;
    admin: string;
    name: string;
    attachments: string[];
}

export type User = {
    id: string;
    username: string;
    email: string;
    is_superuser: boolean;
    profile: string | null;
    joined_at: string;
    is_org_admin: boolean;
    organizations: Organization[];
}