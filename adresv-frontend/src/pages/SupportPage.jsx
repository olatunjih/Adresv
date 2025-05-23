import React from 'react';
import TicketingSystem from '../components/support/TicketingSystem';
import LiveChatPlaceholder from '../components/support/LiveChatPlaceholder';
import KnowledgeBase from '../components/support/KnowledgeBase'; // Import the new component

const SupportPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Customer Support</h1>
      
      <div className="container mx-auto space-y-12"> {/* Added container and space-y for overall page structure */}
        <TicketingSystem />
        <LiveChatPlaceholder />
        <KnowledgeBase /> {/* Add the KnowledgeBase component here */}
      </div>
      
      {/* Other support-related components can be added here later */}
    </div>
  );
};

export default SupportPage;
