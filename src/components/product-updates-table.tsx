"use client";

import { useMemo, useState } from "react";
import { ProductUpdate, SortConfig, SortDirection } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ProductUpdatesTableProps {
  data: ProductUpdate[];
}

function formatRelativeDate(dateString: string): string {
  if (!dateString) return "";
  
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return "today";
  if (diffDays === 1) return "1 day ago";
  return `${diffDays} days ago`;
}

export function ProductUpdatesTable({ data }: ProductUpdatesTableProps) {
  const [sortConfig, setSortConfig] = useState<SortConfig<ProductUpdate>>({
    key: "priority",
    direction: "desc",
  });

  const handleSort = (key: keyof ProductUpdate) => {
    let direction: SortDirection = "asc";

    if (sortConfig.key === key) {
      if (sortConfig.direction === "asc") {
        direction = "desc";
      } else if (sortConfig.direction === "desc") {
        direction = null;
      }
    }

    setSortConfig({ key, direction });
  };

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      let comparison = 0;

      if (sortConfig.key === "date") {
        comparison = new Date(aValue as string).getTime() - new Date(bValue as string).getTime();
      } else if (sortConfig.key === "priority") {
        const priorityOrder = { High: 3, Medium: 2, Low: 1 };
        comparison = priorityOrder[aValue as keyof typeof priorityOrder] - priorityOrder[bValue as keyof typeof priorityOrder];
      } else {
        comparison = String(aValue).localeCompare(String(bValue));
      }

      return sortConfig.direction === "asc" ? comparison : -comparison;
    });
  }, [data, sortConfig]);

  const getSortIndicator = (key: keyof ProductUpdate) => {
    if (sortConfig.key !== key) return null;
    if (sortConfig.direction === "asc") return " ↑";
    if (sortConfig.direction === "desc") return " ↓";
    return null;
  };

  const getStatusBadge = (status: "Done" | "Pending") => {
    const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";
    if (status === "Done") {
      return (
        <span className={`${baseClasses} bg-green-100 text-green-800`}>
          Done
        </span>
      );
    }
    return (
      <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>
        Pending
      </span>
    );
  };

  const getPriorityStyle = (priority: "High" | "Medium" | "Low") => {
    if (priority === "High") return "text-red-600 font-semibold";
    if (priority === "Medium") return "text-orange-600 font-medium";
    return "text-gray-600";
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              className="cursor-pointer select-none font-semibold text-gray-900 hover:bg-gray-50 text-left min-w-[300px]"
              onClick={() => handleSort("feature")}
            >
              Feature{getSortIndicator("feature")}
            </TableHead>
            <TableHead
              className="cursor-pointer select-none font-semibold text-gray-900 hover:bg-gray-50 text-left min-w-[120px]"
              onClick={() => handleSort("status")}
            >
              Status{getSortIndicator("status")}
            </TableHead>
            <TableHead
              className="cursor-pointer select-none font-semibold text-gray-900 hover:bg-gray-50 text-left min-w-[100px]"
              onClick={() => handleSort("priority")}
            >
              Priority{getSortIndicator("priority")}
            </TableHead>
            <TableHead
              className="cursor-pointer select-none font-semibold text-gray-900 hover:bg-gray-50 text-left min-w-[120px]"
              onClick={() => handleSort("date")}
            >
              Date{getSortIndicator("date")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((update) => (
            <TableRow key={update.id}>
              <TableCell className="font-medium text-gray-900 text-left min-w-[300px]">
                {update.feature}
              </TableCell>
              <TableCell className="text-left min-w-[120px]">{getStatusBadge(update.status)}</TableCell>
              <TableCell className={`${getPriorityStyle(update.priority)} text-left min-w-[100px]`}>
                {update.priority}
              </TableCell>
              <TableCell className="text-gray-600 text-left min-w-[120px]">
                {update.status === "Done" ? formatRelativeDate(update.date) : ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
