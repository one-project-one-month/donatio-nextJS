import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function EventPagination() {
  return (
    <section className="flex justify-end w-full mt-6">
      <div className="1/2">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            {[1, 2, 3].map((item, index) => (
              <PaginationItem key={index}>
                <PaginationLink>{item}</PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}

export default EventPagination;
