import React, { useState } from 'react';

const SystemToggles = () => {
  // Mock state for toggles - non-functional, just for visual representation
  const [registrationEnabled, setRegistrationEnabled] = useState(true);
  const [loginEnabled, setLoginEnabled] = useState(true);
  const [engagementEnabled, setEngagementEnabled] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const ToggleSwitch = ({ label, enabled, onChange }) => (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md shadow-sm">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <button
        onClick={onChange}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          ${enabled ? 'bg-green-500' : 'bg-red-500'}`}
      >
        <span
          className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform
            ${enabled ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </button>
    </div>
  );

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">System Controls</h2>
      <div className="space-y-4">
        <ToggleSwitch 
          label="User Registration" 
          enabled={registrationEnabled} 
          onChange={() => setRegistrationEnabled(!registrationEnabled)} 
        />
        <ToggleSwitch 
          label="Login System" 
          enabled={loginEnabled} 
          onChange={() => setLoginEnabled(!loginEnabled)} 
        />
        <ToggleSwitch 
          label="Daily Engagement Features" 
          enabled={engagementEnabled} 
          onChange={() => setEngagementEnabled(!engagementEnabled)} 
        />
        <ToggleSwitch 
          label="Platform Maintenance Mode" 
          enabled={maintenanceMode} 
          onChange={() => setMaintenanceMode(!maintenanceMode)} 
        />
      </div>
    </section>
  );
};

export default SystemToggles;
