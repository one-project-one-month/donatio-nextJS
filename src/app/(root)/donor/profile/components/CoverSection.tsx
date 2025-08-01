import React from "react";
import { Pencil } from "lucide-react";
import userCoverPhoto from "@/assets/image/userCoverPhoto.png";

export const CoverSection = () => {
  return (
    <div className="relative">
      <img
        src={userCoverPhoto.src}
        alt="Cover photo"
        className="mt-8 rounded-3xl w-full"
      />
      <div className="absolute cursor-pointer p-4 flex items-center justify-center rounded-full bg-white top-5 right-5 hover:bg-white/80 duration-150 transition ease-in-out">
        <Pencil size={15} />
      </div>
    </div>
  );
};
