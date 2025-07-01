import Image, { StaticImageData } from "next/image";

type EventCardProps = {
  image: StaticImageData;
  org: string;
  title: string;
  description: string;
  amount: string;
};

export default function EventCard({
  image,
  org,
  title,
  description,
  amount,
}: EventCardProps) {
  return (
    <div className="flex flex-col h-full rounded-2xl  overflow-hidden">
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>

      <div className="flex flex-col flex-1 px-4 py-4 justify-between">
        <div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{org}</span>
            <span className="text-primary font-semibold">{amount}</span>
          </div>
          <h3 className="text-lg font-medium mt-2 text-left">{title}</h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-3 text-left">
            {description}
          </p>
        </div>

        <button className="mt-4 w-full bg-primary text-white py-2 rounded-full hover:bg-blue-600 transition">
          Donate Now
        </button>
      </div>
    </div>
  );
}
