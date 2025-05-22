import React, { useState } from 'react';

const ComposeNotificationForm = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [schedule, setSchedule] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const notificationData = {
      title,
      message,
      targetAudience,
      schedule,
    };
    console.log('Sending Notification:', notificationData);
    alert(`Notification Sent (Mock):\nTitle: ${title}\nMessage: ${message.substring(0,30)}...\nTarget: ${targetAudience}\nSchedule: ${schedule}`);
    // Optionally reset fields
    setTitle('');
    setMessage('');
    setTargetAudience('');
    setSchedule('');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-6">Compose New Notification</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="notification-title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="notification-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="e.g., Important Update"
          />
        </div>

        <div>
          <label htmlFor="notification-message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="notification-message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your notification body here..."
          ></textarea>
        </div>

        <div>
          <label htmlFor="notification-target" className="block text-sm font-medium text-gray-700 mb-1">
            Target Audience (Placeholder)
          </label>
          <input
            type="text"
            id="notification-target"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="all, role:Investor, user:123"
          />
        </div>

        <div>
          <label htmlFor="notification-schedule" className="block text-sm font-medium text-gray-700 mb-1">
            Schedule (Placeholder)
          </label>
          <input
            type="text"
            id="notification-schedule"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="YYYY-MM-DD HH:MM or 'now'"
          />
        </div>

        <div className="flex items-center justify-end space-x-4 pt-2">
          <button
            type="button"
            disabled
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-500 bg-gray-100 cursor-not-allowed"
          >
            Preview
          </button>
          <button
            type="submit"
            className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Send Notification
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComposeNotificationForm;
