import { z } from "zod";

const fileSchema = z
  .any()
  .refine((files) => files && files.length >= 1, "File is required.");

export const onboardingFormSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone_number: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .max(9, "Phone number must be at most 9 digits")
    .regex(/^[0-9]+$/, "Must be a valid number"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters"),
  profile_image: fileSchema,
  banner: fileSchema,
  kpay_qr_image: fileSchema.optional(),
});

export type OnboardingFormValues = z.infer<typeof onboardingFormSchema>;
