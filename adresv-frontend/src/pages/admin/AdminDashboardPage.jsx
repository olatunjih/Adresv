import React, { useState } from 'react';
import SuperAdminDashboardView from '../../components/admin/dashboard/SuperAdminDashboardView';
import UserAdminDashboardView from '../../components/admin/dashboard/UserAdminDashboardView';
import GlobalAdminDashboardView from '../../components/admin/dashboard/GlobalAdminDashboardView';
import BillingAdminDashboardView from '../../components/admin/dashboard/BillingAdminDashboardView';
import MessageAdminDashboardView from '../../components/admin/dashboard/MessageAdminDashboardView';
import DefaultAdminDashboardView from '../../components/admin/dashboard/DefaultAdminDashboardView';

const adminRoles = ["Super Admin", "Global Admin", "User Admin", "Billing Admin", "Message Admin"];

const AdminDashboardPage = () => {
  const [currentMockRole, setCurrentMockRole] = useState("Super Admin"); // Default to Super Admin

  const renderDashboardView = () => {
    switch (currentMockRole) {
      case "Super Admin":
        return <SuperAdminDashboardView />;
      case "User Admin":
        return <UserAdminDashboardView />;
      case "Global Admin":
        return <GlobalAdminDashboardView />;
      case "Billing Admin":
        return <BillingAdminDashboardView />;
      case "Message Admin":
        return <MessageAdminDashboardView />;
      default:
        return <DefaultAdminDashboardView />;
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md p-4 rounded-lg mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-sm text-gray-500">
              Current Mock Role: <span className="font-semibold text-indigo-600">{currentMockRole}</span>
            </p>
          </div>
          <div>
            <label htmlFor="role-select" className="block text-sm font-medium text-gray-700 mb-1">
              Select Mock Role:
            </label>
            <select
              id="role-select"
              value={currentMockRole}
              onChange={(e) => setCurrentMockRole(e.target.value)}
              className="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
            >
              {adminRoles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <main className="bg-white shadow-xl rounded-lg p-8">
        {/* Conditional rendering of dashboard views */}
        {renderDashboardView()}
      </main>
    </div>
  );
};

export default AdminDashboardPage;
