import React, { useState } from 'react';

const TicketingSystem = () => {
  // State for the new ticket form
  const [category, setCategory] = useState('General Inquiry');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Mock data for existing tickets
  const mockTickets = [
    { id: 'TIC-001', subject: 'Unable to login', category: 'Account Issues', status: 'Open', lastUpdated: '2024-07-30 10:00 AM' },
    { id: 'TIC-002', subject: 'Withdrawal pending for too long', category: 'Withdrawals', status: 'In Progress', lastUpdated: '2024-07-29 02:30 PM' },
    { id: 'TIC-003', subject: 'Question about deposit fees', category: 'Deposits', status: 'Resolved', lastUpdated: '2024-07-28 11:15 AM' },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTicketData = { category, subject, message };
    console.log('New Ticket Submitted:', newTicketData);
    alert(`Ticket Submitted:\nCategory: ${category}\nSubject: ${subject}\nMessage: ${message}`);
    // Reset form (optional)
    setCategory('General Inquiry');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="container mx-auto p-4 space-y-12">
      {/* Submit New Ticket Form */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Submit a New Support Ticket</h2>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>Account Issues</option>
              <option>Withdrawals</option>
              <option>Deposits</option>
              <option>General Inquiry</option>
            </select>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="e.g., Cannot reset password"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Please describe your issue in detail..."
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              Submit Ticket
            </button>
          </div>
        </form>
      </section>

      {/* Existing Tickets List */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Your Support Tickets</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ticket.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{ticket.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${ticket.status === 'Open' ? 'bg-yellow-100 text-yellow-800' : 
                        ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                        'bg-green-100 text-green-800' // Resolved
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {mockTickets.length === 0 && <p className="text-center text-gray-500 mt-4">You have no support tickets.</p>}
        </div>
      </section>
    </div>
  );
};

export default TicketingSystem;
