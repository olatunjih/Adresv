import React, { useState } from 'react';
import './RoleManagementPage.css'; // Import the CSS file

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
    setAdmins(prevAdmins =>
      prevAdmins.map(admin =>
        admin.id === selectedAdmin.id ? { ...admin, role: selectedRole } : admin
      )
    );
    console.log(`Role changed for user ${selectedAdmin.name} to ${selectedRole}. This action should be logged to the backend.`);
    setShowModal(false);
  };

  const cancelRoleChange = () => {
    setShowModal(false);
  };

  return (
    <div className="role-management-page">
      <h1 className="page-title">Admin Role Management</h1>
      <table className="admin-table">
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
                  data-testid={`role-select-${admin.id}`}
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
        <div className="confirmation-modal" data-testid="confirmation-modal">
          <h2 className="modal-title">Confirm Role Change</h2>
          <p className="modal-message">
            Are you sure you want to assign '{selectedRole}' to {selectedAdmin?.name}?
          </p>
          <button onClick={confirmRoleChange} className="modal-button modal-button-confirm">Confirm</button>
          <button onClick={cancelRoleChange} className="modal-button modal-button-cancel">Cancel</button>
        </div>
      )}

      {/* The <style jsx> block has been removed */}
    </div>
  );
};

export default RoleManagementPage;
