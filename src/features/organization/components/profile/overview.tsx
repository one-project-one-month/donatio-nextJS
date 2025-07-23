"use client";

import { KpiCard } from "@/features/organization/components/profile/kpi-card";
import {
  useOrganizationActivitiesQuery,
  useOrganizationEventsQuery,
} from "@/features/organization/hooks/organization-kpi-queries";
import { OrganizationProfile } from "@/types/Organization";
import { formatCurrency } from "@/utils/formatCurrency";
import { CalendarIcon, HeartIcon, UserIcon } from "lucide-react";

interface OverviewProps {
  data: OrganizationProfile;
}

const Overview = ({ data }: OverviewProps) => {
  const { stats, total_donors } = data;
  const { data: eventsCount } = useOrganizationEventsQuery();
  const { data: activitiesCount } = useOrganizationActivitiesQuery();
  return (
    <section aria-labelledby="overview-heading" className="space-y-4">
      <h2
        id="overview-heading"
        className="text-3xl font-medium text-dodger-blue-600"
      >
        Overview
      </h2>
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium text-muted-foreground flex items-baseline gap-3">
          <span>Total Donation:</span>
          <span className="font-normal">
            {formatCurrency(stats.total_received_money)} MMK
          </span>
        </p>
        <p className="text-xl font-medium text-muted-foreground flex items-baseline gap-3">
          <span>Total Expense:</span>
          <span className="font-normal">
            {formatCurrency(stats.total_expense)} MMK
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <KpiCard
          icon={<CalendarIcon />}
          value={eventsCount ?? 0}
          label="Events"
        />
        <KpiCard
          icon={<HeartIcon />}
          value={activitiesCount ?? 0}
          label="Activities"
        />
        <KpiCard icon={<UserIcon />} value={total_donors ?? 0} label="Donors" />
      </div>
    </section>
  );
};

export default Overview;