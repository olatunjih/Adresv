import React from 'react';
import PlatformMetrics from '../../components/admin/dashboard/superadmin/PlatformMetrics';
import AdminActivityLogs from '../../components/admin/dashboard/superadmin/AdminActivityLogs';
import SystemToggles from '../../components/admin/dashboard/superadmin/SystemToggles';

const AdminDashboardPage = () => {
  // TODO: Add logic here to determine the admin's role and render the appropriate dashboard view 
  // (e.g., SuperAdminView, GlobalAdminView, etc.)
  // For now, directly rendering Super Admin components.

  return (
    <div className="p-6 bg-gray-100 min-h-screen"> {/* Changed bg-gray-50 to bg-gray-100 for consistency if AdminLayout uses it */}
      <div className="container mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6"> 
          Admin Dashboard <span className="text-lg font-normal text-indigo-600">(Super Admin View)</span>
        </h1>
        
        {/* Super Admin View Components */}
        <PlatformMetrics />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AdminActivityLogs />
          <SystemToggles />
        </div>
        
        {/* 
          Placeholder for other role-specific views:
          {isAdmin && <AdminView />}
          {isModerator && <ModeratorView />} 
        */}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
