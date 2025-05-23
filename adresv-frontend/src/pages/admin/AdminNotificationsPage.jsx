import React from 'react';
import ComposeNotificationForm from '../../components/admin/notifications/ComposeNotificationForm';
import NotificationHistoryTable from '../../components/admin/notifications/NotificationHistoryTable';

const AdminNotificationsPage = () => {
  const mockDrafts = [
    { id: "draft1", title: "Draft: Q3 Marketing Blast", lastSaved: "2024-08-02 09:15 AM" },
    { id: "draft2", title: "Draft: New User Welcome Email Update", lastSaved: "2024-08-01 16:30 PM" },
    { id: "draft3", title: "Draft: Holiday Promotion Ideas", lastSaved: "2024-07-29 11:00 AM" },
  ];

  const handleEditDraft = (draftId, draftTitle) => {
    console.log(`Editing draft ID: ${draftId}, Title: ${draftTitle}`);
    alert(`Placeholder: Edit draft "${draftTitle}" (ID: ${draftId})`);
  };

  const handleDeleteDraft = (draftId, draftTitle) => {
    console.log(`Deleting draft ID: ${draftId}, Title: ${draftTitle}`);
    alert(`Placeholder: Delete draft "${draftTitle}" (ID: ${draftId})`);
  };

  return (
    <div className="p-6 space-y-8"> {/* Added space-y for overall layout */}
      <h1 className="text-2xl font-bold text-gray-800">
        Notifications Management
      </h1>
      
      {/* Compose Notification Form Section */}
      {/* ComposeNotificationForm already has its own card styling */}
      <ComposeNotificationForm />

      {/* Draft Notifications Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Draft Notifications</h2>
        {mockDrafts.length > 0 ? (
          <ul className="space-y-3">
            {mockDrafts.map((draft) => (
              <li 
                key={draft.id} 
                className="p-3 bg-gray-50 rounded-md shadow-sm border border-gray-200 flex justify-between items-center"
              >
                <div>
                  <p className="text-sm font-medium text-gray-700">{draft.title}</p>
                  <p className="text-xs text-gray-500">Saved: {draft.lastSaved}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEditDraft(draft.id, draft.title)}
                    className="px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-100 rounded-md hover:bg-indigo-200 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteDraft(draft.id, draft.title)}
                    className="px-3 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-md hover:bg-red-200 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No drafts saved.</p>
        )}
      </section>
      
      {/* Notification History Table Section */}
      {/* NotificationHistoryTable already has its own card styling */}
      <NotificationHistoryTable />
    </div>
  );
};

export default AdminNotificationsPage;
