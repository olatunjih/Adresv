import React from 'react';

const mockNotificationHistory = [
  {
    id: 'hist001',
    title: 'Platform Maintenance Scheduled',
    messageSnippet: 'Please be advised that we will be undergoing scheduled maintenance...',
    dateSent: '2024-03-15 10:00 AM',
    status: 'Sent',
    readRate: '75%',
  },
  {
    id: 'hist002',
    title: 'New Investment Opportunity: EcoFund',
    messageSnippet: 'Exciting news! A new sustainable investment fund, EcoFund, is now available...',
    dateSent: '2024-03-14 02:30 PM',
    status: 'Sent',
    readRate: '85%',
  },
  {
    id: 'hist003',
    title: 'Daily Quiz Rewards Update',
    messageSnippet: 'We have updated the reward structure for the daily quiz. Check it out now...',
    dateSent: '2024-03-13 09:00 AM',
    status: 'Sent',
    readRate: 'N/A',
  },
  {
    id: 'hist004',
    title: 'Security Alert: Phishing Attempt',
    messageSnippet: 'We have detected a potential phishing campaign. Please be vigilant...',
    dateSent: '2024-03-12 05:00 PM',
    status: 'Failed', // Example of a different status
    readRate: '0%',
  },
];

const NotificationHistoryTable = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-8"> {/* Added mt-8 for spacing */}
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Notification History</h3>
      
      {/* Placeholder for Filter Controls */}
      <div className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded-md text-center">
        <p className="text-sm text-gray-500">
          (Placeholder: Filters for date range, status, target audience, etc. will be here.)
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message Snippet
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Sent
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Read Rate
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockNotificationHistory.map((notification) => (
              <tr key={notification.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{notification.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 max-w-xs truncate">{notification.messageSnippet}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{notification.dateSent}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                    ${notification.status === 'Sent' ? 'bg-green-100 text-green-800' : 
                                      notification.status === 'Failed' ? 'bg-red-100 text-red-800' : 
                                      notification.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                    {notification.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{notification.readRate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 transition-colors duration-150">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotificationHistoryTable;
