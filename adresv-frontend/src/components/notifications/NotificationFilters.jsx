import React from 'react';

const NotificationFilters = ({ onFilterChange, activeFilter }) => {
  const filters = ["All", "System Updates", "Investment Activity", "Engagement Reminders"];

  return (
    <div className="mb-6 flex flex-wrap justify-center gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
            ${activeFilter === filter
              ? 'bg-purple-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default NotificationFilters;
