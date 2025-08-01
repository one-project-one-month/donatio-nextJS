"use client";

import FormFileDropZone from "@/components/common/form-inputs/form-file-drop";
import FormInput from "@/components/common/form-inputs/form-inputs";
import FormPhoneNumberInput from "@/components/common/form-inputs/form-phone-number-input";
import FormQrCodeInput from "@/components/common/form-inputs/form-qr-code-input";
import FormTextarea from "@/components/common/form-inputs/form-textarea-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useUpdateOrganizationProfileMutation } from "@/features/organization/hooks/organization-profile-queries";
import { showToast } from "@/lib/toast";
import { OrganizationProfile } from "@/types/Organization";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  EditProfileFormValues,
  editProfileFormSchema,
} from "./edit-profile-schema";

interface EditProfileFormProps {
  organization: OrganizationProfile;
  onSuccess: () => void;
  onCancel: () => void;
}

export const EditProfileForm = ({
  organization,
  onSuccess,
  onCancel,
}: EditProfileFormProps) => {
  const [showImageFields, setShowImageFields] = useState(false);
  const { mutateAsync: updateProfile, isPending } =
    useUpdateOrganizationProfileMutation();

  const form = useForm<EditProfileFormValues>({
    resolver: zodResolver(editProfileFormSchema),
    defaultValues: {
      name: organization.name || "",
      email: organization.email || "",
      phone_number: organization.phone_number || "",
      description: organization.description || "",
      profile_image: undefined,
      banner: undefined,
      kpay_qr_image: undefined,
    },
  });

  const {
    formState: { dirtyFields },
    watch,
  } = form;

  const profileImageFile = watch("profile_image");

  const onSubmit = async (values: EditProfileFormValues) => {
    const formData = new FormData();

    const textFields: (keyof EditProfileFormValues)[] = [
      "name",
      "email",
      "phone_number",
      "description",
    ];
    textFields.forEach((key) => {
      if (
        dirtyFields[key] &&
        values[key] !== undefined &&
        values[key] !== null
      ) {
        formData.append(key, values[key] as string);
      }
    });

    if (dirtyFields.kpay_qr_image && values.kpay_qr_image?.length) {
      formData.append("kpay_qr_image", values.kpay_qr_image[0]);
    }

    if (dirtyFields.banner && values.banner?.length) {
      formData.append("uploaded_attachments", values.banner[0]);
    }
    if (dirtyFields.profile_image && values.profile_image?.length) {
      formData.append("uploaded_attachments", values.profile_image[0]);
    }

    if (!formData.entries().next().value) {
      showToast.info("No changes were made.");
      onCancel();
      return;
    }

    try {
      await updateProfile({
        id: organization.id,
        data: formData,
      });
      showToast.success("Profile updated successfully!");
      onSuccess();
    } catch (error) {
      console.error("Profile update error:", error);
      showToast.error("Failed to update profile. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput form={form} name="email" label="Contact Email" />
          <FormPhoneNumberInput
            form={form}
            name="phone_number"
            label="Phone Number"
          />
        </div>
        <FormTextarea
          form={form}
          name="description"
          label="Organization Description"
          placeholder="Tell us about your organization..."
          className="h-20"
        />

        {showImageFields ? (
          <div className="space-y-4 p-4 border rounded-lg">
            <h3 className="text-sm font-medium text-muted-foreground">
              Update Images
            </h3>
            <p className="text-xs text-muted-foreground">
              Please upload a new logo, then a new banner. Both are required.
            </p>
            <div className="grid grid-cols-1 gap-4">
              <FormFileDropZone
                form={form}
                name="profile_image"
                label="New Logo"
              />
              {profileImageFile && profileImageFile.length > 0 && (
                <FormFileDropZone
                  form={form}
                  name="banner"
                  label="New Banner"
                />
              )}
            </div>
          </div>
        ) : (
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowImageFields(true)}
          >
            Update Profile & Banner Images
          </Button>
        )}

        <FormQrCodeInput
          form={form}
          name="kpay_qr_image"
          label="Donation QR Code"
          qrUrl={organization.kpay_qr_url}
        />
        <div className="flex justify-end gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
