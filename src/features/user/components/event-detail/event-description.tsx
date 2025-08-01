interface EventDescriptionProps {
  description: string;
}

const EventDescription = ({ description }: EventDescriptionProps) => {
  return (
    <div className="mt-10 space-y-4">
      <div className="text-lg md:text-2xl font-semibold text-gray-800">
        Description
      </div>
      <p className="font-normal text-gray-500 text-md md:text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default EventDescription;
