import React from 'react';

const SecuritySettings = () => {
  return (
    <section className="p-6 bg-white shadow rounded-lg mb-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-6">Security Settings</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Login Password</label>
          <button 
            onClick={() => alert('Change Login Password clicked - functionality to be added')}
            className="mt-1 text-sm text-blue-600 hover:underline"
          >
            Change Login Password
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Transaction Password</label>
          <button 
            onClick={() => alert('Update Transaction Password clicked - functionality to be added')}
            className="mt-1 text-sm text-blue-600 hover:underline"
          >
            Update Transaction Password
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Two-Factor Authentication (2FA)</label>
          <p className="text-sm text-gray-500 mt-1">Status: <span className="font-semibold text-red-500">Disabled</span></p>
          <button 
            onClick={() => alert('Enable/Disable 2FA clicked - functionality to be added')}
            className="mt-1 text-sm text-blue-600 hover:underline"
          >
            Enable 2FA
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecuritySettings;
