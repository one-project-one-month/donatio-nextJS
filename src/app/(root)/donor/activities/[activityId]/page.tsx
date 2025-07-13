/* eslint-disable @next/next/no-img-element */
"use client"
import BreadCrumbUI from "@/components/common/breadcrumb-ui";
import { ActivityAttachmentCarousel } from "@/features/user/components/activity/activity-imageCarousel";
import { Calendar, MapPin, TrendingUp } from "lucide-react";
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
    return (<div className="mx-auto rounded-3xl mt-10">

        <div className="mt-12">
            <BreadCrumbUI
                links={[{ name: "Activities", path: "/activities" }]}
                currentPageTitle={title} />
        </div>

        <div className="w-full mt-10 p-3  transition-all duration-300 cursor-default">
            <div className="flex md:justify-end justify-end mb-3  ">
                <div className="ms-3 md:px-5 items-center text-xs sm:flex hidden justify-center font-light hover:text-black text-slate-500 transition duration-300">
                    <MapPin className="border transition-all duration-300 ease-in-out rounded-full md:size-9 md:p-2 p-1 size-7 bg-orange-500/[0.3] text-orange-900 me-3 hover:rounded-lg" />{" "}
                    {location}
                </div>
                <div className="flex ms-3 px-5 items-center justify-center text-xs font-light hover:text-black text-slate-500 transition duration-300">
                    <TrendingUp className="transition-all duration-300 ease-in-out hover:rounded-lg rounded-full me-3 md:size-9 md:p-2 p-1 size-7 bg-orange-500/[0.1] border text-orange-900" />{" "}
                    {projectRange} Families
                </div>
                <div className="flex ms-3 ps-5 items-center justify-center text-xs font-light hover:text-black text-slate-500 transition duration-300">
                    <div className="border bg-blue-300 rounded-lg w-fit p-1 px-2 text-blue-900">
                        {status}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between my-3">
                <div className="md:text-3xl text-xl font-bold text-blue-500 hover:text-blue-300 transition-all duration-300">
                    <a href="#">{title}</a>
                </div>
                <div className="flex items-end justify-center font-light text-slate-500 ">
                    <Calendar className="me-3" /> {date}
                </div>
            </div>
            <div>
                <div className="font-light mb-10">ICON : {hostedBy}</div>
            </div>
            <div>
                <div className="text-justify text-slate-400 text-light my-12">
                    <div className="text-xl text-black my-1">Description</div>
                    {description}
                </div>

            </div>
            <div className="border p-3 rounded">
                <div className="p-2 font-semibold text-xl">
                    Activity Images
                </div>
                <ActivityAttachmentCarousel images={activityImages} />
            </div>
            <div className="border p-3 rounded my-12">
                <div className="p-2 font-semibold text-xl text-slate-300">Expense Transition</div>
                <Transitions data={expenseTransitions} />
            </div>
        </div>
    </div>)
}

// --- Transitions --- //
const Transitions = ({ data }: { data: ExpenseTransition[] }) => {
    return (<div className="p-5 ">
        {data?.map((record, index) => (<div key={index}>
            <div className="text-lg text-slate-600 my-2 flex justify-between">
                <div>
                    {record?.description}
                </div>
                <div className="text-blue-300">
                    {record?.target}
                </div>
            </div>
            <div className="my-3 text-slate-500 flex">
                <Calendar className="size-5 me-1" />{record?.date}
            </div>
            <div className="flex hover:overflow-x-auto overflow-hidden space-x-3">
                {record?.imageUrl?.map((img, key) => (<div key={key} className="flex-shrink-0 me-3">
                    <img
                        src={img}
                        className="h-[240px] rounded w-full "
                        alt="Certificate"
                    />
                </div>))}
            </div>
        </div>))}
    </div>)
}