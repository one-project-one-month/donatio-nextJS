"use client";

import { useState } from "react";
import Certifications from "@/features/organization/components/profile/certifications";
import Description from "@/features/organization/components/profile/description";
import Overview from "@/features/organization/components/profile/overview";
import Profile from "@/features/organization/components/profile/profile";
import { useOrganizationProfileQuery } from "@/features/organization/hooks/organization-profile-queries";
import useUserStore from "@/store/userStore";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

import ProfilePageSkeleton from "@/features/organization/components/profile/skeletons/profile-page-skeleton";
import { EditProfileForm } from "@/features/organization/components/profile/forms/edit-profile-form";

const OrganizationProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const id = useUserStore((state) => state.currentOrg);
  const {
    data: profileData,
    isLoading,
    isError,
    refetch,
  } = useOrganizationProfileQuery(id);

  const handleSuccess = () => {
    setIsEditing(false);
    refetch();
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (isLoading || !id) {
    return <ProfilePageSkeleton />;
  }

  if (isError || !profileData) {
    return (
      <div className="w-full p-10 text-center text-red-500">
        <p>Error loading organization profile.</p>
      </div>
    );
  }

  return (
    <div className="w-full p-4 md:p-6 lg:p-10">
      <div className="space-y-8 md:space-y-10">
        <Overview data={profileData} />
        <Profile data={profileData} setIsEditing={setIsEditing} />
        {profileData.description && <Description data={profileData} />}
        <Certifications data={profileData} />
      </div>

      <AlertDialog open={isEditing} onOpenChange={setIsEditing}>
        <AlertDialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <AlertDialogHeader>
            <AlertDialogTitle>Edit Content</AlertDialogTitle>
          </AlertDialogHeader>
          <EditProfileForm
            organization={profileData}
            onSuccess={handleSuccess}
            onCancel={handleCancel}
          />
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default OrganizationProfile;
