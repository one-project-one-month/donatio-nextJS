import { Button } from "@/components/ui/button";
import { DonateFormData } from "../form/donate-form-popup";
import { getDonateFormData } from "@/store/donateStore";
import { Event } from "../../../../types/Event";
import { Image } from "lucide-react";
import Link from "next/link";
import { getRandomImg } from "@/lib/common";


function EventListingCard({
  data,
  setFormData,
  setIsVisible,
}: {
  data: Event;
  setFormData: (data: any) => void;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handlePopUp = () => {

    const formData = {
      ...getDonateFormData(),
      organization: data.organization.name,
      event: data.title,
      orgId: data.organization.id,
      eventId: data.id
    }


    setFormData(formData);
    setIsVisible(true);
  };

  return (
    <div className="md:my-0 my-3 flex flex-col justify-between max-h-[600px] max-w-[500px]  transition-all duration-300 ">
      <Link href={`/donor/events/${data.id}`}>
      <div className="rounded-lg  overflow-hidden">
        {
          data.attachments.length > 0 ? (
            <img
              src={`http://localhost:8000/${data.attachments[0]}`}
              alt={data.title}
              className="w-full h-64 object-cover"
            />
          ) : (
            <img
              src={getRandomImg('event')??"https://i.pinimg.com/736x/dd/cb/36/ddcb361a6f93e2518268638305e528ba.jpg"}
              alt={data.title}
              className="w-full h-64 object-cover"
            />
          )
        }
        <div className="flex justify-between mb-1 text-sm my-2">
          <div className="text-neutral-500">{data?.organization.name}</div>
          <div className="text-dodger-blue-400">{data?.organization.name}</div>
        </div>
      </div>

      {/* description and title */}
      <div className="text-justify">
        <div className="font-bold text-xl">{data?.title}</div>
        <div className="text-justify text-sm my-3 min-h-30">
          {data?.description}
        </div>
      </div>
      </Link>
      {/* Button to donate */}
      <Button onClick={(e) => {
        e.stopPropagation();
        handlePopUp()
      }}>Donate Now</Button>
    </div>
  );
}

export default EventListingCard;
