import React, { useState, useEffect } from 'react';
import RoleAssignmentModal from './RoleAssignmentModal'; // Import the modal

const AdminDirectory = () => {
  const initialMockAdmins = [
    { id: "adm1", name: "Alice Wonderland", email: "alice@example.com", currentRoles: ["Super Admin"], created_at: "2023-01-01", last_login: "2024-07-31 10:00 AM" },
    { id: "adm2", name: "Bob The Builder", email: "bob@example.com", currentRoles: ["User Admin", "Message Admin"], created_at: "2023-02-10", last_login: "2024-07-30 14:20 PM" },
    { id: "adm3", name: "Charlie Brown", email: "charlie@example.com", currentRoles: ["Billing Admin"], created_at: "2023-03-20", last_login: "2024-07-29 08:55 AM" },
    { id: "adm4", name: "Diana Prince", email: "diana@example.com", currentRoles: ["Global Admin"], created_at: "2023-04-25", last_login: "2024-07-31 11:30 AM" },
  ];

  const [admins, setAdmins] = useState(initialMockAdmins);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const openEditRolesModal = (admin) => {
    // Super Admin roles should not be editable via this modal
    if (admin.currentRoles && admin.currentRoles.includes("Super Admin")) {
        alert("Super Admin roles cannot be modified through this interface.");
        return;
    }
    setSelectedAdmin(admin);
    setIsModalOpen(true);
  };

  const handleSaveRoles = (adminId, newRoles) => {
    console.log(`Saving roles for admin ${adminId}: ${newRoles.join(', ')}`);
    setAdmins(currentAdmins =>
      currentAdmins.map(admin =>
        admin.id === adminId ? { ...admin, currentRoles: newRoles } : admin
      )
    );
    setIsModalOpen(false); // Close modal after saving
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAdmin(null);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Admin User Directory</h2>
      
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Search Admins..." 
          className="w-full md:w-1/3 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Role(s)</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {admins.map((admin) => (
              <tr key={admin.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{admin.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{admin.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.currentRoles.join(', ')}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.created_at}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.last_login}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => openEditRolesModal(admin)}
                    className="text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out disabled:text-gray-400 disabled:cursor-not-allowed"
                    disabled={admin.currentRoles && admin.currentRoles.includes("Super Admin")}
                  >
                    Edit Roles
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {admins.length === 0 && <p className="text-center text-gray-500 py-4">No admin users found.</p>}
      </div>
      
      {isModalOpen && selectedAdmin && (
        <RoleAssignmentModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          adminUser={selectedAdmin}
          onSaveRoles={handleSaveRoles}
        />
      )}
    </section>
  );
};

export default AdminDirectory;
