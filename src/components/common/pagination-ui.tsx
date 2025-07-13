"use client";
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
};

function PaginationUI({
  isNext,
  isPrevious,
  totalCount,
  page,
  limit,
}: PaginationUIProps) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {isPrevious && <PaginationPrevious href={`?page=${page - 1}`} />}
        </PaginationItem>
        {Array.from(
          {
            length: Math.ceil(totalCount / limit)
          },
          (_, i) => i + 1
        ).map((pg, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href={`?page=${pg}`}
              className={`${
                pg === page && "bg-primary hover:bg-dodger-blue-300 text-white"
              }`}
            >
              {pg}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          {isNext && <PaginationNext href={`?page=${page + 1}`} />}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationUI;
