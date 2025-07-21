"use client";

import Certifications from "@/features/organization/components/profile/certifications";
import Description from "@/features/organization/components/profile/description";
import Overview from "@/features/organization/components/profile/overview";
import Profile from "@/features/organization/components/profile/profile";
import { useOrganizationProfileQuery } from "@/features/organization/hooks/organization-profile-queries";

const OrganizationProfile = () => {
  const {
    data: profileData,
    isLoading,
    isError,
  } = useOrganizationProfileQuery();

  if (isLoading) {
    return (
      <div className="w-full p-10 text-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  if (isError || !profileData) {
    return (
      <div className="w-full p-10 text-center text-red-500">
        <p>Error loading organization profile.</p>
      </div>
    );
  }

  return (
    <div className="w-full p-10">
      <div className="space-y-10">
        <Overview data={profileData} />
        <Profile data={profileData} />
        {profileData.description && <Description data={profileData} />}
        <Certifications data={profileData} />
      </div>
    </div>
  );
};

export default OrganizationProfile;
