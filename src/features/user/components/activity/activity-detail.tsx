import { Activity, ActivityTransaction } from "@/types/Activity";
import { Calendar, Image, MapPin } from "lucide-react";
import Link from "next/link";
import { ActivityAttachmentCarousel } from "./activity-imageCarousel";
import { ISODateFormat } from "@/lib/dateFormat";

type ActivityDetailProps = {
  data: Activity | null;
};

function ActivityDetail({ data }: ActivityDetailProps) {
  return (
    <>
      <ActivityInfo data={data} />
      <ImageField data={data?.attachments.map((at) => at.file) ?? []} />
      <TransactionField data={data?.activity_transactions ?? null} />
    </>
  );
}

function ActivityInfo({ data }: ActivityDetailProps) {
  return (
    <section className="w-full my-6 transition-all duration-300">
      {/* Location */}
      <div className="flex justify-end mb-3">
        <div className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors duration-300">
          <MapPin className="rounded-full size-7 md:size-9 p-1 md:p-2 bg-orange-100 dark:bg-neutral-950 dark:border text-orange-600 me-2" />
          <span>{data?.location}</span>
        </div>
      </div>

      {/* Title & Date */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between my-4 gap-2">
        <div className="text-xl md:text-4xl font-bold text-primary">
          {data?.title}
          <div className="flex items-center gap-2 text-sm mt-2 text-muted-foreground">
            <div className="border p-1 rounded-full">
              <Image size={18} />
            </div>
            <Link
              href={`/donor/organization/${data?.organization.id}`}
              className="hover:underline font-medium"
            >
              by {data?.organization.name}
            </Link>
          </div>
        </div>
        <div className="flex items-center text-sm text-muted-foreground font-medium mt-2 md:mt-0">
          <Calendar className="me-2 size-4" />
          <span>{data?.created_at}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-justify text-neutral-800 dark:text-neutral-300 leading-relaxed mt-3">
        {data?.description}
      </p>
    </section>
  );
}

type ImageFieldProps = {
  data: string[];
};

function ImageField({ data }: ImageFieldProps) {
  if (data.length === 0) return null;
  return (
    <section className="mt-6">
      <div className="px-2 text-lg font-semibold text-neutral-800 dark:text-neutral-300 mb-3">
        Activity Images
      </div>
      <ActivityAttachmentCarousel images={data} />
    </section>
  );
}


type TransactionFieldProps = {
  data: ActivityTransaction[] | null;
};

function TransactionField({ data }: TransactionFieldProps) {
  if (!data || data.length === 0) return null;
  return (
    <section className="w-full mt-10 transition-all duration-300">
      <div className="px-2 mb-6 text-lg font-semibold text-neutral-800 dark:text-neutral-300">
        Expense Transactions
      </div>
      <div className="space-y-6 p-2">
        {data.map((record, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex justify-between text-base font-medium text-neutral-800 dark:text-neutral-300 mb-2">
              <span>{record.transaction.title}</span>
              <span className="text-blue-500">{record.transaction.amount} MMK</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Calendar className="size-4 me-2" />
              <span>{ISODateFormat(record.transaction.created_at)}</span>
            </div>
            <div className="flex overflow-x-auto space-x-3 scrollbar-thin scrollbar-thumb-gray-300">
              {record.transaction.attachments?.map((img, key) => (
                <div key={key} className="flex-shrink-0">
                  <img
                    src={img.file}
                    alt="Attachment"
                    className="rounded-lg h-[200px] w-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivityDetail;
