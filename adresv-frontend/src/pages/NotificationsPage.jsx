import React, { useState } from 'react';
import UnreadNotifications from '../components/notifications/UnreadNotifications';
import NotificationFilters from '../components/notifications/NotificationFilters';
import NotificationList from '../components/notifications/NotificationList';

const NotificationsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Mock data for all notifications, including categories and unread status
  const allNotificationsData = [
    { id: 1, title: "Welcome to Adresv!", message: "We're glad to have you. Explore our features.", timestamp: "1d ago", category: "System Updates", unread: false },
    { id: 2, title: "New Login Alert", message: "A new device logged into your account from IP 192.168.1.10. Was this you?", timestamp: "5m ago", category: "Security", unread: true },
    { id: 3, title: "Investment Matched", message: "Your investment in 'Green Energy Fund' has been successfully matched.", timestamp: "2h ago", category: "Investment Activity", unread: true },
    { id: 4, title: "Daily Quiz Available", message: "Today's daily quiz is now available. Earn points!", timestamp: "6h ago", category: "Engagement Reminders", unread: true },
    { id: 5, title: "Platform Maintenance", message: "Scheduled maintenance on 2024-03-20 02:00 UTC.", timestamp: "2d ago", category: "System Updates", unread: false },
    { id: 6, title: "Trade Executed", message: "Your mock trade for BTC/USD has been executed at $50,500.", timestamp: "1d ago", category: "Investment Activity", unread: false },
    { id: 7, title: "Don't Miss Your Mock Trade!", message: "The 'ETH/USD Short' mock trade is starting soon.", timestamp: "30m ago", category: "Engagement Reminders", unread: true },
    { id: 8, title: "Password Changed", message: "Your password was successfully changed.", timestamp: "3d ago", category: "Security", unread: false },
  ];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredNotifications = allNotificationsData.filter(notification => {
    if (activeFilter === 'All') return true;
    // A more robust category matching might be needed if categories are more complex
    return notification.category === activeFilter || (activeFilter === "System Updates" && (notification.category === "System Updates" || notification.category === "Security")); 
  });

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Notifications</h1>
      
      <div className="container mx-auto space-y-8">
        {/* UnreadNotifications can keep its own internal logic/data for now as per instructions */}
        <UnreadNotifications /> 

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">All Notifications</h2>
          <NotificationFilters onFilterChange={handleFilterChange} activeFilter={activeFilter} />
          <NotificationList notifications={filteredNotifications} />
        </section>
      </div>
      
    </div>
  );
};

export default NotificationsPage;
