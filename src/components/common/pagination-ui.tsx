"use client";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

type PaginationUIProps = {
  isNext: boolean;
  isPrevious: boolean;
  totalCount: number;
  page: number;
  limit: number;
  setPage?: (newPage: number) => void;
};

function PaginationUI({
  isNext,
  isPrevious,
  totalCount,
  page,
  limit,
  setPage,
}: PaginationUIProps) {
  return (
    <Pagination className="py-5">
      <PaginationContent className="gap-x-2">
        <PaginationItem>
          {isPrevious && (
            <PaginationPrevious
              className="h-9 w-9 cursor-pointer"
              onClick={() => setPage && setPage(page - 1)}
            />
          )}
        </PaginationItem>
        {Array.from(
          {
            length: Math.ceil(totalCount / limit),
          },
          (_, i) => i + 1
        ).map((pg, index) => (
          <PaginationItem className="cursor-pointer" key={index}>
            <PaginationLink
              onClick={() => setPage && setPage(pg)}
              className={cn(
                "flex h-9 w-9 items-center justify-center",
                pg === page &&
                  "bg-primary hover:bg-primary text-white hover:text-white"
              )}
            >
              {pg}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          {isNext && (
            <PaginationNext
              className="h-9 w-9 cursor-pointer"
              onClick={() => setPage && setPage(page + 1)}
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationUI;
