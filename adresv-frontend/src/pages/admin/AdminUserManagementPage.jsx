import React from 'react';
import UserDirectoryTable from '../../components/admin/usermanagement/UserDirectoryTable'; // Import the component

const AdminUserManagementPage = () => {
  return (
    // The AdminLayout provides the overall page structure.
    // This component renders its specific content within that layout.
    <div className="p-6 space-y-6"> {/* Standard padding, added space-y for spacing if needed */}
      <h1 className="text-2xl font-bold text-gray-800"> {/* Removed mb-6 as space-y will handle it */}
        User Management
      </h1>
      
      {/* UserDirectoryTable already has its own card-like styling (bg-white, p-6, shadow) */}
      <UserDirectoryTable />
      
    </div>
  );
};

export default AdminUserManagementPage;
