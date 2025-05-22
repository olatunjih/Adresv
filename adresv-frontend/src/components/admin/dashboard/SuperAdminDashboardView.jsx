import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const ToggleSwitch = ({ label, enabled, onToggle }) => (
  <div className="flex items-center justify-between py-2">
    <span className="text-sm font-medium text-gray-700">{label}</span>
    <button
      type="button"
      onClick={onToggle}
      disabled // Always disabled for this mock
      className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out focus:outline-none cursor-not-allowed
                  ${enabled ? 'bg-green-500' : 'bg-gray-300'}`}
    >
      <span
        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out
                    ${enabled ? 'translate-x-6' : 'translate-x-1'}`}
      />
    </button>
  </div>
);

const SuperAdminDashboardView = () => {
  const platformMetrics = [
    { label: "Total Active Users", value: "1,234 (Mock)" },
    { label: "Total Investments", value: "$567,890 (Mock)" },
    { label: "ROI Distribution Today", value: "$1,230 (Mock)" },
    { label: "Missed Participation Trends", value: "N/A" },
  ];

  const mockAdminLogs = [
    "User 'AdminUser1' updated role for 'UserXYZ' to 'Investor'. (Mock)",
    "Admin 'SuperUser' sent a platform-wide notification regarding maintenance. (Mock)",
    "User 'BillingAdmin' accessed financial reports. (Mock)",
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Super Admin Dashboard</h3>
        <p className="text-gray-600">
          System-wide configurations, platform metrics, and full access logs.
        </p>
      </div>

      {/* Platform Metrics */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Platform Metrics</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {platformMetrics.map(metric => (
            <div key={metric.label} className="bg-gray-50 p-4 rounded-md shadow-sm">
              <p className="text-sm font-medium text-gray-500">{metric.label}:</p>
              <p className="text-lg font-semibold text-gray-800">{metric.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Admin Activity Logs */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Admin Activity Logs</h4>
        <div className="space-y-2">
          {mockAdminLogs.map((log, index) => (
            <p key={index} className="text-sm text-gray-600 p-2 bg-gray-50 rounded-md">{log}</p>
          ))}
          <p className="text-sm text-gray-500 mt-2 italic">
            (Full, filterable activity logs would be displayed here.)
          </p>
        </div>
      </section>

      {/* System Toggles */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">System Toggles</h4>
        <div className="space-y-3 max-w-md">
          <ToggleSwitch label="User Registration" enabled={true} onToggle={() => {}} />
          <ToggleSwitch label="Daily Engagement System" enabled={true} onToggle={() => {}} />
          <ToggleSwitch label="Platform Maintenance Mode" enabled={false} onToggle={() => {}} />
        </div>
        <p className="text-xs text-gray-500 mt-3 italic">(Toggles are currently disabled placeholders.)</p>
      </section>

      {/* Quick Links */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Quick Links</h4>
        <div className="space-y-2">
          <div>
            <Link to="/admin/roles" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-150">
              Manage Admin Roles & Permissions
            </Link>
          </div>
          {/* Add other quick links here as needed */}
        </div>
      </section>
    </div>
  );
};

export default SuperAdminDashboardView;
