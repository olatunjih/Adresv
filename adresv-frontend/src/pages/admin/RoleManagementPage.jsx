import React, { useState } from 'react';

const mockAdmins = [
  { id: 1, name: 'Alice Wonderland', role: 'Super Admin', createdDate: '2023-01-15', lastLogin: '2024-07-20 10:00 AM' },
  { id: 2, name: 'Bob The Builder', role: 'Global Admin', createdDate: '2023-02-20', lastLogin: '2024-07-19 08:30 AM' },
  { id: 3, name: 'Charlie Brown', role: 'User Admin', createdDate: '2023-03-10', lastLogin: '2024-07-20 11:00 AM' }
];

const roles = ['Super Admin', 'Global Admin', 'User Admin', 'Billing Admin', 'Message Admin'];

const RoleManagementPage = () => {
  const [admins, setAdmins] = useState(mockAdmins);
  const [showModal, setShowModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = (adminId, newRole) => {
    setSelectedAdmin(admins.find(admin => admin.id === adminId));
    setSelectedRole(newRole);
    setShowModal(true);
  };

  const confirmRoleChange = () => {
    // Update admin role
    setAdmins(prevAdmins =>
      prevAdmins.map(admin =>
        admin.id === selectedAdmin.id ? { ...admin, role: selectedRole } : admin
      )
    );
    // Log activity
    console.log(`Role changed for user ${selectedAdmin.name} to ${selectedRole}. This action should be logged to the backend.`);
    setShowModal(false);
  };

  const cancelRoleChange = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Admin Role Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Account Creation Date</th>
            <th>Last Login Timestamp</th>
            <th>Assign Role</th>
          </tr>
        </thead>
        <tbody>
          {admins.map(admin => (
            <tr key={admin.id}>
              <td>{admin.name}</td>
              <td>{admin.role}</td>
              <td>{admin.createdDate}</td>
              <td>{admin.lastLogin}</td>
              <td>
                <select
                  value={admin.role}
                  onChange={e => handleRoleChange(admin.id, e.target.value)}
                >
                  {roles.map(role => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal">
          <h2>Confirm Role Change</h2>
          <p>
            Are you sure you want to assign '{selectedRole}' to {selectedAdmin?.name}?
          </p>
          <button onClick={confirmRoleChange}>Confirm</button>
          <button onClick={cancelRoleChange}>Cancel</button>
        </div>
      )}

      {/* Basic styling for the modal for visibility */}
      <style jsx>{`
        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 20px;
          border: 1px solid #ccc;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
};

export default RoleManagementPage;
