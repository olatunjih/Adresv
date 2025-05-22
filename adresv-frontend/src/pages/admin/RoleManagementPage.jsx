import React from 'react';
import AdminDirectoryTable from '../../components/admin/roles/AdminDirectoryTable'; // Import the AdminDirectoryTable

const RoleManagementPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md p-4 rounded-lg mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Role Management</h1>
      </header>

      <main className="bg-white shadow-xl rounded-lg p-8">
        {/* The h2 heading is now part of AdminDirectoryTable, or can be kept here if preferred */}
        {/* <h2 className="text-2xl font-semibold text-gray-700 mb-4">Admin Directory & Role Assignment</h2> */}
        <AdminDirectoryTable />
      </main>

      {/* Role Change Activity Logs Section */}
      <div className="bg-white shadow-xl rounded-lg p-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Role Change Activity Logs</h2>
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">User 'SuperAdmin'</span> changed role of <span className="font-semibold">'Alice Wonderland'</span> from <span className="italic">'Global Admin, Message Admin'</span> to <span className="italic">'User Admin'</span> on <span className="text-gray-500">2024-03-16 10:30 AM (Mock)</span>.
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
            <p className="text-sm text-gray-700">
              Role <span className="italic">'Billing Admin'</span> assigned to new user <span className="font-semibold">'Charlie Brown'</span> by <span className="font-semibold">'SuperAdmin'</span> on <span className="text-gray-500">2024-03-15 14:00 PM (Mock)</span>.
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">User 'SuperAdmin'</span> changed role of <span className="font-semibold">'Bob The Builder'</span> from <span className="italic">'User Admin'</span> to <span className="italic">'Global Admin'</span> on <span className="text-gray-500">2024-03-14 09:15 AM (Mock)</span>.
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-4 italic text-center">
            (Full, filterable activity logs for role changes will be displayed here in a future update.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleManagementPage;
