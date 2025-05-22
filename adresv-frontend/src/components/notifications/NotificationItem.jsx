import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ id, title, message, timestamp, type, isRead }) => {
  const baseClasses = "p-4 rounded-lg border mb-3 transition-all duration-150 ease-in-out";
  const unreadClasses = "bg-blue-50 border-blue-200 shadow-sm hover:shadow-md";
  const readClasses = "bg-white border-gray-200 hover:bg-gray-50";

  const typeColors = {
    System: 'bg-gray-200 text-gray-700',
    Investment: 'bg-green-100 text-green-700',
    Engagement: 'bg-purple-100 text-purple-700',
    Security: 'bg-red-100 text-red-700',
    Default: 'bg-gray-100 text-gray-600',
  };
  const typeBadgeClasses = typeColors[type] || typeColors.Default;

  return (
    <div className={`${baseClasses} ${isRead ? readClasses : unreadClasses}`}>
      <div className="flex items-start justify-between">
        <div className="flex-grow">
          <div className="flex items-center mb-1">
            {!isRead && (
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" aria-label="Unread"></span>
            )}
            <h3 className={`text-lg ${isRead ? 'font-medium text-gray-800' : 'font-semibold text-blue-700'}`}>
              {title}
            </h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">{message}</p>
        </div>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ml-4 flex-shrink-0 ${typeBadgeClasses}`}>
          {type}
        </span>
      </div>
      <p className="text-xs text-gray-400 mt-1 text-right">{timestamp}</p>
    </div>
  );
};

NotificationItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isRead: PropTypes.bool.isRequired,
};

export default NotificationItem;
