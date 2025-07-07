'use client'

import { AppSidebar } from "@/components/core/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import SideHeader from "@/components/core/sidebar-header";
import { Calendar, Coins, HeartHandshake } from "lucide-react";


const data = {
  user: {
    name: "Wai Yan Linn",
    email: "linn@gmail.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    {
      title: "Events",
      url: "/organization/events",
      icon: Calendar
    },
    {
      title: "Activities",
      url: "/organization/activities",
      icon: HeartHandshake
    },
    {
      title: "Transitions",
      url: "/organization/transitions",
      icon: Coins
    },
  ],
};

export default function OrganizationLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      } as React.CSSProperties}
    >
      <AppSidebar sidebarData={data} />
      <SidebarInset>
        <SideHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}