"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { isProfileComplete } from "@/features/organization/utils/profile-completion";
import { OrganizationProfile } from "@/types/Organization";
import { useState } from "react";
import { EditProfileForm } from "../forms/edit-profile-form";

interface OnboardingModalProps {
  organization: OrganizationProfile;
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingModal = ({
  organization,
  isOpen,
  onClose,
}: OnboardingModalProps) => {
  const [view, setView] = useState<"prompt" | "edit">("prompt");

  const handleModalStateChange = (open: boolean) => {
    if (!open) {
      onClose();
      // Reset the view after a short delay to allow animations to finish
      setTimeout(() => setView("prompt"), 200);
    }
  };

  if (isProfileComplete(organization)) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleModalStateChange}>
      <DialogContent
        className={view === "edit" ? "sm:max-w-[600px]" : "sm:max-w-[425px]"}
      >
        {view === "prompt" ? (
          <>
            <DialogHeader>
              <DialogTitle>Complete Your Profile</DialogTitle>
              <DialogDescription>
                Your organization&apos;s profile is incomplete. Please update it
                to build trust with donors.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <Button className="w-full" onClick={() => setView("edit")}>
                Update Profile Now
              </Button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Edit Organization Profile</DialogTitle>
              <DialogDescription>
                Make changes to your organization&apos;s public profile here.
                Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <EditProfileForm
              organization={organization}
              onSuccess={onClose}
              onCancel={() => setView("prompt")}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingModal;
