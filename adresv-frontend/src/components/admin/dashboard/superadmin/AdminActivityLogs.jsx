import React from 'react';

const AdminActivityLogs = () => {
  const logs = [
    { id: 1, action: "AdminX updated user Y's role to 'Premium'", timestamp: "2m ago" },
    { id: 2, action: "AdminZ sent a system notification about upcoming maintenance", timestamp: "10m ago" },
    { id: 3, action: "AdminA resolved billing dispute #123 for user Z", timestamp: "1h ago" },
    { id: 4, action: "AdminX banned user B for policy violation", timestamp: "3h ago" },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Admin Activity Logs</h2>
      <ul className="space-y-3">
        {logs.map((log) => (
          <li key={log.id} className="p-3 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
            <p className="text-sm text-gray-800">{log.action}</p>
            <p className="text-xs text-gray-500 mt-1">{log.timestamp}</p>
          </li>
        ))}
      </ul>
      {logs.length === 0 && <p className="text-gray-500">No recent admin activity.</p>}
      <div className="mt-4 text-right">
        <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
          View All Logs &rarr;
        </button>
      </div>
    </section>
  );
};

export default AdminActivityLogs;
