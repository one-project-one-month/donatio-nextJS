import React from "react";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyles = (status: string) => {
    const normalizedStatus = status.toLowerCase();

    switch (normalizedStatus) {
      case "success":
      case "completed":
        return "text-[#00D018] bg-[#F3FFF4] border-[#00D018]/20";
      case "pending":
        return "text-[#d0a300] bg-[#fffcf3] border-[#d0a300]/20";
      case "failed":
      case "error":
        return "text-[#dc2626] bg-[#fef2f2] border-[#dc2626]/20";
      default:
        return "text-gray-600 bg-gray-100 border-gray-300/20";
    }
  };

  const formatStatus = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
  };

  return (
    <span
      className={cn(
        "py-2 px-4 rounded-full text-sm font-medium border",
        getStatusStyles(status)
      )}
    >
      {formatStatus(status)}
    </span>
  );
};
