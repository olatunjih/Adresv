import React from 'react';

const BillingAdminDashboardView = () => {
  const financialMetrics = [
    { label: "Total Revenue (MTD)", value: "$12,345 (Mock)", trend: "+5.2%" },
    { label: "Pending Invoices", value: "15 (Mock)", trend: "" },
    { label: "Average Subscription Value", value: "$49.99 (Mock)", trend: "" },
    { label: "Failed Payments", value: "3 (Mock)", trend: "+1" },
  ];

  const mockSubscriptions = [
    { id: "SUB-001", userName: "UserAlpha", plan: "Premium", status: "Active", nextBilling: "2024-04-01" },
    { id: "SUB-002", userName: "UserBeta", plan: "Basic", status: "Cancelled", nextBilling: "N/A" },
    { id: "SUB-003", userName: "UserGamma", plan: "Premium", status: "Past Due", nextBilling: "2024-03-15" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Billing Administration Dashboard</h3>
        <p className="text-gray-600">
          Manage subscriptions, view financial reports, and handle invoicing.
        </p>
      </div>

      {/* Financial Overview */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Financial Overview</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {financialMetrics.map(metric => (
            <div key={metric.label} className="bg-gray-50 p-4 rounded-md shadow-sm">
              <p className="text-sm font-medium text-gray-500">{metric.label}:</p>
              <p className="text-xl font-bold text-gray-800 mt-1">{metric.value}</p>
              {metric.trend && <p className={`text-xs ${metric.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{metric.trend}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Management */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Recent Subscriptions</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Billing</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockSubscriptions.map(sub => (
                <tr key={sub.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{sub.userName} ({sub.id})</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sub.plan}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                      ${sub.status === 'Active' ? 'bg-green-100 text-green-800' : 
                                        sub.status === 'Cancelled' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {sub.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sub.nextBilling}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-3 italic">(Full subscription management tools would be here.)</p>
      </section>
    </div>
  );
};

export default BillingAdminDashboardView;
