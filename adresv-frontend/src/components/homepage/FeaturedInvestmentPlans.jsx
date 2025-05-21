import React from 'react';

const FeaturedInvestmentPlans = () => {
  // Placeholder data
  const plans = [
    { name: 'Silver Plan - 5% ROI Weekly', duration: 'Weekly', participation: 'Daily tasks' },
    { name: 'Gold Plan - 22% ROI Monthly', duration: 'Monthly', participation: 'Quizzes & Trades' },
  ];

  return (
    <section className="py-12 px-4">
      <h3 className="text-2xl font-bold text-center mb-8">Featured Investment Plans</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
            <p className="mb-1">Duration: {plan.duration}</p>
            <p className="mb-4">Participation: {plan.participation}</p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Join Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedInvestmentPlans;
