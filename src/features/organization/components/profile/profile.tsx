import banner from "@/assets/image/group-positive-young-people-chilling.png";
import { Button } from "@/components/ui/button";
import { Edit2, SunIcon } from "lucide-react";
import Image from "next/image";

const Profile = () => {
  return (
    <section aria-labelledby="profile-heading" className="space-y-6">
      <h2
        id="profile-heading"
        className="text-3xl font-medium text-dodger-blue-600"
      >
        Profile
      </h2>
      <div className="w-full relative aspect-[3/1]">
        <Image
          src={banner}
          alt="banner"
          fill
          className="object-cover rounded-4xl"
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <SunIcon className="w-12 h-12" />
          <div>
            <h3 className="text-2xl font-semibold">Ahlu Myanmar</h3>
            <p className="text-medium font-medium text-dodger-blue-600">
              Charity Organization
            </p>
          </div>
        </div>
        <Button className="font-medium text-xl !p-8 rounded-full flex gap-4">
          <Edit2 />
          Edit Content
        </Button>
      </div>
    </section>
  );
};

export default Profile;
