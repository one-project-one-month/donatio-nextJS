import { Image as ImageIcon } from "lucide-react";
import { Organization } from "../../../../types/Organization";
import Link from "next/link";

type OrganizationCardProps = {
  data: Organization;
};

function OrganizationCard({ data }: OrganizationCardProps) {
  return (
    <Link href={`/donor/organizations/${data.id}`}>
      <div className="bg-white dark:bg-neutral-950 text-center transition-all flex flex-col relative group hover:shadow-md dark:shadow-neutral-700 rounded-2xl overflow-hidden border border-gray-100 dark:border-neutral-500">
      {/* Image Area */}
      <div className="w-full h-[240px] flex justify-center items-center bg-gray-50 dark:bg-neutral-900 relative">
        {data?.attachments?.[0] ? (
          <img
            src={data.attachments[0]}
            alt={data.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-neutral-300">
            <ImageIcon className="w-16 h-16" />
            <span className="text-sm mt-2 text-neutral-400">No Image</span>
          </div>
        )}
      </div>

      {/* Name and Type */}
      <div className="text-start p-4">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300 truncate">{data?.name}</h3>
        {data?.type && (
          <p className="text-sm text-neutral-400 font-normal mt-1">{data.type}</p>
        )}
      </div>
    </div>
    </Link>
  );
}

export default OrganizationCard;
