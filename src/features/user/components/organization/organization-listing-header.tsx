import BreadCrumbUI from "@/components/common/breadcrumb-ui";
import { Separator } from "@/components/ui/separator";
import React from "react";
import OrganizationSearchBox from "./organization-search-box";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function OrganizationListingHeader() {
  return (
    <div className="py-12 ">
      <BreadCrumbUI
      currentPageTitle="Organizations"
      links={[{ name: "Donor", path: "/donor" }]}
      />
      <div className="my-6 text-center flex flex-col space-y-3 justify-center items-center">
      <h2 className="text-4xl font-extrabold text-gray-900">Organizations</h2>
      <p className="mt-2 text-gray-400 max-w-3xl mx-auto">
        Browse and manage the list of organizations available on the platform.
        Here you can view details, search, and connect with organizations for
        donations and collaborations.
      </p>
      </div>
      <div className="my-3 flex space-x-2 items-center justify-center w-full">
      <OrganizationSearchBox />
      <Select>
        <SelectTrigger className="w-[180px] py-5 border-primary">
        <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
        <SelectGroup>
          <SelectItem value="non-profit">Non Profit</SelectItem>
          <SelectItem value="ngo">NGO</SelectItem>
          <SelectItem value="charity">Charity</SelectItem>
          <SelectItem value="foundation">Foundation</SelectItem>
        </SelectGroup>
        </SelectContent>
      </Select>
      </div>
    </div>
  );
}

export default OrganizationListingHeader;
