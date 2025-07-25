import logo from "@/assets/icons/profile.svg";
import banner from "@/assets/image/userCoverPhoto.png";
import { Button } from "@/components/ui/button";
import AppConfig from "@/lib/appConfig";
import { OrganizationProfile } from "@/types/Organization";
import { Edit2 } from "lucide-react";
import Image from "next/image";

interface ProfileProps {
  data: OrganizationProfile;
  setIsEditing: (isEditing: boolean) => void;
}

const Profile = ({ data, setIsEditing }: ProfileProps) => {
  const logoUrl =
    data.attachments?.length > 0 && data.attachments[0]?.file
      ? `${AppConfig.BASE_ORIGIN}${data.attachments[0].file}`
      : logo;
  const coverImageUrl =
    data.attachments?.length > 1 && data.attachments[1]?.file
      ? `${AppConfig.BASE_ORIGIN}${data.attachments[1].file}`
      : banner;

  return (
    <section
      aria-labelledby="profile-heading"
      className="space-y-6 md:space-y-8"
    >
      <h2
        id="profile-heading"
        className="text-2xl md:text-3xl font-medium text-dodger-blue-600"
      >
        Profile
      </h2>
      <div className="w-full relative aspect-[2/1] md:aspect-[3/1]">
        <Image
          src={coverImageUrl}
          alt={`${data.name} cover image`}
          fill
          className="object-cover rounded-2xl md:rounded-4xl"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0">
            <Image
              src={logoUrl}
              alt={`${data.name} logo`}
              fill
              className="object-cover rounded-full bg-slate-800"
            />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">{data.name}</h3>
            <p className="text-sm md:text-base font-medium text-dodger-blue-600">
              {data.type}
            </p>
          </div>
        </div>
        <Button
          className="font-medium rounded-full flex items-center gap-2 w-full md:w-auto md:!p-7 bg-dodger-blue-500 hover:bg-dodger-blue-600 text-white"
          onClick={() => setIsEditing(true)}
        >
          <Edit2 className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-sm md:text-base">Edit Content</span>
        </Button>
      </div>
    </section>
  );
};

export default Profile;
