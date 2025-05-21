import React from 'react';

const InvestmentAnalytics = () => {
  return (
    <section className="p-6 bg-white shadow rounded-lg mb-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-6">Investment Analytics</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-4 border border-dashed border-gray-300 rounded-lg text-center">
          <p className="text-gray-500 font-medium">ROI Trends Over Time</p>
          <div className="mt-2 text-sm text-gray-400">
            [Placeholder for ROI Trend Graph - e.g., Line Chart]
          </div>
          <div className="mt-2 h-32 bg-gray-100 flex items-center justify-center rounded">
            Graph Area
          </div>
        </div>
        <div className="p-4 border border-dashed border-gray-300 rounded-lg text-center">
          <p className="text-gray-500 font-medium">Comparisons Between Plans</p>
          <div className="mt-2 text-sm text-gray-400">
            [Placeholder for Plan Comparison Graph - e.g., Bar Chart]
          </div>
          <div className="mt-2 h-32 bg-gray-100 flex items-center justify-center rounded">
            Graph Area
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-6 text-center">
        Full interactive charts (e.g., using ApexCharts or Chart.js) will be implemented here.
      </p>
    </section>
  );
};

export default InvestmentAnalytics;
