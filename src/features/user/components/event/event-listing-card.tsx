import { Button } from "@/components/ui/button";
import { DonateFormData } from "../form/donate-form-popup";
import { getDonateFormData } from "@/store/donateStore";

type EventListingCardProps = {
  id: number;
  image: string;
  orgName: string;
  target: string;
  title: string;
  description: string;
};

function EventListingCard({
  data,
  setFormData,
  setIsVisible,
}: {
  data: EventListingCardProps;
  setFormData: (data: any) => void;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handlePopUp = () => {

    const formData = {
      ...getDonateFormData(),
      organization: data.orgName,
      event: data.title
    }


    setFormData(formData);
    setIsVisible(true);
  };

  return (
    <div className="md:my-0 my-3 flex flex-col justify-between max-h-[600px] max-w-[500px] rounded  transition-all duration-300 ">
      <div className="rounded-lg  overflow-hidden">
        <img
          src={data?.image}
          className="w-full rounded max-h-[300px]"
          alt="img"
        />
        <div className="flex justify-between mb-1 text-sm my-2">
          <div className="text-neutral-500">{data?.orgName}</div>
          <div className="text-blue-400">{data?.target}</div>
        </div>
      </div>

      {/* description and title */}
      <div className="text-justify">
        <div className="font-bold text-xl">{data?.title}</div>
        <div className="text-justify text-sm text-slate-500 hover:text-slate-900 my-3 ">
          {data?.description}
        </div>
      </div>
      {/* Button to donate */}
      <Button onClick={handlePopUp}>Donate Now</Button>
    </div>
  );
}

export default EventListingCard;
