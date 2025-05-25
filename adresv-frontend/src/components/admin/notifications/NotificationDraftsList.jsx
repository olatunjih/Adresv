import React from 'react';

// Default mock data if no drafts prop is provided
const defaultMockDrafts = [
  { id: "d1", title: "Upcoming Feature Teaser", lastSaved: "2024-08-20 10:00 AM" },
  { id: "d2", title: "Holiday Greetings (Pending Review)", lastSaved: "2024-08-19 03:00 PM" },
  { id: "d3", title: "Q4 Newsletter Ideas", lastSaved: "2024-08-18 11:30 AM" },
];

const NotificationDraftsList = ({ drafts = defaultMockDrafts }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Saved Drafts</h2>
      
      {drafts.length === 0 ? (
        <p className="text-center text-gray-500 py-4">No saved drafts found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Draft Title
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last Saved Date
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" // Text-right for actions
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {drafts.map((draft) => (
                <tr key={draft.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {draft.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {draft.lastSaved}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      type="button" 
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                      // onClick={() => console.log('Edit draft:', draft.id)} // Placeholder action
                    >
                      Edit
                    </button>
                    <button 
                      type="button" 
                      className="text-red-600 hover:text-red-900 mr-3"
                      // onClick={() => console.log('Delete draft:', draft.id)} // Placeholder action
                    >
                      Delete
                    </button>
                    <button 
                      type="button" 
                      className="text-green-600 hover:text-green-900"
                      // onClick={() => console.log('Send from draft:', draft.id)} // Placeholder action
                    >
                      Send from Draft
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default NotificationDraftsList;
