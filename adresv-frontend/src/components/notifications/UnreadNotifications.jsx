import React from 'react';

const UnreadNotifications = () => {
  const mockUnreadNotifications = [
    {
      id: 1,
      title: "New Login Alert",
      snippet: "A new device logged into your account. Was this you?",
      timestamp: "5m ago",
    },
    {
      id: 2,
      title: "Investment Update",
      snippet: "Your recent investment in 'EcoGrowth Fund' has increased by 2%.",
      timestamp: "1h ago",
    },
    {
      id: 3,
      title: "Daily Quiz Reminder",
      snippet: "Don't forget to complete your daily quiz for bonus points!",
      timestamp: "3h ago",
    },
  ];

  const handleMarkAsRead = (notificationId) => {
    // Placeholder for marking notification as read
    console.log(`Notification ${notificationId} marked as read.`);
    alert(`Notification ${notificationId} marked as read.`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Unread Notifications</h2>
      {mockUnreadNotifications.length === 0 ? (
        <p className="text-gray-500">You have no unread notifications.</p>
      ) : (
        <ul className="space-y-4">
          {mockUnreadNotifications.map((notification) => (
            <li 
              key={notification.id} 
              className="p-4 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow flex items-start justify-between"
            >
              <div className="flex items-start">
                <span className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mr-3 mt-1.5" title="Unread"></span>
                <div>
                  <h3 className="font-bold text-gray-700">{notification.title}</h3>
                  <p className="text-sm text-gray-600">{notification.snippet}</p>
                  <p className="text-xs text-gray-400 mt-1">{notification.timestamp}</p>
                </div>
              </div>
              <button
                onClick={() => handleMarkAsRead(notification.id)}
                className="ml-4 px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
              >
                Mark as Read
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UnreadNotifications;
