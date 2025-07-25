/* eslint-disable @next/next/no-img-element */
"use client"

import BreadCrumbUI from "@/components/common/breadcrumb-ui";
import ActivityDetail from "@/features/user/components/activity/activity-detail";
import { ActivityAttachmentCarousel } from "@/features/user/components/activity/activity-imageCarousel";
import { useGetActivityById } from "@/features/user/hooks/donor-activity-queries";
import { Calendar, MapPin, TrendingUp } from "lucide-react";
import { useParams } from "next/navigation";
interface ExpenseTransition {
    description: string;
    imageUrl: string[];
    date: string;
    target: string
}
interface ActivityData {
    title: string;
    hostedBy: string;
    description: string;
    activityImages: string[];
    location: string;
    projectRange: string;
    status: "Planned" | "Ongoing" | "Completed" | "Cancelled";
    date: string;
    expenseTransitions: ExpenseTransition[];
}


const mockActivityData: ActivityData = {
    title: "Community Food Relief Program",
    hostedBy: "Helping Hands Foundation",
    description:
        "Supporting 300 families with food and hygiene kits in Mandalay. This initiative aims to alleviate the impact of economic hardship caused by recent crises. Volunteers and community members came together to organize, package, and distribute essential supplies including rice, cooking oil, canned food, and basic sanitation products. The program also included educational outreach to promote hygiene awareness and health safety practices. Our goal was not only to provide short-term relief, but also to uplift the spirits of struggling families and foster a sense of community resilience.",

    activityImages: [
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVscGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1651372381086-9861c9c81db5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVscGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    location: "Mandalay, Myanmar",
    projectRange: "300 families",
    status: "Completed",
    date: "2025-07-05",
    expenseTransitions: [
        { description: "Basic Tools and Setup Equipment", imageUrl: ["https://images.unsplash.com/photo-1616101001234-7320af4f1aa7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D", "https://plus.unsplash.com/premium_photo-1661549683908-b11e9855c469?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1568741049635-59b0c30bf2de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNlcnRpZmljYXRlfGVufDB8fDB8fHww"], date: "2025-07-01", target: "13000 MMK" },
        { description: "Materials", imageUrl: ["https://images.unsplash.com/photo-1568057373189-8bf0cf6179e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNlcnRpZmljYXRlfGVufDB8fDB8fHww"], date: "2025-8-2", target: "2000 MMK" }
    ]
};
export default function Page() {
    const {
        title,
        hostedBy,
        description,
        activityImages,
        location,
        projectRange,
        status,
        date,
        expenseTransitions
    } = mockActivityData;

    const { activityId } = useParams();
    const id = activityId as string;

    const { data, isLoading } = useGetActivityById(id);



    return (<div className="mx-auto rounded-3xl my-10 px-5">
            <BreadCrumbUI
                links={[{ name: "Activities", path: "/donor/activities" }]}
                currentPageTitle={data?.title} />
            <ActivityDetail data={data?? null} />


        
    </div>)
}