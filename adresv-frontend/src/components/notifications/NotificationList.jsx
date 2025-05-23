import React from 'react';

const NotificationList = ({ notifications }) => {
  if (!notifications || notifications.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No notifications match the current filter.</p>;
  }

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div 
          key={notification.id} 
          className={`p-4 rounded-lg shadow-sm border ${notification.unread ? 'border-blue-300 bg-blue-50' : 'border-gray-200 bg-white'}`}
        >
          <div className="flex justify-between items-start">
            <h3 className="text-md font-semibold text-gray-800">{notification.title}</h3>
            {notification.unread && (
              <span className="px-2 py-0.5 text-xs bg-blue-500 text-white rounded-full">Unread</span>
            )}
          </div>
          <p className="text-sm text-gray-700 mt-1 mb-2">{notification.message}</p>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>Category: <span className="font-medium">{notification.category}</span></span>
            <span>{notification.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
