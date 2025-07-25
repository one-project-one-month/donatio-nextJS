import { Card } from "@/components/ui/card";

interface KpiCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}

export const KpiCard = ({ icon, value, label }: KpiCardProps) => {
  return (
    <Card className="flex items-start p-4 md:p-6 rounded-xl border h-full">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 text-blue-500 text-lg md:text-xl">
          {icon}
        </div>
        <div>
          <div className="text-2xl md:text-4xl font-normal">{value}</div>
          <div className="text-muted-foreground text-base md:text-xl">
            {label}
          </div>
        </div>
      </div>
    </Card>
  );
};
