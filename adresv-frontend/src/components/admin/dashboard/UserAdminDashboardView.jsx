import React from 'react';

const UserAdminDashboardView = () => {
  const userAccountMetrics = [
    { label: "Total Active Accounts", value: "987 (Mock)" },
    { label: "Banned Accounts", value: "12 (Mock)" },
    { label: "Pending Verifications", value: "5 (Mock)" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">User Administration Dashboard</h3>
        <p className="text-gray-600">
          Manage user accounts, roles, permissions, and monitor login activity.
        </p>
      </div>

      {/* User Account Overview */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">User Account Overview</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {userAccountMetrics.map(metric => (
            <div key={metric.label} className="bg-gray-50 p-4 rounded-md shadow-sm text-center">
              <p className="text-sm font-medium text-gray-500">{metric.label}:</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{metric.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Login Activity Trends */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Login Activity Trends</h4>
        <div className="bg-gray-50 p-6 rounded-md text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-24 w-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M17 7h.01M7 10h.01M17 10h.01M7 13h.01M17 13h.01M10 7h.01M14 7h.01M10 10h.01M14 10h.01M10 13h.01M14 13h.01" />
          </svg>
          <p className="text-gray-600 mt-4">
            A graph showing login activity trends (daily/weekly/monthly) will be displayed here. (Mock SVG placeholder)
          </p>
        </div>
      </section>

      {/* Quick Actions - Placeholder for future development */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Quick Actions</h4>
        <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors">Search Users</button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors">View Pending Verifications</button>
        </div>
         <p className="text-sm text-gray-500 mt-3 italic">(Actual user management tools would be here.)</p>
      </section>
    </div>
  );
};

export default UserAdminDashboardView;
