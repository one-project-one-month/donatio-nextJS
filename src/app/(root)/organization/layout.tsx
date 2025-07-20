"use client";

import { AppSidebar } from "@/components/core/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import SideHeader from "@/components/core/sidebar-header";
import { Calendar, Coins, HeartHandshake, MessageCircleMore, Building2 } from "lucide-react";

const data = {
  navMain: [
    {
      title: "Events",
      url: "/organization/events",
      icon: Calendar,
    },
    {
      title: "Activities",
      url: "/organization/activities",
      icon: HeartHandshake,
    },
    {
      title: "Transitions",
      url: "/organization/transitions",
      icon: Coins,
      children: [
        {
          title: "Donations",
          url: "/organization/transactions/donations",
        },
        {
          title: "Expenses",
          url: "/organization/transactions/expenses",
        },
      ],
    },
    {
      title: "Profile",
      url: "/organization/profile",
      icon: Building2,
    },
    {
      title: "Chat",
      url: "/organization/chat",
      icon: MessageCircleMore
    }
  ],
};

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useAuth();


  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar sidebarData={data} />
      <SidebarInset>
        <SideHeader />
        <div className="w-full">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
