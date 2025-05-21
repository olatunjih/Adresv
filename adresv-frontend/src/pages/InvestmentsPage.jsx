import React from 'react';
import ActiveInvestments from '../components/investments/ActiveInvestments';
import MissedParticipation from '../components/investments/MissedParticipation';
import InvestmentAnalytics from '../components/investments/InvestmentAnalytics';
import ExploreNewPlans from '../components/investments/ExploreNewPlans'; // Import the new component

const InvestmentsPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">My Investments</h2>
      
      <ActiveInvestments />
      <MissedParticipation />
      <InvestmentAnalytics />
      <ExploreNewPlans />
    </div>
  );
};

export default InvestmentsPage;
