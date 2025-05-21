import React from 'react';
import PersonalDetails from '../components/profile/PersonalDetails';
import WalletManagement from '../components/profile/WalletManagement';
import SecuritySettings from '../components/profile/SecuritySettings';
import ActivityLogs from '../components/profile/ActivityLogs'; // Import the new component

const ProfileManagement = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Profile Management</h2>
      
      <PersonalDetails />
      <WalletManagement />
      <SecuritySettings />
      <ActivityLogs />
    </div>
  );
};

export default ProfileManagement;
