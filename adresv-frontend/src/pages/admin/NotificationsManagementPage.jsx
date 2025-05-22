import React from 'react';
import ComposeNotificationForm from '../../components/admin/notifications/ComposeNotificationForm';
import NotificationHistoryTable from '../../components/admin/notifications/NotificationHistoryTable'; // Import the table

const NotificationsManagementPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md p-4 rounded-lg mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Notifications Management</h1>
      </header>

      <main className="bg-white shadow-xl rounded-lg p-8">
        {/* Render the ComposeNotificationForm component */}
        <ComposeNotificationForm />
        
        {/* Render the NotificationHistoryTable component */}
        <NotificationHistoryTable />

        {/* Draft Notifications Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Draft Notifications</h3>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-md border border-gray-200 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-700">Draft: Welcome Email Update (Mock)</p>
                <p className="text-xs text-gray-500">Last saved: 2024-03-14</p>
              </div>
              <div className="space-x-2">
                <button className="text-xs text-blue-500 hover:text-blue-700">Edit</button>
                <button className="text-xs text-red-500 hover:text-red-700">Delete</button>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-md border border-gray-200 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-700">Draft: System Maintenance Alert (Mock)</p>
                <p className="text-xs text-gray-500">Last saved: 2024-03-12</p>
              </div>
              <div className="space-x-2">
                <button className="text-xs text-blue-500 hover:text-blue-700">Edit</button>
                <button className="text-xs text-red-500 hover:text-red-700">Delete</button>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic text-center">
              (Saved notification drafts will appear here. Functionality to be implemented.)
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotificationsManagementPage;
