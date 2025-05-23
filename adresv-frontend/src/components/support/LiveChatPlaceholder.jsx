import React from 'react';

const LiveChatPlaceholder = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg mt-12"> {/* Added mt-12 for spacing if below ticketing */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Live Chat Support</h2>
      <div className="text-center">
        <p className="text-gray-600 text-lg mb-3">
          Live Chat: <span className="font-semibold text-indigo-600">Coming Soon!</span>
        </p>
        <p className="text-gray-500 mb-4">
          Our live chat feature is currently under development and will be available in a future update. 
        </p>
        <p className="text-gray-500">
          In the meantime, please use our <a href="#ticketing-system" className="text-indigo-500 hover:underline">Support Ticket System</a> for any assistance you need.
        </p>
        {/* 
          A more advanced button could scroll to the ticketing system.
          For now, an anchor link or just the text reminder is fine.
          If TicketingSystem had an id="ticketing-system", this link would jump to it.
          <button 
            onClick={() => document.getElementById('ticketing-system')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-4 px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-150 ease-in-out"
          >
            Go to Ticketing System
          </button> 
        */}
      </div>
    </section>
  );
};

export default LiveChatPlaceholder;
