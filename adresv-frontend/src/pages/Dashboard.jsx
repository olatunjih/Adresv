import React from 'react';
import InvestmentOverview from '../components/dashboard/InvestmentOverview';
import DailyEngagement from '../components/dashboard/DailyEngagement';
import NotificationsSummary from '../components/dashboard/NotificationsSummary';
import QuickAccess from '../components/dashboard/QuickAccess'; // Import the new component
import GraphicalSummary from '../components/dashboard/GraphicalSummary';
import UserSecurity from '../components/dashboard/UserSecurity';

const Dashboard = () => {
  const userName = "Abdulazeez";
  const lastLogin = "2024-07-27 10:30 AM";

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      {/* Welcome Section */}
      <section className="mb-8 p-6 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome back, <span className="font-bold text-blue-600">{userName}</span>!
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Last login: {lastLogin}
        </p>
      </section>

      {/* Investment Overview Section */}
      <InvestmentOverview />

      {/* Daily Engagement Section */}
      <DailyEngagement /> 

      {/* Notifications Summary Section */}
      <NotificationsSummary />

      {/* Quick Access Section */}
      <QuickAccess />

      {/* Graphical Summary Section */}
      <GraphicalSummary />

      {/* User Security Section */}
      <UserSecurity />
    </div>
  );
};

export default Dashboard;
