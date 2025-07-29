import { cn } from "@/lib/utils";
import React from "react";

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
}

const PageSection = ({ children, className }: PageSectionProps) => {
  return (
    <section className={cn("w-full py-12 sm:py-16 px-5 md:px-8 lg:px-12", className)}>
      <div className="max-w-screen-2xl mx-auto ">
        {children}
      </div>
    </section>
  );
};

export default PageSection;
