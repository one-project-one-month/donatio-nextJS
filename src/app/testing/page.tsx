"use client";
import React from "react";
import { showToast } from "@/lib/toast";
import { Button } from "@/components/ui/button";

const Page: React.FC = () => {
  const handleClick = (): void => {
    showToast.info("Check your email for confirmation");
  };

  return (
    <>
      <Button onClick={handleClick}>Notify!</Button>
    </>
  );
};

export default Page;
