import React, { useState } from 'react';

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('quiz'); // 'quiz' or 'trade'

  const quizRankings = [
    { id: 1, name: 'UserAlpha', score: 1250, rank: 1 },
    { id: 2, name: 'UserBeta', score: 1100, rank: 2 },
    { id: 3, name: 'UserGamma', score: 950, rank: 3 },
    { id: 4, name: 'UserDelta', score: 800, rank: 4 },
    { id: 5, name: 'UserEpsilon', score: 750, rank: 5 },
  ];

  const tradeRankings = [
    { id: 1, name: 'TraderX', pnl: 5200, rank: 1 },
    { id: 2, name: 'CryptoQueen', pnl: 4800, rank: 2 },
    { id: 3, name: 'MarketMaverick', pnl: 4500, rank: 3 },
    { id: 4, name: 'UserAlpha', pnl: 3000, rank: 4 }, // Same user can be in both
    { id: 5, name: 'ProfitPro', pnl: 2800, rank: 5 },
  ];

  const renderRankings = (rankings, type) => {
    return (
      <ul className="space-y-3">
        {rankings.map((user) => (
          <li key={user.id} className="flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-150">
            <div className="flex items-center">
              <span className={`text-lg font-semibold mr-3 w-6 text-center ${
                user.rank === 1 ? 'text-yellow-500' : 
                user.rank === 2 ? 'text-gray-400' : 
                user.rank === 3 ? 'text-yellow-600' : 'text-gray-700'}`
              }>
                {user.rank}.
              </span>
              <span className="text-gray-800 font-medium">{user.name}</span>
            </div>
            <span className={`font-semibold ${type === 'quiz' ? 'text-blue-600' : 'text-green-600'}`}>
              {type === 'quiz' ? `Score: ${user.score}` : `PnL: $${user.pnl.toLocaleString()}`}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Leaderboard</h2>
      
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-4 -mb-px">
          <button
            onClick={() => setActiveTab('quiz')}
            className={`py-3 px-4 font-medium text-sm leading-5 rounded-t-md
                        focus:outline-none transition-colors duration-150
                        ${activeTab === 'quiz' 
                          ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50' 
                          : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Quiz Rankings
          </button>
          <button
            onClick={() => setActiveTab('trade')}
            className={`py-3 px-4 font-medium text-sm leading-5 rounded-t-md
                        focus:outline-none transition-colors duration-150
                        ${activeTab === 'trade' 
                          ? 'border-b-2 border-green-500 text-green-600 bg-green-50' 
                          : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Mock Trade Rankings
          </button>
        </nav>
      </div>

      <div>
        {activeTab === 'quiz' && renderRankings(quizRankings, 'quiz')}
        {activeTab === 'trade' && renderRankings(tradeRankings, 'trade')}
      </div>
    </div>
  );
};

export default Leaderboard;
