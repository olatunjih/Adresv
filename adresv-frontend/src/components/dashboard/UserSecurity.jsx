import React from 'react';
import { Link } from 'react-router-dom';

const UserSecurity = () => {
  return (
    <section className="p-6 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">User Security</h3>
      <div>
        <Link 
          to="/profile/security#update-password" 
          className="block mb-2 text-blue-500 hover:text-blue-700 hover:underline font-semibold"
        >
          Update Password
        </Link>
        <Link 
          to="/profile/security#enable-2fa" 
          className="block text-blue-500 hover:text-blue-700 hover:underline font-semibold"
        >
          Enable 2FA
        </Link>
      </div>
    </section>
  );
};

export default UserSecurity;
