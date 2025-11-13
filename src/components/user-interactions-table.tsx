"use client";

import { useMemo, useState } from "react";
import { UserInteraction } from "@/types";

type FilterStatus = "All" | "Done" | "Pending";

interface UserInteractionsTableProps {
  data: UserInteraction[];
}

export function UserInteractionsTable({ data }: UserInteractionsTableProps) {
  const [filter, setFilter] = useState<FilterStatus>("All");

  const filteredData = useMemo(() => {
    if (filter === "All") return data;
    return data.filter((interaction) => interaction.featureStatus === filter);
  }, [data, filter]);

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

  const getFilterButtonClasses = (status: FilterStatus) => {
    const baseClasses = "px-4 py-2 text-sm font-medium rounded transition-colors";
    if (filter === status) {
      return `${baseClasses} bg-blue-600 text-white`;
    }
    return `${baseClasses} bg-gray-100 text-gray-700 hover:bg-gray-200`;
  };

  return (
    <div className="space-y-4">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-2 p-4 bg-white rounded-lg border border-gray-200">
        <span className="text-sm font-medium text-gray-700 mr-2 flex items-center">
          Filter by:
        </span>
        <button
          onClick={() => setFilter("All")}
          className={getFilterButtonClasses("All")}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Pending")}
          className={getFilterButtonClasses("Pending")}
        >
          Execution Pending
        </button>
        <button
          onClick={() => setFilter("Done")}
          className={getFilterButtonClasses("Done")}
        >
          Execution Done
        </button>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {filteredData.map((interaction) => (
          <div
            key={interaction.id}
            className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="space-y-4">
              {/* Question */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Question
                </h3>
                <p className="text-lg font-medium text-gray-900">
                  {interaction.question}
                </p>
              </div>

              {/* Answer */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Answer
                </h3>
                <p className="text-base text-gray-700">
                  {interaction.answer}
                </p>
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap gap-4 pt-2 border-t border-gray-100">
                <div>
                  <span className="text-sm font-semibold text-gray-500 mr-2">
                    Feature:
                  </span>
                  <span className="text-sm text-gray-900">
                    {interaction.feature}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500 mr-2">
                    Status:
                  </span>
                  {getStatusBadge(interaction.featureStatus)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
