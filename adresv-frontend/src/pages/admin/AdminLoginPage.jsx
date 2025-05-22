import React from 'react';

const AdminLoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Admin Login
        </h1>
        {/* Render the AdminLoginForm component */}
        <AdminLoginForm />
      </div>
    </div>
  );
};

export default AdminLoginPage;
