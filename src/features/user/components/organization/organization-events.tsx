import Image, { StaticImageData } from "next/image";
import EventImg from "@/assets/image/event1.png"; // Example image, replace with actual image path

type Event = {
    id: string;
    image: StaticImageData; 
    organization: string;
    amount: string;
    title: string;
    description: string;
};

const mockData: Event[] = [
    {
        id: "1",
        image: EventImg,
        organization: "Ahlu Myanmar",
        amount: "10,000,000 MMK",
        title: "Rebuilding Hope: Post-Disaster Relief",
        description:
            "Following the devastating floods in Mandalay, countless families have lost their homes, livelihoods, and sense of security.",
    },
    // Add more mock events as needed
];

type EventsProps = {
    events?: Event[];
};

export default function Events({ events = mockData }: EventsProps) {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white shadow-md rounded-lg p-4 max-h-[400px] overflow-hidden space-y-4"
                    >
                        <Image
                            src={event.image}
                            alt="Event Image"
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <span className="flex justify-between">
                            <span className="font-light">{event.organization}</span>
                            <span className="text-sm font-semibold text-primary">{event.amount}</span>
                        </span>
                        <h3 className="text-lg font-semibold mt-2">{event.title}</h3>
                        <p className="text-gray-500 font-light">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
