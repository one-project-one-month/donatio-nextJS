import iconTransparency from "@/assets/icons/slogan/interface.svg";
import iconConnect from "@/assets/icons/slogan/navigation.svg";
import iconCommunity from "@/assets/icons/slogan/user.svg";
import Image from "next/image";
import PageSection from "../common/page-section";

const features = [
  {
    icon: iconConnect,
    title: "Connect with Verified Organizations Effortlessly",
    desc: "We ensure that all organizations on our platform are thoroughly vetted.",
  },
  {
    icon: iconTransparency,
    title: "Experience Full Transparency in Donation",
    desc: "Stay informed with detailed reports on your donations.",
  },
  {
    icon: iconCommunity,
    title: "Join a Community of Compassionate Donors",
    desc: "Be part of a growing network dedicated to making a difference.",
  },
];

export default function SloganSection() {
  return (
    <PageSection>
      <div className="bg-dodget-blue-25 rounded-3xl border border-border-gray px-6 py-16 sm:px-10 sm:py-20 flex flex-col items-center gap-32">
        <h2 className="text-primary text-2xl md:text-4xl font-semibold text-center tracking-wide sm:tracking-wider leading-tight">
          Empowering Change Through <br className="hidden sm:block" />
          Transparent Donations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 w-full">
          {features.map((item, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col items-center justify-start text-center"
            >
              <div className="h-10 w-full flex items-center justify-center mb-6">
                <Image
                  src={item.icon}
                  alt={`Icon for ${item.title}`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-xl md:text-2xl flex items-center justify-center">
                  {item.title}
                </h3>
                <p className="text-xs md:text-base font-normal text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
