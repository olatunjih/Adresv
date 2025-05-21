import React from 'react';

const ActiveInvestments = () => {
  // Placeholder data
  const investments = [
    { id: 1, planType: 'Weekly Gold', roiEarned: '$250.00', status: 'Active', remainingDays: '3 days', nextPayout: '2024-08-01' },
    { id: 2, planType: 'Monthly Diamond', roiEarned: '$1200.00', status: 'Active', remainingDays: '15 days', nextPayout: '2024-08-15' },
    { id: 3, planType: 'Weekly Silver', roiEarned: '$50.00', status: 'Completed', remainingDays: '0 days', nextPayout: '2024-07-20' },
  ];

  return (
    <section className="p-6 bg-white shadow rounded-lg mb-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-6">Active Investments</h3>
      {investments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan Type</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI Earned</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remaining / Next Payout</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {investments.map(inv => (
                <tr key={inv.id}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{inv.planType}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-green-600">{inv.roiEarned}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      inv.status === 'Active' ? 'bg-green-100 text-green-800' : 
                      inv.status === 'Paused' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                    {inv.status === 'Active' || inv.status === 'Paused' ? `${inv.remainingDays} (Next: ${inv.nextPayout})` : `Paid on ${inv.nextPayout}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No active investments at the moment.</p>
      )}
    </section>
  );
};

export default ActiveInvestments;
