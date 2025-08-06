import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { EditProfileDialog } from "./EditProfileDialog";
import { EditProfileDialog } from "./EditProfileDialog";
// import { BecomeAdminDialog } from "./BecomeAdminDialog";
import { BecomeAdminDialog } from "./BecomeAdminDialog";
import { User } from "@/types/User";
import AppConfig from "@/lib/appConfig";

interface ProfileSectionProps {
  user?: User;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ user }) => {
  return (
    <div className="my-6 flex items-start justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage
            src={
              user?.profile?.profile_picture
                ? `${AppConfig.BASE_ORIGIN}${user.profile.profile_picture}`
                : "https://github.com/shadcn.png"
            }
            className="object-cover"
          />
          <AvatarFallback>{user?.username?.charAt(0)}</AvatarFallback>
        </Avatar>

        <div>
          <div>{user?.profile?.full_name || user?.username}</div>
          <div className="text-gray-500">{user?.email}</div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-end">
        <EditProfileDialog user={user} />
        <BecomeAdminDialog />
      </div>
    </div>
  );
};
