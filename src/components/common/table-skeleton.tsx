"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";

interface TableSkeletonProps {
  columns: { key: string; width?: string }[];
  rows?: number;
}

export const TableSkeleton = ({ columns, rows = 7 }: TableSkeletonProps) => (
  <>
    {Array.from({ length: rows }).map((_, rowIdx) => (
      <TableRow key={rowIdx} className="h-16 hover:bg-white">
        {columns.map((col, colIdx) => (
          <TableCell
            key={col.key}
            style={{ width: col.width, maxWidth: col.width }}
            className={`whitespace-nowrap overflow-hidden truncate text-ellipsis bg-white ${
              colIdx === 0
                ? "sticky left-0 z-10"
                : colIdx === columns.length - 1
                ? "sticky right-0 z-10"
                : ""
            }`}
          >
            <Skeleton className="h-6" />
          </TableCell>
        ))}
      </TableRow>
    ))}
  </>
);
