import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import ActivityListingCard from "./activity-listing-card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Section } from "lucide-react";

// activties mock up
const activities = [
  {
    id: 1,
    title: "Community Support Drive",
    date: "2025-07-03",
    eventName: "ICON:Name",
    description:
      "Join us in supporting local families with food, supplies, and essential resources. A day of giving, connecting, and uplifting those in need. Volunteers and donors are welcome to make a meaningful difference by participating in community outreach and support programs.",
    status: "Ongoing",
    address: "123 Kindness Lane, Hopeville",
    familiesHelped: 120,
    tags: {
      Address: "123 Kindness Lane, Hopeville",
      Families: 120,
      Status: "Ongoing",
    },
  },
  {
    id: 2,
    title: "Warm Meals for Winter",
    date: "2025-12-10",
    eventName: "ICON:Name",
    description:
      "Distributing warm meals and care packages to the homeless during the cold season. Volunteers needed for packing and delivery. This initiative ensures that no one is left hungry or cold during the most challenging time of the year, spreading warmth and kindness across the city.",
    status: "Upcoming",
    address: "Shelter HQ, Block 14B, Downtown",
    familiesHelped: 75,
    tags: {
      Address: "Shelter HQ, Block 14B, Downtown",
      Families: 75,
      Status: "Upcoming",
    },
  },
  {
    id: 3,
    title: "Books for All",
    date: "2025-09-15",
    eventName: "ICON:Name",
    description:
      "A literacy-focused campaign to provide books, backpacks, and writing tools to underprivileged school children in rural areas. Through this program, we aim to empower young minds by giving them access to education and knowledge, planting the seeds for a brighter future.",
    status: "Completed",
    address: "Library Hall, Oakridge",
    familiesHelped: 200,
    tags: {
      Address: "Library Hall, Oakridge",
      Families: 200,
      Status: "Completed",
    },
  },
  {
    id: 4,
    title: "Clean Water Project",
    date: "2025-08-01",
    eventName: "ICON:Name",
    description:
      "Building sustainable clean water wells in rural areas without access to clean drinking water. Join us in making health accessible. With your help, we can prevent waterborne diseases and improve the quality of life for entire communities.",
    status: "Ongoing",
    address: "Riverbank Village, Sector 9",
    familiesHelped: 300,
    tags: {
      Address: "Riverbank Village, Sector 9",
      Families: 300,
      Status: "Ongoing",
    },
  },
  {
    id: 6,
    title: "Clean Water Project",
    date: "2025-08-01",
    eventName: "ICON:Name",
    description:
      "Building sustainable clean water wells in rural areas without access to clean drinking water. Join us in making health accessible. With your help, we can prevent waterborne diseases and improve the quality of life for entire communities.",
    status: "Ongoing",
    address: "Riverbank Village, Sector 9",
    familiesHelped: 300,
    tags: {
      Address: "Riverbank Village, Sector 9",
      Families: 300,
      Status: "Ongoing",
    },
  },
  {
    id: 5,
    title: "Clean Water Project",
    date: "2025-08-01",
    eventName: "ICON:Name",
    description:
      "Building sustainable clean water wells in rural areas without access to clean drinking water. Join us in making health accessible. With your help, we can prevent waterborne diseases and improve the quality of life for entire communities.",
    status: "Ongoing",
    address: "Riverbank Village, Sector 9",
    familiesHelped: 300,
    tags: {
      Address: "Riverbank Village, Sector 9",
      Families: 300,
      Status: "Ongoing",
    },
  },
];

function ActivityListing() {
  return (
    <section>
      <ScrollArea className="my-9 h-dvh">
        <div className="p-5">
            {activities?.map((activity) => (
          <ActivityListingCard key={activity.id} data={activity} />
        ))}
        </div>
      </ScrollArea>
    </section>
  );
}

export default ActivityListing;










