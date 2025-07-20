import { KpiCard } from "@/features/organization/components/profile/kpi-card";
import { CalendarIcon, HeartIcon, UserIcon } from "lucide-react";

const Overview = () => {
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
          <span className="font-normal">25,000,000 MMK</span>
        </p>
        <p className="text-xl font-medium text-muted-foreground flex items-baseline gap-3">
          <span>Total Expense:</span>
          <span className="font-normal">5,000,000 MMK</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <KpiCard icon={<CalendarIcon />} value={12} label="Events" />
        <KpiCard icon={<HeartIcon />} value={24} label="Activities" />
        <KpiCard icon={<UserIcon />} value="1,000" label="Donors" />
      </div>
    </section>
  );
};

export default Overview;
