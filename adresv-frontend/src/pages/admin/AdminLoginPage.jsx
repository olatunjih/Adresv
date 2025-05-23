import React from 'react';
import AdminLoginForm from '../../components/admin/auth/AdminLoginForm'; // Import the form component

const AdminLoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white shadow-xl rounded-xl">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Portal Login
          </h1>
        </div>
        <AdminLoginForm />
      </div>
    </div>
  );
};

export default AdminLoginPage;
