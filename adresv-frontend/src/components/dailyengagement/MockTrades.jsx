import React from 'react';

const MockTrades = () => {
  const mockTradesData = [
    {
      id: 1,
      pair: 'BTC/USDT',
      entryPrice: 30000,
      exitPrice: 30500,
      fee: 1,
      currentParticipants: 15,
      maxParticipants: 50,
    },
    {
      id: 2,
      pair: 'ETH/USDT',
      entryPrice: 1800,
      exitPrice: 1850,
      fee: 0.5,
      currentParticipants: 30,
      maxParticipants: 50,
    },
    {
      id: 3,
      pair: 'ADA/USDT',
      entryPrice: 0.25,
      exitPrice: 0.27,
      fee: 0.2,
      currentParticipants: 45,
      maxParticipants: 50,
      isDisabled: true, // Example of a full or closed trade
    },
  ];

  const handleJoinTrade = (tradeId) => {
    alert(`Attempting to join trade ID: ${tradeId}. Functionality to be implemented.`);
    // Logic for joining a trade would go here
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Available Mock Trades</h2>
      
      <div className="space-y-4">
        {mockTradesData.map((trade) => (
          <div key={trade.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-150">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{trade.pair}</h3>
            <p className="text-sm text-gray-600">
              Entry: <span className="font-medium text-gray-800">${trade.entryPrice.toLocaleString()}</span>
            </p>
            <p className="text-sm text-gray-600">
              Target Exit: <span className="font-medium text-gray-800">${trade.exitPrice.toLocaleString()}</span>
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Participation Fee: <span className="font-medium text-orange-500">{trade.fee} USDT</span>
            </p>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div 
                  className="bg-blue-500 h-2.5 rounded-full" 
                  style={{ width: `${(trade.currentParticipants / trade.maxParticipants) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1 text-right">
                Participants: {trade.currentParticipants}/{trade.maxParticipants}
              </p>
            </div>
            <button
              onClick={() => handleJoinTrade(trade.id)}
              disabled={trade.isDisabled || trade.currentParticipants >= trade.maxParticipants}
              className={`w-full mt-4 font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out
                          ${trade.isDisabled || trade.currentParticipants >= trade.maxParticipants
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-indigo-600 hover:bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'}`}
            >
              {trade.isDisabled || trade.currentParticipants >= trade.maxParticipants ? 'Full / Closed' : 'Join Trade'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockTrades;
