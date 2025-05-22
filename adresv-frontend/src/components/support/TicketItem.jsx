import React from 'react';
import PropTypes from 'prop-types';

const TicketItem = ({ id, category, subject, status, lastUpdated }) => {
  const getStatusClasses = (currentStatus) => {
    switch (currentStatus.toLowerCase()) {
      case 'open':
        return 'bg-green-100 text-green-700';
      case 'in progress':
        return 'bg-yellow-100 text-yellow-700';
      case 'resolved':
        return 'bg-blue-100 text-blue-700';
      case 'closed': // Added for completeness, though not in initial requirement
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-3 hover:shadow-md transition-shadow duration-150 bg-white">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800 mr-2">{subject}</h3>
        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${getStatusClasses(status)}`}>
          {status}
        </span>
      </div>
      <div className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Category:</span> {category}
      </div>
      <div className="text-sm text-gray-600">
        <span className="font-medium">Ticket ID:</span> {id}
      </div>
      <div className="text-xs text-gray-400 mt-2 text-right">
        Last updated: {lastUpdated}
      </div>
    </div>
  );
};

TicketItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  category: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
};

export default TicketItem;
