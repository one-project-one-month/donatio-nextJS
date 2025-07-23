import Image, { StaticImageData } from "next/image";
import { LucideCalendar, LucideChevronRight, LucideHandHeart, LucideMapPin } from "lucide-react";
import ahluImg from "@/assets/image/ahlu.webp";

// Mock activity data for development/testing
const mockActivity: Activity = {
    id: "1",
    title: "Food Distribution Drive",
    location: "Downtown Community Center",
    families: 120,
    status: "Upcoming",
    date: "2024-07-15",
    organization: {
        name: "Helping Hands Org",
        logo: ahluImg, // Replace with actual logo URL
    },
    description:
        "Join us for our monthly food distribution drive to support families in need. Volunteers are welcome to help with packing and distribution.",
};

type Activity = {
    id: string;
    title: string;
    location: string;
    families: number;
    status: string;
    date: string;
    organization: {
        name: string;
        logo: StaticImageData; // image url
    };
    description: string;
};

type ActivitiesProps = {
    activity: Activity;
    onViewDetails?: (id: string) => void;
};

export default function Activities({ activity = mockActivity, onViewDetails }: ActivitiesProps) {
    return (
        <div className=" rounded-xl p-6 shadow-sm">
            {/* Activity Information */}
            <div className="flex flex-row justify-end gap-10">
                <div className="flex items-center gap-2 text-amber-700">
                    <div className="bg-amber-100 p-2 rounded-full">
                        <LucideMapPin className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-sm">{activity.location}</span>
                </div>
                <div className="flex items-center gap-2 text-green-700">
                    <div className="bg-green-100 p-2 rounded-full">
                        <LucideHandHeart className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-sm">{activity.families} Families</span>
                </div>
                <div className="px-4 py-1 bg-primary/15 text-primary rounded-full">{activity.status}</div>
            </div>

            {/* Activity Title and Date */}
            <div className="flex justify-between mt-4">
                <div>
                    <span className="text-2xl font-bold text-primary">{activity.title}</span>
                    <div className="flex items-center gap-3">
                        <div className="w-15 h-15 bg-gray-100 rounded-full shadow-sm flex items-center justify-center overflow-hidden relative">
                            <Image
                                src={activity.organization.logo}
                                alt={activity.organization.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-sm font-medium">by {activity.organization.name}</span>
                    </div>
                </div>
                <div className="flex gap-2 text-gray-500">
                    <LucideCalendar className="w-5 h-5" />
                    <span>{activity.date}</span>
                </div>
            </div>

            {/* Activity Description */}
            <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                <div className="flex-1">
                    <p className="font-semibold text-lg text-primary mb-2">Description</p>
                    <p className="text-gray-700 leading-relaxed">{activity.description}</p>
                </div>
                <button
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition mt-4 md:mt-0"
                    // onClick={() => onViewDetails?.(activity.id)}
                >
                    View details
                    <LucideChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
