import React from 'react';

const LiveCryptoPrices = () => {
  // Placeholder data
  const cryptos = [
    { name: 'Bitcoin', price: '$40,000', change: '+1.5%' },
    { name: 'Ethereum', price: '$2,500', change: '-0.5%' },
    { name: 'USDT', price: '$1.00', change: '+0.0%' },
  ];

  return (
    <section className="py-12 bg-gray-100 px-4">
      <h3 className="text-2xl font-bold text-center mb-8">Live Cryptocurrency Prices</h3>
      <div className="flex justify-center space-x-4 overflow-x-auto">
        {cryptos.map((crypto) => (
          <div key={crypto.name} className="min-w-max bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold">{crypto.name}</h4>
            <p>{crypto.price} <span className={crypto.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>{crypto.change}</span></p>
            {/* Sparkline chart placeholder */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveCryptoPrices;
