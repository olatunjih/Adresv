import React, { useState } from 'react';

const Deposit = () => {
  const [depositType, setDepositType] = useState('USDT ERC20');
  const [amount, setAmount] = useState('');

  const handleDepositTypeChange = (event) => {
    setDepositType(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle deposit submission logic here
    console.log('Deposit Type:', depositType);
    console.log('Amount:', amount);
    alert(`Submitting deposit of ${amount} ${depositType}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">Deposit Funds</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">Select Deposit Type:</h3>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <input
                type="radio"
                value="USDT ERC20"
                checked={depositType === 'USDT ERC20'}
                onChange={handleDepositTypeChange}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span>USDT ERC20</span>
            </label>
            <label className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <input
                type="radio"
                value="USDT TRC20"
                checked={depositType === 'USDT TRC20'}
                onChange={handleDepositTypeChange}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span>USDT TRC20</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">Wallet Address QR Code:</h3>
          <div className="w-40 h-40 border-2 border-dashed border-gray-400 bg-gray-50 flex justify-center items-center text-gray-500 rounded-md">
            QR Code Placeholder
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-600 mb-1">Confirm Deposited Amount:</h3>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <button 
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
        >
          Submit Deposit
        </button>
      </form>
    </div>
  );
};

export default Deposit;
