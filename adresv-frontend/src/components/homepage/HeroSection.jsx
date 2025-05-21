import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white py-20 px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">Invest in your future with ease!</h2>
      <p className="text-lg mb-8">
        Total active investments: <span className="font-bold">$1,234,567</span> | 
        Total users: <span className="font-bold">10,000+</span> | 
        Daily ROI distributed: <span className="font-bold">$50,000+</span>
      </p>
      <div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg mr-4">
          Get Started
        </button>
        <button className="bg-transparent hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-6 rounded-lg border border-white">
          Login
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
