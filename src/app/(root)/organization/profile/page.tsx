"use client";

import Certifications from "@/features/organization/components/profile/certifications";
import Description from "@/features/organization/components/profile/description";
import Overview from "@/features/organization/components/profile/overview";
import Profile from "@/features/organization/components/profile/profile";

const OrganizationProfile = () => {
  return (
    <div className="w-full p-10">
      <div className="space-y-10">
        <Overview />
        <Profile />
        <Description />
        <Certifications />
      </div>
    </div>
  );
};

export default OrganizationProfile;
