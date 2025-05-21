import React from 'react';
import { Link } from 'react-router-dom';

const NotificationsSummary = () => {
  // Placeholder data
  const unreadCount = 3; // Example unread count

  return (
    <section className="p-6 bg-white shadow rounded-lg mb-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Notifications Center</h3>
      {unreadCount > 0 ? (
        <p className="text-gray-600 mb-4">
          You have <span className="font-bold text-red-500">{unreadCount} unread</span> notifications.
        </p>
      ) : (
        <p className="text-gray-600 mb-4">You have no unread notifications.</p>
      )}
      <Link 
        to="/notifications" 
        className="text-blue-500 hover:text-blue-700 hover:underline font-semibold"
      >
        View all notifications
      </Link>
    </section>
  );
};

export default NotificationsSummary;
