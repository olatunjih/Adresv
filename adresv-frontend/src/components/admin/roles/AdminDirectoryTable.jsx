import React, { useState } from 'react';

const initialAdminUsers = [
  {
    id: 'admin001',
    name: 'Super Admin User',
    roles: ['Super Admin'],
    accountCreated: '2023-01-01',
    lastLogin: '2024-03-15 09:00 AM',
    isModifiable: false,
  },
  {
    id: 'admin002',
    name: 'Alice Wonderland',
    roles: ['Global Admin', 'Message Admin'],
    accountCreated: '2023-02-10',
    lastLogin: '2024-03-14 11:30 AM',
    isModifiable: true,
  },
  {
    id: 'admin003',
    name: 'Bob The Builder',
    roles: ['User Admin'],
    accountCreated: '2023-03-20',
    lastLogin: '2024-03-15 08:15 AM',
    isModifiable: true,
  },
  {
    id: 'admin004',
    name: 'Charlie Brown',
    roles: ['Billing Admin'],
    accountCreated: '2023-04-05',
    lastLogin: '2024-03-12 16:45 PM',
    isModifiable: true,
  },
];

const assignableRoles = ["Global Admin", "User Admin", "Billing Admin", "Message Admin"];

const AdminDirectoryTable = () => {
  const [admins, setAdmins] = useState(initialAdminUsers);

  const handleRoleChange = (adminId, adminName, newRole) => {
    if (window.confirm(`Are you sure you want to change ${adminName}'s role to ${newRole}?`)) {
      setAdmins(prevAdmins =>
        prevAdmins.map(admin =>
          admin.id === adminId ? { ...admin, roles: [newRole] } : admin
        )
      );
      console.log(`Role for ${adminName} changed to ${newRole}. New roles: ["${newRole}"]`);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-6">Admin User Directory</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Current Role(s)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Account Created
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Login
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assign New Role
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {admins.map((admin) => (
              <tr key={admin.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{admin.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {admin.roles.join(', ')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.accountCreated}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.lastLogin}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {admin.isModifiable ? (
                    <select
                      value={admin.roles[0] || ''} // Set current value to first role, or empty if no roles
                      onChange={(e) => handleRoleChange(admin.id, admin.name, e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
                    >
                      <option value="" disabled={admin.roles.length > 0}>
                        {admin.roles.length > 0 ? 'Change role...' : 'Select a role...'}
                      </option>
                      {assignableRoles.map(role => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span className="text-xs text-gray-400 italic">Not Modifiable</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDirectoryTable;
