import React, { useState } from 'react';

const AdminLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Super Admin');
  const [use2FA, setUse2FA] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      username,
      password,
      role,
      use2FA,
      otp: use2FA ? otp : 'N/A',
    };
    console.log('Admin Login Credentials:', credentials);
    alert(`Admin login attempt with username: ${username}. Check console for details.`);
    // Optionally reset form fields here
    // setUsername('');
    // setPassword('');
    // setRole('Super Admin');
    // setUse2FA(false);
    // setOtp('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div>
        <label 
          htmlFor="admin-username" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Username/Email
        </label>
        <input
          type="text"
          id="admin-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="admin@example.com"
        />
      </div>

      <div>
        <label 
          htmlFor="admin-password" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="admin-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="••••••••"
        />
      </div>

      <div>
        <label 
          htmlFor="admin-role" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Role (Placeholder)
        </label>
        <select
          id="admin-role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Super Admin</option>
          <option>Global Admin</option>
          <option>User Admin</option>
          <option>Billing Admin</option>
          <option>Message Admin</option>
        </select>
      </div>

      <div className="flex items-center">
        <input
          id="admin-use-2fa"
          type="checkbox"
          checked={use2FA}
          onChange={(e) => setUse2FA(e.target.checked)}
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
        <label 
          htmlFor="admin-use-2fa" 
          className="ml-2 block text-sm text-gray-900"
        >
          Use 2FA
        </label>
      </div>

      {use2FA && (
        <div>
          <label 
            htmlFor="admin-otp" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            OTP Code
          </label>
          <input
            type="text"
            id="admin-otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required={use2FA} // Only required if 2FA is checked
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your OTP"
          />
        </div>
      )}

      {/* Designated area for error messages */}
      <div 
        id="admin-login-error-message" 
        className="p-3 my-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded-md"
        style={{ display: 'none' }} // Initially hidden, will be shown when there's an error
      >
        {/* Error messages will appear here. Example: "Invalid username or password." */}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
      >
        Login
      </button>
    </form>
  );
};

export default AdminLoginForm;
