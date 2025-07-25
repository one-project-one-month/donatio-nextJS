import { OrganizationProfile } from "@/types/Organization";

export const isProfileComplete = (
  organization: OrganizationProfile | null | undefined
): boolean => {
  if (!organization) {
    return false;
  }

  const hasRequiredFields =
    !!organization.description &&
    !!organization.phone_number &&
    !!organization.email &&
    !!organization.kpay_qr_url;

  const hasAttachments =
    organization.attachments && organization.attachments.length > 0;

  return hasRequiredFields && hasAttachments;
};
