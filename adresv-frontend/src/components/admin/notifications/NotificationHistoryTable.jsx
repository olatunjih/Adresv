import React from 'react';

const NotificationHistoryTable = () => {
  const mockNotifications = [
    { id: "n1", title: "Scheduled Maintenance", snippet: "Platform will be down for maintenance...", targetAudience: "All Users", deliveryTime: "2024-08-15 02:00 AM", status: "Scheduled", readRate: "N/A" },
    { id: "n2", title: "New Feature: Auto-Invest", snippet: "Check out our new auto-invest feature...", targetAudience: "Roles: Investor, VIP", deliveryTime: "2024-08-01 10:00 AM", status: "Sent", readRate: "75% Reads" },
    { id: "n3", title: "Welcome Bonus Reminder", snippet: "Don't forget your welcome bonus...", targetAudience: "User: new_user_123", deliveryTime: "2024-07-30 09:00 AM", status: "Sent", readRate: "100% Reads" },
    { id: "n4", title: "Critical Security Update", snippet: "Please update your security settings...", targetAudience: "All Users", deliveryTime: "2024-07-28 05:00 PM", status: "Failed", readRate: "N/A" },
    { id: "n5", title: "Monthly Newsletter - August", snippet: "Your monthly updates are here...", targetAudience: "All Users", deliveryTime: "2024-08-01 12:00 PM", status: "Draft", readRate: "N/A" }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Sent':
        return 'bg-green-100 text-green-700';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-700';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-700';
      case 'Failed':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mt-8 w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Notification History</h2>
      
      <div className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600">
        <p>Filters for target audience, status, and delivery date range will be implemented here.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Snippet</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target Audience</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Date/Time</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Read/Unread Rates</th>
              {/* Optional: <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th> */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockNotifications.map((notification) => (
              <tr key={notification.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{notification.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 max-w-xs truncate" title={notification.snippet}>
                  {notification.snippet}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{notification.targetAudience}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{notification.deliveryTime}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(notification.status)}`}>
                    {notification.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{notification.readRate}</td>
                {/* Optional: 
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2">View</button>
                  {notification.status === 'Scheduled' && (
                    <button className="text-red-600 hover:text-red-900">Cancel</button>
                  )}
                </td> 
                */}
              </tr>
            ))}
          </tbody>
        </table>
        {mockNotifications.length === 0 && <p className="text-center text-gray-500 py-4">No notification history found.</p>}
      </div>
    </section>
  );
};

export default NotificationHistoryTable;
