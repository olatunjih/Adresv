import React, { useState } from 'react';

const Leaderboard = () => {
  const [activeView, setActiveView] = useState('quiz'); // 'quiz', 'trades'

  const quizLeaderboardData = [
    { rank: 1, username: 'CryptoKing88', score: '4/5 Correct, 5s Avg Time' },
    { rank: 2, username: 'QuizMasterQ', score: '4/5 Correct, 8s Avg Time' },
    { rank: 3, username: 'TokenWizard', score: '3/5 Correct, 6s Avg Time' },
    { rank: 4, username: 'BitcoinBelle', score: '3/5 Correct, 10s Avg Time' },
    { rank: 5, username: 'AltcoinAlex', score: '2/5 Correct, 7s Avg Time' },
  ];

  const tradesLeaderboardData = [
    { rank: 1, username: 'TradeTitan', achievement: '+150% Profit' },
    { rank: 2, username: 'MarketMover', achievement: '+120% Profit' },
    { rank: 3, username: 'ProfitPioneer', achievement: '+95% Profit' },
    { rank: 4, username: 'LeverageLeo', achievement: '+70% Profit' },
    { rank: 5, username: 'ScalperSam', achievement: '+50% Profit' },
  ];

  const dataToDisplay = activeView === 'quiz' ? quizLeaderboardData : tradesLeaderboardData;
  const scoreLabel = activeView === 'quiz' ? 'Score' : 'Achievement';

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Leaderboard</h2>
      
      <div className="flex justify-center mb-6 space-x-2">
        <button
          onClick={() => setActiveView('quiz')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
            ${activeView === 'quiz' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
        >
          Daily Quiz Champions
        </button>
        <button
          onClick={() => setActiveView('trades')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
            ${activeView === 'trades' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
        >
          Mock Trade Masters
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{scoreLabel}</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dataToDisplay.map((user) => (
              <tr key={user.rank} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-900">{user.rank}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{user.username}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{user.score || user.achievement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {dataToDisplay.length === 0 && <p className="text-center text-gray-500 mt-4">No data available for this leaderboard.</p>}
    </div>
  );
};

export default Leaderboard;
