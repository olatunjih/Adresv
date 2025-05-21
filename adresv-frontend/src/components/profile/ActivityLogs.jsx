import React from 'react';

const ActivityLogs = () => {
  // Placeholder data - in a real app, this would be fetched
  const logs = [
    { id: 1, timestamp: '2024-07-28 10:15 AM', ip: '192.168.1.100', action: 'Login' },
    { id: 2, timestamp: '2024-07-27 15:30 PM', ip: '10.0.0.5', action: 'Profile Update: Phone Number' },
    { id: 3, timestamp: '2024-07-27 09:00 AM', ip: '172.16.0.20', action: 'Login' },
  ];
  const displayLogCount = 3; // Show only a few recent logs as per "Last 10 login sessions" idea

  return (
    <section className="p-6 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold text-gray-700 mb-6">Activity Logs</h3>
      <p className="text-sm text-gray-500 mb-4">
        Showing the last {displayLogCount} activities. (In a full implementation, this might show the last 10 login sessions and other key actions as per README).
      </p>
      {logs.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {logs.slice(0, displayLogCount).map(log => (
                <tr key={log.id}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{log.timestamp}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{log.ip}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{log.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No activity logs available.</p>
      )}
      {/* Placeholder for a "View All Activity" link if needed later */}
    </section>
  );
};

export default ActivityLogs;
