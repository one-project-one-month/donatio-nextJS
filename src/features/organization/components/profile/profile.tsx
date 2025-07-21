import logo from "@/assets/icons/profile.svg";
import banner from "@/assets/image/userCoverPhoto.png";
import { Button } from "@/components/ui/button";
import { OrganizationProfile } from "@/types/Organization";
import { Edit2 } from "lucide-react";
import Image from "next/image";

interface ProfileProps {
  data: OrganizationProfile;
}

const Profile = ({ data }: ProfileProps) => {
  const coverImageUrl = data.attachments?.[1]?.file ?? banner;
  const logoUrl = data.attachments?.[0]?.file ?? logo;

  return (
    <section aria-labelledby="profile-heading" className="space-y-8">
      <h2
        id="profile-heading"
        className="text-3xl font-medium text-dodger-blue-600"
      >
        Profile
      </h2>
      <div className="w-full relative aspect-[3/1]">
        <Image
          src={coverImageUrl}
          alt={`${data.name} cover image`}
          fill
          className="object-cover rounded-4xl"
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 relative">
            <Image
              src={logoUrl}
              alt={`${data.name} logo`}
              fill
              className="object-cover rounded-full bg-slate-800"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">{data.name}</h3>
            <p className="text-medium font-medium text-dodger-blue-600">
              {data.type}
            </p>
          </div>
        </div>
        <Button className="font-medium text-xl !p-7 rounded-full flex gap-4">
          <Edit2 />
          Edit Content
        </Button>
      </div>
    </section>
  );
};

export default Profile;
