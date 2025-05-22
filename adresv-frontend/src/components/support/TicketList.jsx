import React from 'react';
import TicketItem from './TicketItem';

const mockTicketsData = [
  { id: 'TKT-001', category: 'Deposits', subject: 'USDT deposit not reflected', status: 'Open', lastUpdated: '30 minutes ago' },
  { id: 'TKT-002', category: 'Account Issues', subject: 'Unable to reset 2FA', status: 'In Progress', lastUpdated: '1 hour ago' },
  { id: 'TKT-003', category: 'Technical Glitch', subject: 'Page not loading on mobile', status: 'Resolved', lastUpdated: '5 hours ago' },
  { id: 'TKT-004', category: 'Withdrawals', subject: 'Withdrawal pending for too long', status: 'Open', lastUpdated: '2 days ago' },
];

// To test the "no tickets" message, uncomment the line below and comment out the mockTicketsData above
// const mockTicketsData = [];

const TicketList = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Your Support Tickets</h2>
      {mockTicketsData.length > 0 ? (
        <div>
          {mockTicketsData.map((ticket) => (
            <TicketItem
              key={ticket.id}
              id={ticket.id}
              category={ticket.category}
              subject={ticket.subject}
              status={ticket.status}
              lastUpdated={ticket.lastUpdated}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="mt-3 text-lg font-medium">You have no support tickets.</p>
          <p className="mt-1 text-sm">Any new tickets you submit will appear here.</p>
        </div>
      )}
    </div>
  );
};

export default TicketList;
