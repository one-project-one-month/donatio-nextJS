import { OrganizationProfile } from "@/types/Organization";

// Defines the configuration for each step in the onboarding process.
export const ONBOARDING_STEPS_CONFIG = [
  {
    id: "contact",
    fields: ["email", "phone_number"],
  },
  {
    id: "branding",
    fields: ["profile_image", "banner", "description"],
  },
  {
    id: "payment",
    fields: ["kpay_qr_image"],
  },
];

/**
 * Checks if a specific step is complete based on the organization's profile data.
 * @param profile - The organization profile data.
 * @param stepId - The ID of the step to check ('contact', 'branding', 'payment').
 * @returns `true` if all fields for the step are filled, otherwise `false`.
 */
export const isStepComplete = (
  profile: Partial<OrganizationProfile>,
  stepId: "contact" | "branding" | "payment"
): boolean => {
  if (!profile) return false;

  if (stepId === "payment") {
    return !!profile.kpay_qr_url;
  }

  const step = ONBOARDING_STEPS_CONFIG.find((s) => s.id === stepId);
  if (!step) return false;
  return step.fields.every((field) => !!profile[field as keyof OrganizationProfile]);
};

/**
 * Checks if the entire organization profile is complete.
 * @param profile - The organization profile data.
 * @returns `true` if all steps are complete, otherwise `false`.
 */
export const isProfileComplete = (
  profile: Partial<OrganizationProfile>
): boolean => {
  if (!profile) return false;
  return ONBOARDING_STEPS_CONFIG.every((step) =>
    isStepComplete(profile, step.id as any)
  );
};
