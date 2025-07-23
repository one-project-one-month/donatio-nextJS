"use client";

import OrganizationCard from "./organization-card";
import { GetAllOrganizationsResponse } from "../../../../types/Organization";
import PaginationUI from "@/components/common/pagination-ui";
import NodataBlock from "@/components/common/no-data-block";

type OrganizationListingProps = {
  data: GetAllOrganizationsResponse | null;
  page: number;
};

function OrganizationListing({ data, page }: OrganizationListingProps) {
  return (
    <section>
      {data && data.results.length > 0 ? (
        <>
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
              totalCount={data?.count ?? 0}
            />
          </div>
        </>
      ) : (
        <NodataBlock value="organizations" />
      )}
    </section>
  );
}

export default OrganizationListing;
