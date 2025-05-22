import React from 'react';
import DailyQuiz from '../components/dailyengagement/DailyQuiz';
import MockTrades from '../components/dailyengagement/MockTrades'; // Added missing import for MockTrades
import Leaderboard from '../components/dailyengagement/Leaderboard'; // Import the Leaderboard component

const DailyEngagementPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Daily Engagement Page</h1>

      {/* Daily Quiz Section */}
      <div className="mb-8">
        <DailyQuiz />
      </div>

      {/* Mock Trades Section */}
      <div className="mb-8">
        <MockTrades />
      </div>

      {/* Leaderboard Section - Replaced placeholder with the Leaderboard component */}
      <div className="mb-8"> {/* Adjusted mb as Leaderboard has its own p-6 */}
        <Leaderboard />
      </div>
    </div>
  );
};

export default DailyEngagementPage;
