import Image from "next/image";
import { CalendarDays } from "lucide-react";
import donationImg from "@/assets/image/eventDetails1.png";
import ahluImg from "@/assets/image/ahlu.webp";
import BreadCrumbUI from "@/components/common/breadcrumb-ui";

// ✅ Updated to match database schema
const mockEventData = {
  id: "b13f1a08-3d77-4d8e-939e-1dcf879b824e", // UUID
  organization: {
    name: "Ahlu Myanmar",
    avatar: ahluImg,
    description: `Ahlu Myanmar is a registered non-profit organization dedicated to building community resilience and
providing humanitarian assistance across Myanmar. With over IO years Of experience in disaster response and community
development, we work tirelessly to support vulnerable populations. Learn more about our mission and impact on our Organization
Profile. (Link)`
  },
  title: "Rebuilding Hope: Post-Disaster Relief", // char
  description: `Following the devastating floods in Mandalay, countless families have lost their homes, livelihoods, and sense of security. "Rebuilding Hope: Post-Disaster Relief" is an urgent initiative by Ahlu Myanmar to provide immediate and long-term support to these affected communities. Our comprehensive relief efforts focus on more than just temporary aid; we're committed to helping families rebuild their lives from the ground up. This involves a multi-phased approach addressing critical needs in the immediate aftermath and throughout the recovery process.`,
  target_amount: 10000000, // decimal
  current_amount: 8000000,
  visit_count: 1234, // optional int
  attachments: donationImg, // file
  start_date: "2025-06-15T00:00:00Z", // datetime
  end_date: "2025-08-25T00:00:00Z", // datetime
};

export default function EventDetails() {
  const {
    title,
    description,
    attachments,
    target_amount,
    current_amount,
    start_date,
    end_date,
    visit_count,
    organization,
  } = mockEventData;

  const dateRange = `${new Date(start_date).toLocaleDateString()} - ${new Date(
    end_date
  ).toLocaleDateString()}`;

  return (
    <div className="mx-auto rounded-3xl mt-10">
      {/* Breadcrumb */}
      <BreadCrumbUI
        links={[{ name: "Events", path: "/events" }]}
        currentPageTitle={title} />

      {/* Banner */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden mt-5">
        <Image
          src={attachments}
          alt="Event Banner"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Header Info */}
      <div className="mt-6 flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

          <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src={organization.avatar}
                alt={organization.name}
                width={40}
                height={40}
              />
            </div>
            <span>by {organization.name}</span>
          </div>
        </div>

        <div className="flex flex-col md:items-end gap-2">
          {/* target indicator */}
          {target_amount > 0 && (
            <div className="w-full max-w-sm">
              <div className="flex justify-between mb-1">
                <span className="text-md font-medium text-gray-700">
                  {new Intl.NumberFormat().format(current_amount)} MMK
                </span>
                <span className="text-md font-medium text-gray-500">
                  of {new Intl.NumberFormat().format(target_amount)} MMK
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-300">
                <div
                  className="bg-primary/80 h-3 rounded-full transition-all"
                  style={{
                    width: `${Math.min((current_amount / target_amount) * 100, 100)}%`,
                  }}
                />
              </div>
            </div>
          )}

          <div className="flex items-center gap-1 text-lg text-gray-600">
            <CalendarDays className="w-4 h-4" />
            <span>{dateRange}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-end mt-4">
        <button className="px-5 py-2 text-primary border border-primary font-medium rounded-full hover:bg-primary/90 hover:text-white transition">
          See activities
        </button>
        <button className="px-5 py-2 bg-primary text-white font-medium rounded-full hover:bg-primary/80 transition">
          Donate Now
        </button>
      </div>

      {/* Description Section */}
      <div className="mt-10 space-y-2">
        <div className="text-xl font-bold text-gray-800">Description</div>
        <p className="font-light text-gray-600 text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Organization Info */}
      <div className="mt-6 space-y-2">
        <div className="text-xl font-bold text-gray-800">About the Organization</div>
        <span className="font-light text-gray-600 text-base leading-relaxed">
          {organization.description}
        </span>
      </div>

      {/* Visit Count */}
      {visit_count > 0 && (
        <div className="mt-4 text-sm text-gray-500">
          👁️ {visit_count === 1
            ? "1 view"
            : `${new Intl.NumberFormat().format(visit_count)} views`}
        </div>
      )}

    </div>
  );
}
