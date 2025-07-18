"use client"
import Image from "next/image";
import { LucideMessageCircleMore } from "lucide-react";
import donationImg from "@/assets/image/eventDetail1.png"
import ahluImg from "@/assets/image/ahlu.webp";
import BreadCrumbUI from "@/components/common/breadcrumb-ui";

import DonateFormPopUp from "@/features/user/components/form/donate-form-popup";
import { useState } from "react";
import Events from "@/features/user/components/organization/organization-events";
import Activities from "@/features/user/components/organization/organization-activities";

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
    tag: "Charity Organization",
    description: `Following the devastating floods in Mandalay, countless families have lost their homes, livelihoods, and sense of security. "Rebuilding Hope: Post-Disaster Relief" is an urgent initiative by Ahlu Myanmar to provide immediate and long-term support to these affected communities. Our comprehensive relief efforts focus on more than just temporary aid; we're committed to helping families rebuild their lives from the ground up. This involves a multi-phased approach addressing critical needs in the immediate aftermath and throughout the recovery process.`,
    target_amount: 10000000, // decimal
    current_amount: 8000000,
    visit_count: 1234, // optional int
    attachments: donationImg, // file
    start_date: "2025-06-15T00:00:00Z", // datetime
    end_date: "2025-08-25T00:00:00Z", // datetime
    eventsData: [
        {
            id: "event1",
            organization: {
                name: "Ahlu Myanmar",
                avatar: ahluImg,
                description: `Ahlu Myanmar is a registered non-profit organization dedicated to building community resilience and
providing humanitarian assistance across Myanmar. With over IO years Of experience in disaster response and community
development, we work tirelessly to support vulnerable populations. Learn more about our mission and impact on our Organization
Profile. (Link)`
            },
            title: "Rebuilding Hope: Post-Disaster Relief",
            description: `Following the devastating floods in Mandalay, countless families have lost their homes, livelihoods, and sense of security. "Rebuilding Hope: Post-Disaster Relief" is an urgent initiative by Ahlu Myanmar to provide immediate and long-term support to these affected communities. Our comprehensive relief efforts focus on more than just temporary aid; we're committed to helping families rebuild their lives from the ground up. This involves a multi-phased approach addressing critical needs in the immediate aftermath and throughout the recovery process.`,
            target_amount: 10000000,

        },
        {
            id: "event2",
            title: "Fundraising Gala",
            date: "2025-08-10",
            description: "Attend our annual fundraising gala to support our ongoing relief efforts."
        }
    ],
    activitiesData: [
        {
            id: "activity1",
            name: "Volunteer Training",
            date: "2025-06-20",
            description: "Participate in our volunteer training session to learn how you can help."
        },
        {
            id: "activity2",
            name: "Food Drive",
            date: "2025-07-15",
            description: "Join us for a food drive to collect non-perishable items for those in need."
        }
    ]
};

export default function OrganizationProfile() {
    const {
        description,
        attachments,
        tag,
        organization,
        eventsData,
        activitiesData
    } = mockEventData;
    const [activeTab, setActiveTab] = useState("events");
    return (
        <div className="mx-auto rounded-3xl mt-10">


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
            <div className="mt-4 flex flex-col items-center md:flex-row justify-between gap-4">

                <div className="flex items-center gap-3 mt-2">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden relative">
                        <Image
                            src={organization.avatar}
                            alt={organization.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-3xl font-bold">{organization.name}</span>
                        <span className="text-sm text-primary font-medium"> {tag}</span>
                    </div>
                </div>


                <div className="md:items-end gap-2">
                    <button className="min-w-[150px] flex items-center gap-2 px-6 py-4 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors cursor-pointer">
                        <LucideMessageCircleMore />
                        Send Message
                    </button>

                </div>
            </div>

            {/* Description Section */}
            <div className="mt-10 space-y-2">
                <div className="text-xl font-bold text-gray-800">Description</div>
                <p className="font-light text-gray-600 text-base leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Tabs */}
            <div className="mt-8">
                <div className="flex space-x-4 border-b border-gray-200">
                    <button
                        className={`pb-2 text-sm font-medium ${activeTab === "events"
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                        onClick={() => setActiveTab("events")}
                    >
                        Events
                    </button>
                    <button
                        className={`pb-2 text-sm font-medium ${activeTab === "activities"
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                        onClick={() => setActiveTab("activities")}
                    >
                        Activities
                    </button>
                </div>

                {/* Tab Content */}
                <div className="mt-4">
                    {activeTab === "events" && <Events />}
                    {activeTab === "activities" && ( <Activities />
                    )}
                </div>
            </div>
        </div>
    )
}
