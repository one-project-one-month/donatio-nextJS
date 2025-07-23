"use client";

import OrganizationCard from "./organization-card";
import { GetAllOrganizationsResponse } from "../../../../types/Organization";
import PaginationUI from "@/components/common/pagination-ui";


type OrganizationListingProps = {
  data: GetAllOrganizationsResponse;
  page: number;
};

function OrganizationListing({ data, page }: OrganizationListingProps) {
  return (
    <section>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8 min-h-[70vh] p-3 md:p-0 grid-cols-1 gap-12 ">
        {data?.results.map((org) => (
          <OrganizationCard key={org.id} data={org} />
        ))}
      </div>
      <div>
        <PaginationUI
          isNext={data?.next ? true : false}
          isPrevious={data?.previous ? true : false}
          page={page}
          limit={7}
          totalCount={data.count}
        />
      </div>
    </section>
  );
}

export default OrganizationListing;
