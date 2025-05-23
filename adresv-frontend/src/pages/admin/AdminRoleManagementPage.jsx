import React from 'react';
import AdminDirectory from '../../components/admin/roles/AdminDirectory'; // Import the component

const AdminRoleManagementPage = () => {
  const mockRoleActivityLogs = [
    { id: 1, log: "User 'Bob The Builder' roles changed from ['User Admin'] to ['User Admin', 'Message Admin'] by SuperAdminX on 2024-08-01 11:30 AM." },
    { id: 2, log: "User 'Charlie Brown' roles changed from [] to ['Billing Admin'] by SuperAdminX on 2024-07-31 09:15 AM." },
    { id: 3, log: "User 'Diana Prince' roles changed from ['Global Admin', 'User Admin'] to ['Global Admin'] by SuperAdminY on 2024-07-30 16:45 PM." },
  ];

  return (
    <div className="p-6 space-y-8"> {/* Added space-y for overall spacing between sections */}
      <h1 className="text-2xl font-bold text-gray-800">
        Admin Role Management
      </h1>
      
      {/* Admin Directory Section */}
      {/* The AdminDirectory component already has its own card-like styling (bg-white, p-6, shadow) */}
      <AdminDirectory />

      {/* Role Assignment Activity Log Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Role Assignment Activity Log</h2>
        {mockRoleActivityLogs.length > 0 ? (
          <ul className="space-y-3">
            {mockRoleActivityLogs.map((entry) => (
              <li 
                key={entry.id} 
                className="p-3 bg-gray-50 rounded-md shadow-sm text-sm text-gray-600 border border-gray-200"
              >
                {entry.log}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">A log of recent role changes will be displayed here.</p>
        )}
      </section>
    </div>
  );
};

export default AdminRoleManagementPage;
