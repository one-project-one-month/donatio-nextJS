"use client";

import OrganizationCard from "./organization-card";
import { GetAllOrganizationsResponse, Organization } from "../../../../types/Organization";
import PaginationUI from "@/components/common/pagination-ui";

// sample data to test
const orglist = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/e1/26/ce/e126ceee45bb34d5a60a8833fb3052e4.jpg",
    title: "ThitSa Foundation",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/736x/91/d1/fc/91d1fc6e01972f0ad10636b9d1e1bb39.jpg",
    title: "Trust Aid",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/736x/76/e4/7b/76e47b7dbd61838e700a32da1f2ccf64.jpg",
    title: "Help Flow",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/736x/fb/cb/77/fbcb771f9ec162a245c5ab5fdb8227eb.jpg",
    title: "Myanmar Give",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/736x/7c/89/31/7c8931048941bf7a4422de7592daf98c.jpg",
    title: "Give Link",
  },
  {
    id: 6,
    img: "https://i.pinimg.com/736x/1e/db/2c/1edb2cdcc1eb8caa19dfa9ecf41cd85b.jpg",
    title: "Orgnization",
  },
  {
    id: 7,
    img: "https://i.pinimg.com/736x/7c/89/31/7c8931048941bf7a4422de7592daf98c.jpg",
    title: "Connect Aid",
  },
  {
    id: 8,
    img: "https://i.pinimg.com/736x/1e/db/2c/1edb2cdcc1eb8caa19dfa9ecf41cd85b.jpg",
    title: "DanaConnect",
  },
  {
    id: 9,
    img: "https://i.pinimg.com/736x/7c/89/31/7c8931048941bf7a4422de7592daf98c.jpg",
    title: "Kind Chain",
  },
  {
    id: 10,
    img: "https://i.pinimg.com/736x/7c/89/31/7c8931048941bf7a4422de7592daf98c.jpg",
    title: "Kind Chain",
  },
  {
    id: 11,
    img: "https://i.pinimg.com/736x/7c/89/31/7c8931048941bf7a4422de7592daf98c.jpg",
    title: "Kind Chain",
  },
  {
    id: 12,
    img: "https://i.pinimg.com/736x/7c/89/31/7c8931048941bf7a4422de7592daf98c.jpg",
    title: "Kind Chain",
  },
];

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
