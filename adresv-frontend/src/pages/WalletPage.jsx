import React from 'react';
import Deposit from '../components/wallet/Deposit';
import Withdrawal from '../components/wallet/Withdrawal';
import TransactionHistory from '../components/wallet/TransactionHistory';

const WalletPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold my-6 text-gray-800">Wallet</h1>

      <div className="mb-8">
        <Deposit />
      </div>

      <hr className="my-8 border-gray-300" />

      <div className="mb-8">
        <Withdrawal />
      </div>

      <hr className="my-8 border-gray-300" />

      <div>
        <TransactionHistory />
      </div>
    </div>
  );
};

export default WalletPage;
