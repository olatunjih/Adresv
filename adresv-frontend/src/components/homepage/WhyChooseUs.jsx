import React from 'react';

const WhyChooseUs = () => {
  const benefits = [
    { title: 'Secure Transactions', icon: '🔒' },
    { title: 'High ROI', icon: '📈' },
    { title: '24/7 Customer Support', icon: '💬' },
    { title: 'Easy-to-Use Platform', icon: '💻' },
  ];

  return (
    <section className="py-12 bg-gray-100 px-4">
      <h3 className="text-2xl font-bold text-center mb-8">Why Choose Us?</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="bg-white p-6 rounded-lg shadow">
            <span className="text-4xl mb-2 inline-block">{benefit.icon}</span>
            <h4 className="text-lg font-semibold">{benefit.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
