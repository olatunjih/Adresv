import React, { useState } from 'react'; // Import useState
import NotificationItem from '../components/notifications/NotificationItem';

const mockNotificationsData = [
  { id: 1, title: 'New Login Detected', message: 'A new login to your account was detected from an unfamiliar device. If this wasn\'t you, please secure your account immediately.', timestamp: '2 minutes ago', type: 'Security', isRead: false },
  { id: 2, title: 'Investment Successful', message: 'Your investment in "EcoFriendly Crypto Fund" of 100 USDT has been confirmed.', timestamp: '30 minutes ago', type: 'Investment', isRead: false },
  { id: 3, title: 'Withdrawal Processed', message: 'Your withdrawal request of 0.05 BTC has been successfully processed and sent to your wallet.', timestamp: '1 hour ago', type: 'System', isRead: true },
  { id: 4, title: 'Quiz Reward!', message: 'Congratulations! You earned 50 engagement points for completing the daily quiz.', timestamp: '3 hours ago', type: 'Engagement', isRead: true },
  { id: 5, title: 'Platform Update', message: 'We\'ve updated our terms of service. Please review the changes at your earliest convenience.', timestamp: '1 day ago', type: 'System', isRead: true },
  { id: 6, title: 'Trade Alert: BTC/USDT', message: 'Your mock trade for BTC/USDT has reached its target profit. Position closed.', timestamp: '2 days ago', type: 'Engagement', isRead: true },
  { id: 7, title: 'Security Tip', message: 'Remember to enable 2FA for enhanced account security. Visit your profile settings.', timestamp: '5 days ago', type: 'Security', isRead: true },
];

const notificationTypes = ["All", "System", "Investment", "Engagement", "Security"];

const NotificationsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredNotifications = activeFilter === "All"
    ? mockNotificationsData
    : mockNotificationsData.filter(n => n.type === activeFilter);

  const unreadNotifications = filteredNotifications.filter(n => !n.isRead);
  const readNotifications = filteredNotifications.filter(n => n.isRead);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Notifications</h1>

      {/* Filter Controls */}
      <div className="mb-8 flex flex-wrap gap-2">
        {notificationTypes.map(type => (
          <button
            key={type}
            onClick={() => setActiveFilter(type)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150
                        ${activeFilter === type
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'}`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Unread Notifications Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-5">Unread Notifications</h2>
        {unreadNotifications.length > 0 ? (
          unreadNotifications.map(notification => (
            <NotificationItem
              key={notification.id}
              id={notification.id}
              title={notification.title}
              message={notification.message}
              timestamp={notification.timestamp}
              type={notification.type}
              isRead={notification.isRead}
            />
          ))
        ) : (
          <div className="bg-white shadow-sm rounded-lg p-6 text-center text-gray-500">
            <p>No unread notifications.</p>
          </div>
        )}
      </div>

      {/* Previous Notifications Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-5">Previous Notifications</h2>
        {readNotifications.length > 0 ? (
          readNotifications.map(notification => (
            <NotificationItem
              key={notification.id}
              id={notification.id}
              title={notification.title}
              message={notification.message}
              timestamp={notification.timestamp}
              type={notification.type}
              isRead={notification.isRead}
            />
          ))
        ) : (
          <div className="bg-white shadow-sm rounded-lg p-6 text-center text-gray-500">
            <p>No previous notifications found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
