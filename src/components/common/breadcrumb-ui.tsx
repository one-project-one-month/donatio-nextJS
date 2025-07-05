import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Fragment } from "react";

type BreadcrumbUIProps = {
  currentPageTitle: string;
  links: { name: string; path: string }[];
};

function BreadCrumbUI({ currentPageTitle, links }: Partial<BreadcrumbUIProps>) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links?.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href={item.path}>{item.name}</Link>
              </BreadcrumbLink>
              <BreadcrumbSeparator />
            </BreadcrumbItem>
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage className="text-primary font-semibold">{currentPageTitle}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadCrumbUI;
