import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import AdminLoginForm from '../../components/admin/auth/AdminLoginForm'; // Ensure AdminLoginForm is imported

const AdminLoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Admin Login
        </h1>
        <AdminLoginForm /> {/* Ensure AdminLoginForm is rendered */}
        <div className="mt-6 text-center">
          <Link to="/admin/dashboard" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            Go to Admin Dashboard (Dev Link)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
