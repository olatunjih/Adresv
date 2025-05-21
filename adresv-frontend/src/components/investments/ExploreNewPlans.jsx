import React from 'react';

const ExploreNewPlans = () => {
  // Placeholder data for example plans
  const examplePlans = [
    { id: 1, name: 'Starter Weekly', type: 'Weekly', roi: '3.5%', duration: '7 Days', minInvest: '$100', requirements: 'Daily quiz participation' },
    { id: 2, name: 'Advanced Monthly', type: 'Monthly', roi: '15%', duration: '30 Days', minInvest: '$1000', requirements: 'Quiz & Mock Trade' },
    { id: 3, name: 'Pro Quarterly', type: 'Quarterly', roi: '50%', duration: '90 Days', minInvest: '$5000', requirements: 'Full participation' },
  ];

  return (
    <section className="p-6 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold text-gray-700 mb-6">Explore New Plans</h3>
      
      {/* Placeholder Filters */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg flex flex-col sm:flex-row gap-4 items-center">
        <span className="text-sm font-medium text-gray-700">Filter by:</span>
        <select className="p-2 border border-gray-300 rounded-md text-sm w-full sm:w-auto">
          <option value="">All Plan Types</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </select>
        <select className="p-2 border border-gray-300 rounded-md text-sm w-full sm:w-auto">
          <option value="">Any ROI Rate</option>
          <option value="low">&lt; 5%</option>
          <option value="medium">5-10%</option>
          <option value="high">&gt; 10%</option>
        </select>
        <select className="p-2 border border-gray-300 rounded-md text-sm w-full sm:w-auto">
          <option value="">Any Duration</option>
          <option value="short">Short (1-30 Days)</option>
          <option value="medium">Medium (31-90 Days)</option>
          <option value="long">Long (&gt;90 Days)</option>
        </select>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-600 w-full sm:w-auto">Apply Filters</button>
      </div>

      {/* Example Plans Display */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examplePlans.map(plan => (
          <div key={plan.id} className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">{plan.name}</h4>
            <p className="text-sm text-gray-600"><span className="font-medium">Type:</span> {plan.type}</p>
            <p className="text-sm text-gray-600"><span className="font-medium">ROI:</span> <span className="font-bold text-green-600">{plan.roi}</span></p>
            <p className="text-sm text-gray-600"><span className="font-medium">Duration:</span> {plan.duration}</p>
            <p className="text-sm text-gray-600"><span className="font-medium">Min. Invest:</span> {plan.minInvest}</p>
            <p className="text-sm text-gray-500 mt-1"><span className="font-medium">Requirements:</span> {plan.requirements}</p>
            <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md text-sm hover:bg-green-600">
              View Details & Invest
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreNewPlans;
