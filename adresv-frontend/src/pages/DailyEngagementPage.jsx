import React from 'react';
import DailyQuiz from '../components/dailyengagement/DailyQuiz';
import MockTrades from '../components/dailyengagement/MockTrades';
import Leaderboard from '../components/dailyengagement/Leaderboard'; // Import the Leaderboard component

const DailyEngagementPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Daily Engagement Tasks</h1>
      
      <div className="container mx-auto space-y-8"> {/* Added space-y-8 for spacing between sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          <div className="w-full"> {/* Container for the DailyQuiz component */}
            <DailyQuiz />
          </div>
          
          <div className="w-full"> {/* Container for the MockTrades component */}
            <MockTrades />
          </div>

        </div>
        
        <div className="w-full"> {/* Container for the Leaderboard component */}
          <Leaderboard />
        </div>
      </div>
      
      {/* Other daily engagement components can be added here later */}
    </div>
  );
};

export default DailyEngagementPage;
