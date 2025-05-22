import React from 'react';

const MockTrades = () => {
  const mockTradesData = [
    {
      id: 1,
      name: "BTC/USD Long",
      entryPrice: "50,000",
      exitPrice: "51,000",
      fee: "5",
      currentParticipants: 10,
      maxParticipants: 50,
    },
    {
      id: 2,
      name: "ETH/USD Short",
      entryPrice: "3,500",
      exitPrice: "3,400",
      fee: "3",
      currentParticipants: 25,
      maxParticipants: 50,
    },
    {
      id: 3,
      name: "SOL/USD Long",
      entryPrice: "150",
      exitPrice: "155",
      fee: "2",
      currentParticipants: 5,
      maxParticipants: 30,
    },
  ];

  const handleJoinTrade = (tradeId) => {
    // Placeholder for joining trade logic
    alert(`Joining trade ID: ${tradeId}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Available Mock Trades</h2>
      <div className="space-y-4">
        {mockTradesData.map((trade) => (
          <div key={trade.id} className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{trade.name}</h3>
            <p className="text-sm text-gray-600">Entry: ${trade.entryPrice} / Exit: ${trade.exitPrice}</p>
            <p className="text-sm text-gray-600">Fee: ${trade.fee}</p>
            <p className="text-sm text-gray-600 mb-3">
              Participants: {trade.currentParticipants}/{trade.maxParticipants}
            </p>
            <button
              onClick={() => handleJoinTrade(trade.id)}
              className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50
                         transition duration-150 ease-in-out"
            >
              Join Trade
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockTrades;
