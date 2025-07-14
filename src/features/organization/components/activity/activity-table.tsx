'use client';

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ActivityRows from "./activity-rows";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useState } from "react";
import ActivityEditForm from "./activity-edit-form";
import { ActivityTableData } from "../../types/Activity";


const dummyActivities = [
  {
    title: "Food Distribution Drive",
    date: "2025-06-10",
    location: "Yangon, Myanmar",
    totalVoucher: 2,
    image: "https://example.com/images/food-drive.jpg",
    content: "A community event to distribute food to those in need.",
  },
  {
    title: "Blood Donation Camp",
    date: "2025-06-15",
    location: "Mandalay General Hospital",
    totalVoucher: 5,
    image: "https://example.com/images/blood-donation.jpg",
    content: "Join us to donate blood and save lives.",
  },
  {
    title: "Community Cleanup Day",
    date: "2025-06-20",
    location: "Inya Lake Park",
    totalVoucher: 3,
    image: "https://example.com/images/cleanup.jpg",
    content: "Help us clean up the park and make our community cleaner.",
  },
  {
    title: "Free Medical Check-up",
    date: "2025-06-25",
    location: "Downtown Health Center",
    totalVoucher: 4,
    image: "https://example.com/images/medical-checkup.jpg",
    content: "Free health check-ups for the community.",
  },
  {
    title: "Tree Plantation Event",
    date: "2025-06-30",
    location: "Naypyidaw Green Zone",
    totalVoucher: 6,
    image: "https://example.com/images/tree-plantation.jpg",
    content: "Join us in planting trees to combat climate change.",
  }
];


function ActivityTable() {

  const [ isEditFormOpen, setIsEditFormOpen ] = useState(false);
  const [ selectedActivity, setSelectedActivity ] = useState<ActivityTableData>();


  const handleSelectActivity = (activity: ActivityTableData) => {
    setSelectedActivity(activity);
    setIsEditFormOpen(true);
    console.log("Selected Activity:", activity);
  }



  return (
   <section className="overflow-x-auto max-w-full rounded-2xl border mt-8 relative">
      <Table>
        <TableHeader>
          <TableRow className="h-20 bg-dodger-blue-50 hover:bg-dodger-blue-50">
            <TableHead className="sticky min-w-[200px] text-base p-5 font-bold bg-dodger-blue-50 text-start left-0 z-10">Title</TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-center">Date</TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-center">Location</TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-center">Transitions</TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-start">Image</TableHead>
            <TableHead className="sticky max-w-[200px] text-base font-bold text-center bg-dodger-blue-50 right-0 z-10">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyActivities.map((event, rowIdx) => (
            <ActivityRows data={event} setData={handleSelectActivity} key={rowIdx} />
          ))}
        </TableBody>
      </Table>
      <Drawer direction="right" open={isEditFormOpen} onOpenChange={setIsEditFormOpen}>
        <DrawerContent className="max-w-xl min-w-[600px]">
            <ActivityEditForm initialData={selectedActivity??null} />
        </DrawerContent>
      </Drawer>
    </section>
  )
}

export default ActivityTable