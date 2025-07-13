"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageCount = Math.ceil(itemCount / pageSize);

  if (itemCount === 0) {
    return null;
  }

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <div className="flex items-center justify-between px-4 mt-6">
      <div className="flex text-sm text-muted-foreground">
        Page {currentPage} of {pageCount}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === 1}
          onClick={() => changePage(1)}
          className="cursor-pointer"
        >
          <ChevronsLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
          className="cursor-pointer"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === pageCount}
          onClick={() => changePage(currentPage + 1)}
          className="cursor-pointer"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === pageCount}
          onClick={() => changePage(pageCount)}
          className="cursor-pointer"
        >
          <ChevronsRightIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;