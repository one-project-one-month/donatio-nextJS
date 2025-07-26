import { z } from "zod";

const fileSchema = z.any().optional();

export const editProfileFormSchema = z
  .object({
    name: z.string().optional(),
    email: z
      .string()
      .email("Invalid email address")
      .optional()
      .or(z.literal("")),
    phone_number: z.string().optional(),
    description: z.string().optional(),
    profile_image: fileSchema,
    banner: fileSchema,
    kpay_qr_image: fileSchema,
  })
  .refine(
    (data) => {
      const profileImageExists =
        data.profile_image && data.profile_image.length > 0;
      const bannerExists = data.banner && data.banner.length > 0;
      return profileImageExists === bannerExists;
    },
    {
      message: "Both profile and banner images are required.",
      path: ["banner"],
    }
  );

export type EditProfileFormValues = z.infer<typeof editProfileFormSchema>;
