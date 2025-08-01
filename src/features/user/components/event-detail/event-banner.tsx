import placeholderBanner from "@/assets/image/eventDetail1.png";
import Image from "next/image";

interface EventBannerProps {
  bannerUrl: string | null;
}

const EventBanner = ({ bannerUrl }: EventBannerProps) => {
  const url = bannerUrl || placeholderBanner;
  return (
    <div className="w-full relative aspect-[2/1] md:aspect-[3/1]">
      <Image
        src={url}
        alt="Event Banner"
        fill
        className="object-cover rounded-3xl"
      />
    </div>
  );
};

export default EventBanner;
