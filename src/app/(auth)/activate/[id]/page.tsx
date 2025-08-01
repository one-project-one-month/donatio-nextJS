"use client";

import React, { useEffect, useState } from "react";
import image from "@/assets/image/authImage.png";
import LogoName from "@/components/common/logo-name";
import Loading from "../../loading";
import { useParams } from "next/navigation";
import API from "@/lib/api/axios";

const Page: React.FC = () => {
  const [isVerified, setIsverified] = useState("");

  const params = useParams() as { id?: string };
  const id = params.id ? decodeURIComponent(params.id) : undefined;

  useEffect(() => {
    const verifying = async () => {
      if (!id) return;

      try {
        const response = await API.post("auth/registration/verify-email/", {
          key: id,
        });

        setIsverified("Verification Successful. You can login now.");
      } catch (error) {
        setIsverified("Verification Fail. TF you are?");
      }
    };

    verifying();
  }, [id]);

  return (
    <section className="h-screen w-screen flex items-center justify-center relative">
      <img
        src={image.src}
        alt="authImage"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="bg-white z-10 p-4 rounded-lg w-md">
        <div className="flex justify-start">
          <LogoName />
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div className="text-2xl text-gray-950">
            {isVerified === "" ? <>Verifying Email</> : <>{isVerified}</>}
          </div>
          {isVerified === "" ? <Loading /> : ""}
        </div>
      </div>
    </section>
  );
};

export default Page;
