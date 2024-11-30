import { useState } from "react";

const FilterToolbar = ({ onFilter }: { onFilter?: (filter: string) => void }) => {
  const [selectedFilter, setSelectedFilter] = useState("today");

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    onFilter && onFilter(filter);
  };

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-md">
      <button
        onClick={() => handleFilterChange("today")}
        className={`px-4 py-2 rounded ${selectedFilter === "today" ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
      >
        Today
      </button>
      <button
        onClick={() => handleFilterChange("thisWeek")}
        className={`px-4 py-2 rounded ${selectedFilter === "thisWeek" ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
      >
        This Week
      </button>
      <button
        onClick={() => handleFilterChange("thisMonth")}
        className={`px-4 py-2 rounded ${selectedFilter === "thisMonth" ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
      >
        This Month
      </button>
      <button
        onClick={() => handleFilterChange("thisYear")}
        className={`px-4 py-2 rounded ${selectedFilter === "thisYear" ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
      >
        This Year
      </button>
    </div>
  );
};

export default FilterToolbar;
