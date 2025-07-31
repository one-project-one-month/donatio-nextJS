"use client";

import React from "react";
import BreadCrumbUI from "@/components/common/breadcrumb-ui";
import { useGetUser } from "@/features/user/hooks/donor-user-queries";
// import { useDonationHistory } from "@/hooks/useDonationHistory";
import { useDonationHistory } from "@/hooks/useDonationHistory";
// import { CoverSection } from "@/components/donor/CoverSection";
import { CoverSection } from "./components/CoverSection";
// import { ProfileSection } from "@/components/donor/ProfileSection";
import { ProfileSection } from "./components/ProfileSection";
// import { DonationHistorySection } from "@/components/donor/DonationHistorySection";
import { DonationHistorySection } from "./components/DonationHistorySection";

const DonorSettingsPage = () => {
  const { data: user } = useGetUser();
  const { donations, isLoading } = useDonationHistory();

  return (
    <div className="px-4 pt-10">
      <BreadCrumbUI
        links={[{ name: "Donor", path: "/donor/events" }]}
        currentPageTitle="Settings"
      />

      <div className="relative">
        <CoverSection />
        <ProfileSection user={user} />
        <DonationHistorySection donations={donations} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default DonorSettingsPage;
