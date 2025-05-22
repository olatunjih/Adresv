import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const MessageAdminDashboardView = () => {
  const mockAnnouncements = [
    { id: 1, title: "Scheduled Maintenance Alert", content: "Platform will be down for scheduled maintenance on...", status: "Active", date: "2024-03-20" },
    { id: 2, title: "New Feature: Daily Quiz!", content: "Engage more and earn rewards with our new Daily Quiz feature...", status: "Draft", date: "2024-03-18" },
  ];

  const mockTemplates = [
    { id: "TPL-001", name: "Welcome Email", subject: "Welcome to Adresv!", lastModified: "2024-03-01" },
    { id: "TPL-002", name: "Password Reset Confirmation", subject: "Your Password Has Been Reset", lastModified: "2024-02-15" },
    { id: "TPL-003", name: "Withdrawal Successful", subject: "Withdrawal Confirmation", lastModified: "2024-03-10" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Message Administration Dashboard</h3>
            <p className="text-gray-600">
              Manage platform-wide announcements, user notifications, and communication templates.
            </p>
          </div>
          <Link 
            to="/admin/notifications-mgt" 
            className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150"
          >
            Go to Full Notifications Management
          </Link>
        </div>
      </div>

      {/* Announcement Management */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold text-gray-700">Announcement Management</h4>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm">
            Create New Announcement
          </button>
        </div>
        <div className="space-y-3">
          {mockAnnouncements.map(ann => (
            <div key={ann.id} className="p-3 border rounded-md bg-gray-50 hover:shadow-sm">
              <p className="font-semibold text-gray-700">{ann.title} <span className={`text-xs px-2 py-0.5 rounded-full ml-2 ${ann.status === 'Active' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>{ann.status}</span></p>
              <p className="text-xs text-gray-500">Date: {ann.date}</p>
              <p className="text-sm text-gray-600 truncate mt-1">{ann.content}</p>
              <button className="text-xs text-indigo-500 hover:text-indigo-700 mt-1">Edit</button>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-3 italic">(Full announcement creation and management tools would be here.)</p>
      </section>

      {/* Notification Templates */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold text-gray-700">Notification Templates</h4>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm">
            Create New Template
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Template Name</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Modified</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockTemplates.map(tpl => (
                <tr key={tpl.id}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{tpl.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{tpl.subject}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{tpl.lastModified}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-3 italic">(Full template editing and management tools would be here.)</p>
      </section>
    </div>
  );
};

export default MessageAdminDashboardView;
