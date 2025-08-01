"use client";

import { AppSidebar } from "@/components/core/app-sidebar";
import SideHeader from "@/components/core/sidebar-header";
import { useRouter } from "next/navigation";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import OnboardingModal from "@/features/organization/components/profile/onboarding/onboarding-modal";
import { useOrganizationProfileQuery } from "@/features/organization/hooks/organization-profile-queries";
import { isProfileComplete } from "@/features/organization/utils/profile-completion";
import { useAuth } from "@/hooks/use-auth";
import useUserStore from "@/store/userStore";
import {
  Building2,
  Calendar,
  Coins,
  HeartHandshake,
  MessageCircleMore,
} from "lucide-react";
import { useEffect, useState } from "react";
import Loading from "./loading";

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
      icon: MessageCircleMore,
    },
  ],
};

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  const currentOrg = useUserStore((state) => state.currentOrg);
  const { data: organization, isSuccess } =
    useOrganizationProfileQuery(currentOrg);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    if (!currentOrg) {
      router.push("/donor/events");
    }
  }, [isLoading, isAuthenticated, currentOrg, router]);

  useEffect(() => {
    if (isSuccess && organization && !isProfileComplete(organization)) {
      const hasDismissed = localStorage.getItem("onboardingDismissed");
      if (hasDismissed !== "true") {
        setIsModalOpen(true);
      }
    }
  }, [organization, isSuccess]);

  const handleClose = () => {
    localStorage.setItem("onboardingDismissed", "true");
    setIsModalOpen(false);
  };

  if (isLoading || !currentOrg) {
    return <Loading />;
  }

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
      {isSuccess && organization && (
        <OnboardingModal
          organization={organization}
          isOpen={isModalOpen}
          onClose={handleClose}
        />
      )}
    </SidebarProvider>
  );
}
