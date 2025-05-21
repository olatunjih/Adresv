import React from 'react';
import Deposit from '../components/wallet/Deposit';
import Withdrawal from '../components/wallet/Withdrawal';
import TransactionHistory from '../components/wallet/TransactionHistory';

const WalletPage = () => {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Wallet Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <Deposit />
        </section>
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <Withdrawal />
        </section>
      </div>

      <section className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <TransactionHistory />
      </section>
      
    </div>
  );
};

export default WalletPage;
