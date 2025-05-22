import React from 'react';

const GlobalAdminDashboardView = () => {
  const platformHealthMetrics = [
    { label: "API Gateway Status", value: "Operational", statusClass: "text-green-600" },
    { label: "Database Connectivity", value: "Operational", statusClass: "text-green-600" },
    { label: "Background Job Queue", value: "5 Pending (Mock)", statusClass: "text-yellow-600" },
    { label: "Average Response Time", value: "120ms (Mock)", statusClass: "text-blue-600" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Global Administration Dashboard</h3>
        <p className="text-gray-600">
          Monitor platform health, manage content, and oversee general administrative functions.
        </p>
      </div>

      {/* Platform Health Overview */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Platform Health Overview</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {platformHealthMetrics.map(metric => (
            <div key={metric.label} className="bg-gray-50 p-4 rounded-md shadow-sm">
              <p className="text-sm font-medium text-gray-500">{metric.label}:</p>
              <p className={`text-lg font-bold mt-1 ${metric.statusClass}`}>{metric.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Management Quick Actions */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Content Management Quick Actions</h4>
        <div className="flex flex-wrap gap-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Manage Announcements
          </button>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Update FAQs
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Review User Reports
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-3 italic">(Actual content management tools would be here.)</p>
      </section>

      {/* System Notifications - Placeholder */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">System Notifications Overview</h4>
        <div className="bg-gray-50 p-6 rounded-md text-center">
           <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <p className="text-gray-600 mt-4">
            Summary of recent system notifications and alerts. (e.g., "No critical alerts.", "3 new user reports.")
          </p>
        </div>
      </section>
    </div>
  );
};

export default GlobalAdminDashboardView;
