import { Button } from "@/components/ui/button";
import { DonateFormData } from "../form/donate-form-popup";
import { getDonateFormData } from "@/store/donateStore";
import { Event } from "../../../../types/Event";
import { Image } from "lucide-react";
import Link from "next/link";


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
    <Link href={`/donor/events/${data.id}`} className="md:my-0 my-3 flex flex-col justify-between max-h-[600px] max-w-[500px]  transition-all duration-300 ">
      <div className="rounded-lg  overflow-hidden">
        {
          data.attachments.length > 0 ? (
            <img
              src={data.attachments[0].url}
              alt={data.title}
              className="w-full h-64 object-cover"
            />
          ) : (
            <div className="w-full h-64 text-neutral-500 bg-neutral-200 flex items-center justify-center">
              <Image size={40} />
            </div>
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
      {/* Button to donate */}
      <Button onClick={handlePopUp}>Donate Now</Button>
    </Link>
  );
}

export default EventListingCard;
