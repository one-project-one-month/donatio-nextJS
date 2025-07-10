import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


import EventRows from "./event-rows";


const dummyEvents = [
    {
        title: "Clean Water Initiative",
        startDate: "2024-07-01",
        endDate: "2024-07-31",
        goalAmount: 5000,
        image: "https://via.placeholder.com/100x60?text=Water",
    },
    {
        title: "Back to School Drive",
        startDate: "2024-08-10",
        endDate: "2024-09-10",
        goalAmount: 3000,
        image: "https://via.placeholder.com/100x60?text=School",
    },
    {
        title: "Food for All",
        startDate: "2024-09-15",
        endDate: "2024-10-15",
        goalAmount: 7000,
        image: "https://via.placeholder.com/100x60?text=Food",
    },
    {
        title: "Winter Clothing Campaign",
        startDate: "2024-11-01",
        endDate: "2024-12-01",
        goalAmount: 4000,
        image: "https://via.placeholder.com/100x60?text=Clothing",
    },
    {
        title: "Healthcare Outreach",
        startDate: "2024-12-10",
        endDate: "2025-01-10",
        goalAmount: 6000,
        image: "https://via.placeholder.com/100x60?text=Health",
    },
];

function EventTable() {
  return (
    <section className="overflow-x-auto max-w-full rounded-2xl border mt-8 relative">
      <Table>
        <TableHeader>
          <TableRow className="h-20 bg-dodger-blue-50 hover:bg-dodger-blue-50">
            <TableHead className="sticky min-w-[200px] text-base p-5 font-bold bg-dodger-blue-50 text-start left-0 z-10">Title</TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-center">Start Date</TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-center">End Date</TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-center">Goal Amount</TableHead>
            <TableHead className="min-w-[200px] text-base font-bold text-start">Image</TableHead>
            <TableHead className="sticky min-w-[200px] text-base font-bold text-center bg-dodger-blue-50 right-0 z-10">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyEvents.map((event, rowIdx) => (
            <EventRows data={event} key={rowIdx} />
          ))}
        </TableBody>
      </Table>
      
    </section>
  );
}

export default EventTable;
