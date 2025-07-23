"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { TableSkeleton } from "./table-skeleton";

interface TableColumn<T> {
  key: string;
  label: string;
  render: (row: T) => React.ReactNode;
  width?: string;
}

interface EventTableProps<T> {
  title?: string;
  data: T[];
  columns: TableColumn<T>[];
  isLoading?: boolean;
  emptyMessage?: string;
}

export default function EventTable<T>({
  data,
  columns,
  title,
  isLoading = false,
  emptyMessage = "No events to display.",
}: EventTableProps<T>) {
  return (
    <div className="space-y-8">
      {title && <h1 className="text-xl font-semibold">{title}</h1>}

      <div className="relative w-full overflow-x-auto rounded-2xl border">
        <Table className="min-w-[1000px]">
          <TableHeader>
            <TableRow className="h-18 bg-dodger-blue-50 hover:bg-dodger-blue-50">
              {columns.map((col, idx) => (
                <TableHead
                  key={col.key}
                  style={{ width: col.width }}
                  className={`whitespace-nowrap bg-dodger-blue-50 text-center ${
                    idx === 0
                      ? "sticky left-0 z-20 pl-4"
                      : idx === columns.length - 1
                      ? "sticky right-0 z-20"
                      : ""
                  }`}
                >
                  {col.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableSkeleton columns={columns} />
            ) : data.length === 0 ? (
              <TableRow className="h-16 hover:bg-white">
                <TableCell
                  colSpan={columns.length}
                  className="text-center text-gray-500"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, rowIdx) => (
                <TableRow key={rowIdx} className="h-16 hover:bg-white">
                  {columns.map((col, colIdx) => (
                    <TableCell
                      key={col.key}
                      style={{ width: col.width, maxWidth: col.width }}
                      className={`whitespace-nowrap overflow-hidden truncate text-ellipsis bg-white text-center ${
                        colIdx === 0
                          ? "sticky left-0 z-10 pl-4"
                          : colIdx === columns.length - 1
                          ? "sticky right-0 z-10"
                          : ""
                      }`}
                    >
                      {col.render(row)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
