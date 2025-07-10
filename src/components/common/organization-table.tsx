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

interface TableColumn<T> {
  key: string;
  label: string;
  render: (row: T) => React.ReactNode;
}

interface OrganizationTableProps<T> {
  title?: string;
  data: T[];
  columns: TableColumn<T>[];
}

export default function OrganizationTable<T>({
  data,
  columns,
  title,
}: OrganizationTableProps<T>) {
  return (
    <div className="space-y-8">
      {title && <h1 className="text-xl font-semibold">{title}</h1>}
      <section className="overflow-x-auto max-w-[1000px] relative mx-auto">
        <Table className="min-w-[1200px]">
          <TableHeader>
            <TableRow>
              {columns.map((col, idx) => (
                <TableHead
                  key={col.key}
                  className={`${
                    idx === 0
                      ? "sticky left-0 z-20 bg-white"
                      : idx === columns.length - 1
                      ? "sticky right-0 text-right z-20 bg-white"
                      : ""
                  }`}
                >
                  {col.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((row, rowIdx) => (
              <TableRow key={rowIdx}>
                {columns.map((col, colIdx) => (
                  <TableCell
                    key={col.key}
                    className={`${
                      colIdx === 0
                        ? "sticky left-0 z-20 bg-white"
                        : colIdx === columns.length - 1
                        ? "sticky right-0 text-right z-20 bg-white"
                        : "bg-white"
                    }`}
                  >
                    {col.render(row)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
