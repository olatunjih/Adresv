import React from 'react';

const PlatformMetrics = () => {
  const metrics = [
    { label: "Total Active Users", value: "1,234" },
    { label: "Total Investments Value", value: "$5,678,900" },
    { label: "Total Deposit Volume (24h)", value: "$12,345" },
    { label: "Total Withdrawal Volume (24h)", value: "$6,789" },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Platform Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">{metric.label}</h3>
            <p className="text-2xl font-bold text-gray-800">{metric.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformMetrics;
