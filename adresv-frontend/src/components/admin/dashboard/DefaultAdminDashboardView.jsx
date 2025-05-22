import React from 'react';

const DefaultAdminDashboardView = () => {
  return (
    <div className="p-4 border rounded-md bg-gray-50 text-center">
      <h3 className="text-xl font-semibold text-gray-700">Admin Dashboard</h3>
      <p className="text-gray-600 mt-2">
        Select a role from the dropdown above to see a specific dashboard view.
      </p>
      <p className="text-sm text-gray-500 mt-1">
        This area will display generic administrative information or role-specific tools based on your selection.
      </p>
    </div>
  );
};

export default DefaultAdminDashboardView;
