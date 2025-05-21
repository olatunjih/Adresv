import React from 'react';
import { Link } from 'react-router-dom';

const InvestmentOverview = () => {
  // Placeholder data
  const overviewData = {
    totalActiveInvestments: '$12,500.00',
    roiEarned: '$1,250.00',
    upcomingPayout: 'August 15, 2024',
  };

  return (
    <section className="p-6 bg-white shadow rounded-lg mb-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Investment Overview</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div className="p-4 bg-blue-100 rounded-lg shadow">
          <h4 className="text-sm font-medium text-blue-700">Total Active Investments</h4>
          <p className="text-2xl font-bold text-blue-900">{overviewData.totalActiveInvestments}</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow">
          <h4 className="text-sm font-medium text-green-700">ROI Earned So Far</h4>
          <p className="text-2xl font-bold text-green-900">{overviewData.roiEarned}</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded-lg shadow">
          <h4 className="text-sm font-medium text-yellow-700">Upcoming Payout</h4>
          <p className="text-2xl font-bold text-yellow-900">{overviewData.upcomingPayout}</p>
        </div>
      </div>
      <div className="text-right">
        <Link 
          to="/investments" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:shadow-md transition duration-150 ease-in-out"
        >
          View All Investments
        </Link>
      </div>
    </section>
  );
};

export default InvestmentOverview;
