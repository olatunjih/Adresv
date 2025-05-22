import React from 'react';
import SubmitTicketForm from '../components/support/SubmitTicketForm';
import TicketList from '../components/support/TicketList'; // Added potentially missing import
import LiveChatPlaceholder from '../components/support/LiveChatPlaceholder'; // Import LiveChatPlaceholder
import KnowledgeBasePlaceholder from '../components/support/KnowledgeBasePlaceholder'; // Import KnowledgeBasePlaceholder

const SupportPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Support Page</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Submit a Ticket Section */}
        <SubmitTicketForm />

        {/* Your Tickets Section */}
        <TicketList />

        {/* Live Chat Section - Replaced placeholder with LiveChatPlaceholder component */}
        <LiveChatPlaceholder />

        {/* Knowledge Base Section - Replaced placeholder with KnowledgeBasePlaceholder component */}
        <KnowledgeBasePlaceholder />
      </div>
    </div>
  );
};

export default SupportPage;
