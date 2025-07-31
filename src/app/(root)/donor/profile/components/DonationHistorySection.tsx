import React, { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DonationHistoryTable } from "./DonationHistoryTable";
import { Donation } from "@/types/Donation";

interface DonationHistorySectionProps {
  donations: Donation[];
  isLoading: boolean;
}

export const DonationHistorySection: React.FC<DonationHistorySectionProps> = ({
  donations,
  isLoading,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDonations = donations.filter(
    (donation) =>
      donation.organization?.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      donation.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-10">
      <div>
        <h2 className="text-xl font-semibold">Donation History</h2>

        <div className="relative mt-6">
          <Input
            className="rounded-full pl-12 py-6 shadow-md bg-white border border-primary text-base focus:ring-2 focus:ring-dodger-blue-50 placeholder:text-neutral-400 w-2/5"
            type="text"
            placeholder="Search for events or organizations"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400"
            size={20}
          />
        </div>
      </div>

      <DonationHistoryTable
        donations={filteredDonations}
        isLoading={isLoading}
        searchTerm={searchTerm}
      />
    </div>
  );
};
