import React from 'react';

const PersonalDetails = () => {
  // Placeholder data
  const userDetails = {
    fullName: 'Abdulazeez Adisa',
    phoneNumber: '+1 234 567 8900',
    email: 'abdulazeez.adisa@example.com',
    profilePictureUrl: 'https://via.placeholder.com/150/0000FF/808080?Text=User+Avatar' // Placeholder image
  };

  return (
    <section className="p-6 bg-white shadow rounded-lg mb-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-6">Personal Details</h3>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-32 h-32 rounded-full overflow-hidden mr-0 md:mr-8 mb-6 md:mb-0 flex-shrink-0">
          <img 
            src={userDetails.profilePictureUrl} 
            alt="Profile Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 flex-grow">
          <div>
            <label className="block text-sm font-medium text-gray-500">Full Name</label>
            <p className="mt-1 text-lg text-gray-900">{userDetails.fullName}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Phone Number</label>
            <p className="mt-1 text-lg text-gray-900">{userDetails.phoneNumber}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Email Address</label>
            <p className="mt-1 text-lg text-gray-900">{userDetails.email}</p>
            <p className="mt-0.5 text-xs text-gray-400">(Email editing requires verification)</p>
          </div>
          {/* Placeholder for future edit button or actions */}
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
