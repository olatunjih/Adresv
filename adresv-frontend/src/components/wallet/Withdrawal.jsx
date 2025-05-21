import React, { useState } from 'react';

const Withdrawal = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [network, setNetwork] = useState('');
  const [otp, setOtp] = useState('');

  const handleWalletAddressChange = (event) => {
    setWalletAddress(event.target.value);
  };

  const handleNetworkChange = (event) => {
    setNetwork(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSendOtp = () => {
    // Placeholder for sending OTP logic
    alert('OTP sending functionality to be implemented.');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle withdrawal submission logic here
    console.log('Wallet Address:', walletAddress);
    console.log('Network:', network);
    console.log('OTP:', otp);
    alert(`Submitting withdrawal request for ${walletAddress} on ${network} with OTP ${otp}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">Withdraw Funds</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">Wallet & Network:</h3>
          <div className="space-y-3">
            <label className="block">
              <span className="text-gray-700">Wallet Address:</span>
              <input
                type="text"
                value={walletAddress}
                onChange={handleWalletAddressChange}
                placeholder="Enter your wallet address"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Network:</span>
              <input
                type="text"
                value={network}
                onChange={handleNetworkChange}
                placeholder="e.g., ERC20, TRC20, BEP20"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">Withdrawal Details:</h3>
          <div className="bg-gray-50 p-3 rounded-md shadow-sm">
            <p className="text-sm text-gray-600"><span className="font-medium">Withdrawal Fee:</span> 0.5 USDT (Placeholder)</p>
            <p className="text-sm text-gray-600"><span className="font-medium">Estimated Processing Time:</span> 5-10 minutes (Placeholder)</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">Security Verification:</h3>
          <div className="flex items-end space-x-3">
            <label className="flex-grow">
              <span className="text-gray-700">OTP/2FA Code:</span>
              <input
                type="text"
                value={otp}
                onChange={handleOtpChange}
                placeholder="Enter OTP"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </label>
            <button 
              type="button" 
              onClick={handleSendOtp}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-150 ease-in-out"
            >
              Send OTP
            </button>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
        >
          Submit Withdrawal Request
        </button>
      </form>
    </div>
  );
};

export default Withdrawal;
