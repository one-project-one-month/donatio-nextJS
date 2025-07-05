"use client";

import { AlertCircle, Building2, Calendar, Coins, Home, Users } from "lucide-react";
import * as React from "react";

import LogoName from "@/components/common/logo-name";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "@/features/admin/sidebar/nav-main";
import { NavUser } from "@/features/admin/sidebar/nav-user";

const data = {
  user: {
    name: "Oak Soe Thein",
    email: "tom@gmail.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: Home,
    },
    {
      title: "Organizations",
      url: "/admin/organizations",
      icon: Building2,
      children: [
        {
          title: "Pending Requests",
          url: "/admin/organizations/pending-requests",
        },
        {
          title: "Verified Organizations",
          url: "/admin/organizations/verified-organizations",
        },
      ],
    },
    {
      title: "Events",
      url: "/admin/events",
      icon: Calendar,
    },
    {
      title: "Donations",
      url: "/admin/donations",
      icon: Coins,
    },
    {
      title: "Fraud Reports",
      url: "/admin/fraud-reports",
      icon: AlertCircle,
    },
    {
      title: "Users ",
      url: "/admin/users",
      icon: Users,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <LogoName />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <div className="my-2" />
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
