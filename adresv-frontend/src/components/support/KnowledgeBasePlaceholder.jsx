import React from 'react';

const KnowledgeBasePlaceholder = () => {
  const mockCategories = [
    "Getting Started",
    "Account Management",
    "Deposits & Withdrawals",
    "Security Features",
    "Trading Basics",
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Knowledge Base / FAQ</h2>

      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m0 0a8.485 8.485 0 0011.925 0M12 17.747a8.485 8.485 0 01-11.925 0M12 17.747l-.001-.001c-.097-.097-.191-.196-.283-.296M12 17.747l.001-.001c.097-.097.191-.196.283-.296M12 6.253V3m0 3.253V3m0 3.253l.001.001c.097.097.191.196.283.296M12 6.253l-.001.001c-.097.097-.191-.196-.283-.296" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>

      <p className="text-gray-600 mb-6 text-lg">
        Our Knowledge Base is <span className="font-semibold text-indigo-600">Coming Soon!</span>
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Soon you'll be able to find answers to common questions and helpful articles here.
      </p>

      <input
        type="text"
        disabled
        placeholder="Search Knowledge Base (Coming Soon)..."
        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm cursor-not-allowed sm:text-sm mb-4"
      />

      <div className="mt-4 text-left">
        <p className="text-sm font-medium text-gray-700 mb-2">Upcoming Categories:</p>
        <ul className="space-y-1">
          {mockCategories.map((category, index) => (
            <li key={index} className="text-sm text-gray-400 p-2 bg-gray-50 rounded-md">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KnowledgeBasePlaceholder;
