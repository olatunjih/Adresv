import React from 'react';

const LiveChatPlaceholder = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Live Chat Support</h2>
      
      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>

      <p className="text-gray-600 mb-6 text-lg">
        Our Live Chat feature is <span className="font-semibold text-indigo-600">Coming Soon!</span>
      </p>
      <p className="text-sm text-gray-500 mb-6">
        We're working hard to bring you real-time support. Please check back later.
      </p>

      <button
        type="button"
        disabled
        className="w-full bg-gray-300 text-gray-500 font-bold py-2.5 px-4 rounded-md cursor-not-allowed"
      >
        Start Chat (Unavailable)
      </button>
    </div>
  );
};

export default LiveChatPlaceholder;
