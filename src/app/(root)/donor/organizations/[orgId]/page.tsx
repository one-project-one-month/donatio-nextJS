"use client";
import { useParams } from "next/navigation";
import { useGetOrganizationById } from "@/features/user/hooks/donor-organization-queries";
import OrganizationDetail from "@/features/user/components/organization/organization-detail";
import BreadCrumbUI from "@/components/common/breadcrumb-ui";

export default function OrganizationProfile() {
  const { orgId } = useParams();

  const id = orgId as string;

  const { data } = useGetOrganizationById(id);

  return (
    <div className="mx-auto px-5 mt-10">
        <BreadCrumbUI currentPageTitle={data?.name} links={[{name: "Organizations", path: "/donor/organizations"}]} />
      <OrganizationDetail data={data ?? null} />
    </div>
  );
}
