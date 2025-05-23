import React, { useState, useEffect } from 'react';

const availableRoles = ["Global Admin", "User Admin", "Billing Admin", "Message Admin"];

const RoleAssignmentModal = ({ isOpen, onClose, adminUser, onSaveRoles }) => {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (adminUser && adminUser.currentRoles) {
      setSelectedRoles(adminUser.currentRoles);
    } else {
      setSelectedRoles([]);
    }
  }, [adminUser]);

  if (!isOpen || !adminUser) {
    return null;
  }

  const handleCheckboxChange = (role) => {
    setSelectedRoles(prev =>
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
  };

  const handleSaveAttempt = () => {
    // Simple confirmation step: toggle confirmation view
    setShowConfirmation(true);
  };

  const handleConfirmSave = () => {
    console.log(`Saving roles for admin ${adminUser.id}: ${selectedRoles}`);
    onSaveRoles(adminUser.id, selectedRoles);
    console.log("Confirmation modal (more complex) would be shown here before closing.");
    setShowConfirmation(false); // Hide confirmation
    onClose(); // Close main modal
  };
  
  const handleCancelConfirmation = () => {
    setShowConfirmation(false); // Hide confirmation, return to role selection
  };

  const handleCloseModal = () => {
    setShowConfirmation(false); // Ensure confirmation is hidden if modal is closed via Escape or backdrop
    onClose();
  }

  return (
    <div 
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50"
      onClick={handleCloseModal} // Close on backdrop click
    >
      <div 
        className="relative mx-auto p-6 border w-full max-w-lg shadow-lg rounded-md bg-white"
        onClick={e => e.stopPropagation()} // Prevent backdrop click from triggering on modal content
      >
        {!showConfirmation ? (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Editing roles for: <span className="font-bold text-indigo-600">{adminUser.name}</span>
            </h3>
            
            <div className="space-y-3 mb-6">
              <p className="text-sm text-gray-600">Assign roles:</p>
              {availableRoles.map((role) => (
                <label key={role} className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    checked={selectedRoles.includes(role)}
                    onChange={() => handleCheckboxChange(role)}
                  />
                  <span className="text-gray-700">{role}</span>
                </label>
              ))}
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-150 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveAttempt}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Save Changes
              </button>
            </div>
          </>
        ) : (
          // Confirmation View
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Confirm Role Update</h3>
            <p className="text-gray-700 mb-6">
              Are you sure you want to update roles for <span className="font-bold">{adminUser.name}</span> to: <span className="font-medium text-indigo-600">{selectedRoles.join(', ') || 'None'}</span>?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCancelConfirmation}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-150 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmSave}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Confirm & Save
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RoleAssignmentModal;
