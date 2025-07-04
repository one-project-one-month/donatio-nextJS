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

interface BreadcrumbLinkItem {
  name: string;
  path: string;
}

interface BreadcrumbUIProps {
  currentPageTitle: string;
  links: BreadcrumbLinkItem[];
}

// aung pyae fixed Hydration Error

function BreadCrumbUI({ currentPageTitle, links = [] }: Partial<BreadcrumbUIProps>) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={item.path}>{item.name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        {currentPageTitle && (
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary font-semibold">
              {currentPageTitle}
            </BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadCrumbUI;
