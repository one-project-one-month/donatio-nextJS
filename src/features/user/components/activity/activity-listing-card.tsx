import { Calendar, MapPin, TrendingUp } from "lucide-react";

type ActivityListingCardProps = {
  id: number;
  title: string;
  date: string;
  eventName: string;
  description: string;
  status: string;
  address: string;
  familiesHelped: number;
  tags: {
    Address?: string;
    Families?: number;
    Status?: string;
  };
};

function ActivityListingCard({ data }: { data: ActivityListingCardProps }) {
  return (
    <div className="w-full rounded-2xl hover:shadow-lg shadow-sm p-3 my-10 transition-all duration-300 cursor-default">
      <div className="flex md:justify-end justify-end mb-3  ">
        <div className="ms-3 md:px-5 items-center text-xs sm:flex hidden justify-center font-light hover:text-black text-slate-500 transition duration-300">
          <MapPin className="border transition-all duration-300 ease-in-out rounded-full md:size-9 md:p-2 p-1 size-7 bg-orange-500/[0.3] text-orange-900 me-3 hover:rounded-lg" />{" "}
          {data?.tags?.Address}
        </div>
        <div className="flex ms-3 px-5 items-center justify-center text-xs font-light hover:text-black text-slate-500 transition duration-300">
          <TrendingUp className="transition-all duration-300 ease-in-out hover:rounded-lg rounded-full me-3 md:size-9 md:p-2 p-1 size-7 bg-orange-500/[0.1] border text-orange-900" />{" "}
          {data?.tags?.Families} Families
        </div>
        <div className="flex ms-3 ps-5 items-center justify-center text-xs font-light hover:text-black text-slate-500 transition duration-300">
          <div className="border bg-blue-300 rounded-lg w-fit p-1 px-2 text-blue-900">
            {data?.tags?.Status}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between my-3">
        <div className="md:text-3xl text-xl font-bold text-blue-500 hover:text-blue-300 transition-all duration-300">
          <a href="#">{data.title}</a>
        </div>
        <div className="flex items-end justify-center font-light text-slate-500 ">
          <Calendar className="me-3" /> {data?.date}
        </div>
      </div>
      <div>
        <div className="font-light my-1">{data?.eventName}</div>
      </div>
      <div>
        <div className="text-justify text-slate-400 text-light my-4">
          {data?.description}
        </div>
        <div className="text-end text-blue-300 my-3">
          <a href="#">View Detail</a>
        </div>
      </div>
    </div>
  );
}

export default ActivityListingCard;
