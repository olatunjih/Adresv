import React, { useState } from 'react';

const ComposeNotificationForm = () => {
  const [title, setTitle] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [targetAudience, setTargetAudience] = useState('All Users');
  const [specificRoles, setSpecificRoles] = useState([]);
  const [individualUser, setIndividualUser] = useState('');
  const [deliverySchedule, setDeliverySchedule] = useState('Send Now');
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');

  const mockRoles = ["Investor", "Trader", "New User", "VIP"];

  const handleRoleChange = (role) => {
    setSpecificRoles(prev =>
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
  };

  const getFormData = () => ({
    title,
    messageBody,
    targetAudience,
    specificRoles: targetAudience === 'Specific Roles' ? specificRoles : 'N/A',
    individualUser: targetAudience === 'Individual User' ? individualUser : 'N/A',
    deliverySchedule,
    scheduledDate: deliverySchedule === 'Schedule for Later' ? scheduledDate : 'N/A',
    scheduledTime: deliverySchedule === 'Schedule for Later' ? scheduledTime : 'N/A',
  });

  const handlePreview = () => {
    const formData = getFormData();
    console.log("Preview Notification Data:", formData);
    alert(`Preview:\nTitle: ${formData.title}\nMessage: ${formData.messageBody}\nTarget: ${formData.targetAudience}\nSchedule: ${formData.deliverySchedule}`);
  };

  const handleSendSchedule = () => {
    const formData = getFormData();
    const action = deliverySchedule === 'Send Now' ? 'Send' : 'Schedule';
    console.log(`${action} Notification Data:`, formData);
    alert(`${action} Notification:\nTitle: ${formData.title}\nTarget: ${formData.targetAudience}\nSchedule: ${formData.deliverySchedule}`);
  };

  const handleSaveDraft = () => {
    const formData = getFormData();
    console.log("Save Draft Data:", formData);
    alert(`Draft Saved:\nTitle: ${formData.title}`);
  };


  return (
    <section className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">Compose New Notification</h2>
      <form className="space-y-6">
        {/* Notification Content */}
        <fieldset className="border border-gray-300 p-4 rounded-md">
          <legend className="text-lg font-medium text-gray-700 px-2">Content</legend>
          <div>
            <label htmlFor="notif-title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              id="notif-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength="100"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Notification Title (max 100 chars)"
            />
          </div>
          <div>
            <label htmlFor="notif-message" className="block text-sm font-medium text-gray-700 mb-1 mt-4">Message Body</label>
            {/* Rich text support planned */}
            <textarea
              id="notif-message"
              rows="5"
              value={messageBody}
              onChange={(e) => setMessageBody(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your notification message here..."
            ></textarea>
          </div>
        </fieldset>

        {/* Target Audience */}
        <fieldset className="border border-gray-300 p-4 rounded-md">
          <legend className="text-lg font-medium text-gray-700 px-2">Target Audience</legend>
          <div className="space-y-2">
            {['All Users', 'Specific Roles', 'Individual User'].map(option => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="targetAudience"
                  value={option}
                  checked={targetAudience === option}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>

          {targetAudience === 'Specific Roles' && (
            <div className="mt-4 pl-6 border-l-2 border-indigo-200">
              <p className="text-sm font-medium text-gray-700 mb-2">Select Roles:</p>
              <div className="grid grid-cols-2 gap-2">
                {mockRoles.map(role => (
                  <label key={role} className="flex items-center space-x-2 p-1 hover:bg-gray-50 rounded-md cursor-pointer">
                    <input
                      type="checkbox"
                      checked={specificRoles.includes(role)}
                      onChange={() => handleRoleChange(role)}
                      className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <span className="text-sm text-gray-700">{role}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {targetAudience === 'Individual User' && (
            <div className="mt-4 pl-6 border-l-2 border-indigo-200">
              <label htmlFor="notif-individual-user" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                id="notif-individual-user"
                value={individualUser}
                onChange={(e) => setIndividualUser(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter username (non-functional search)"
              />
            </div>
          )}
        </fieldset>

        {/* Delivery Schedule */}
        <fieldset className="border border-gray-300 p-4 rounded-md">
          <legend className="text-lg font-medium text-gray-700 px-2">Delivery Schedule</legend>
          <div className="space-y-2">
            {['Send Now', 'Schedule for Later'].map(option => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="deliverySchedule"
                  value={option}
                  checked={deliverySchedule === option}
                  onChange={(e) => setDeliverySchedule(e.target.value)}
                  className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>

          {deliverySchedule === 'Schedule for Later' && (
            <div className="mt-4 pl-6 border-l-2 border-indigo-200 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="notif-date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  id="notif-date"
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="notif-time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="time"
                  id="notif-time"
                  value={scheduledTime}
                  onChange={(e) => setScheduledTime(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          )}
        </fieldset>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-end gap-3 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={handlePreview}
            className="px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 transition-colors"
          >
            Preview Notification
          </button>
          <button
            type="button"
            onClick={handleSaveDraft}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 transition-colors"
          >
            Save as Draft
          </button>
          <button
            type="button"
            onClick={handleSendSchedule}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500 transition-colors"
          >
            {deliverySchedule === 'Send Now' ? 'Send Notification' : 'Schedule Notification'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ComposeNotificationForm;
