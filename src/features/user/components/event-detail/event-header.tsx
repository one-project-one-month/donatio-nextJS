import ahluImg from "@/assets/image/ahlu.webp";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDate } from "@/utils/formatDate";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventHeaderProps {
  title: string;
  organization: {
    id: string;
    name: string;
    attachments: { file: string }[];
  };
  target_amount: string;
  current_amount: number;
  start_date: string;
  end_date: string;
}

const EventHeader = ({
  title,
  organization,
  target_amount,
  start_date,
  end_date,
  current_amount
}: EventHeaderProps) => {
  const orgLogoUrl =
    organization.attachments.length > 0
      ? organization.attachments[0].file
      : ahluImg;
  const dateRange = `${formatDate(start_date)} - ${formatDate(end_date)}`;

  return (
    <div className="mt-6 flex flex-col md:flex-row justify-between gap-4">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
        <Link
          href={`/donor/organizations/${organization.id}`}
          className="flex items-center gap-3 mt-4 text-gray-500 text-sm"
        >
          <Image
            src={orgLogoUrl}
            alt={organization.name}
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          />
          <span>{organization.name}</span>
        </Link>
      </div>
      <div className="flex flex-col md:items-end gap-2">
        {Number(target_amount) > 0 && (
          <div className="w-full max-w-sm">
            <div className="flex justify-between mb-2">
              <span className="text-md font-medium text-gray-700">
                {current_amount} MMK
              </span>
              <span className="text-md font-medium text-gray-500">
                of {formatCurrency(Number(target_amount))} MMK
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-300">
              <div
                className="bg-primary/80 h-3 rounded-full transition-all"
                style={{
                  width: `${Math.min((current_amount / Number(target_amount)) * 100, 100)}%`,
                }}
              />
            </div>
          </div>
        )}
        <div className="flex items-center gap-2 text-lg text-gray-600">
          <CalendarDays className="w-5 h-5" />
          <span>{dateRange}</span>
        </div>
      </div>
    </div>
  );
};

export default EventHeader;
