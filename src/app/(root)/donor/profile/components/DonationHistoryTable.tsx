import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Donation } from "@/types/Donation";
import { formatDateTime } from "@/utils/date";
import { StatusBadge } from "./StatusBadge";
import { Skeleton } from "@/components/ui/skeleton";

interface DonationHistoryTableProps {
  donations: Donation[];
  isLoading: boolean;
  searchTerm: string;
}

export const DonationHistoryTable: React.FC<DonationHistoryTableProps> = ({
  donations,
  isLoading,
  searchTerm,
}) => {
  if (isLoading) {
    return (
      <div className="rounded-3xl overflow-hidden border border-gray-100 shadow mt-10">
        <Table>
          <TableHeader>
            <TableRow className="text-lg bg-[#FAFDFF]">
              <TableHead className="pl-10 py-6">Date</TableHead>
              <TableHead className="py-6">Time</TableHead>
              <TableHead className="py-6">Organization</TableHead>
              <TableHead className="py-6">Amount</TableHead>
              <TableHead className="py-6">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, index) => (
              <TableRow key={index}>
                <TableCell className="pl-10 py-6">
                  <Skeleton className="h-4 w-20" />
                </TableCell>
                <TableCell className="py-6">
                  <Skeleton className="h-4 w-16" />
                </TableCell>
                <TableCell className="py-6">
                  <Skeleton className="h-4 w-32" />
                </TableCell>
                <TableCell className="py-6">
                  <Skeleton className="h-4 w-16" />
                </TableCell>
                <TableCell className="py-6">
                  <Skeleton className="h-6 w-20 rounded-full" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  const getEmptyMessage = () => {
    if (searchTerm) {
      return `No donations found matching "${searchTerm}"`;
    }
    return "No donations found";
  };

  return (
    <div className="rounded-3xl overflow-hidden border border-gray-100 shadow mt-10">
      <Table>
        <TableHeader>
          <TableRow className="text-lg bg-[#FAFDFF]">
            <TableHead className="pl-10 py-6">Date</TableHead>
            <TableHead className="py-6">Time</TableHead>
            <TableHead className="py-6">Organization</TableHead>
            <TableHead className="py-6">Amount</TableHead>
            <TableHead className="py-6">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-gray-500">
          {donations.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={5}
                className="text-center py-10 text-gray-400 text-sm italic"
              >
                {getEmptyMessage()}
              </TableCell>
            </TableRow>
          ) : (
            donations.map((donation) => {
              const { date, time } = formatDateTime(donation.updated_at);
              return (
                <TableRow key={donation.id}>
                  <TableCell className="pl-10 py-6">{date}</TableCell>
                  <TableCell className="py-6">{time}</TableCell>
                  <TableCell className="py-6">
                    {donation.organization?.name || "Unknown Organization"}
                  </TableCell>
                  <TableCell className="py-6">
                    ${parseFloat(donation.amount).toFixed(2)}
                  </TableCell>
                  <TableCell className="py-6">
                    <StatusBadge status={donation.status} />
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
};
