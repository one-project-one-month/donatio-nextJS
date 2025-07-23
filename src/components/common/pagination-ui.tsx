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
  setPage?: (newPage: number) => void;
};

function PaginationUI({
  isNext,
  isPrevious,
  totalCount,
  page,
  limit,
  setPage
}: PaginationUIProps) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {isPrevious && <PaginationPrevious onClick={() => setPage && setPage(page - 1)} />}
        </PaginationItem>
        {Array.from(
          {
            length: Math.ceil(totalCount / limit)
          },
          (_, i) => i + 1
        ).map((pg, index) => (
          <PaginationItem className="cursor-default" key={index}>
            <PaginationLink
              onClick={() => setPage && setPage(pg)}
              className={`${
                pg === page && "bg-primary hover:bg-dodger-blue-300 text-white"
              }`}
            >
              {pg}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          {isNext && <PaginationNext onClick={() => setPage && setPage(page + 1)} />}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationUI;
