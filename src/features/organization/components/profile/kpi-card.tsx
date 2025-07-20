import { Card } from "@/components/ui/card";

interface KpiCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}

export const KpiCard = ({ icon, value, label }: KpiCardProps) => {
  return (
    <Card className="flex items-start p-6 rounded-xl border h-full">
      <div className="flex items-start gap-6">
      <div className="flex items-center justify-center w-12 h-12 rounded-3xl bg-blue-50 text-blue-500 text-xl">
          {icon}
        </div>
        <div>
          <div className="text-4xl">{value}</div>
          <div className="text-gray-500 text-xl">{label}</div>
        </div>
      </div>
    </Card>
  );
};
