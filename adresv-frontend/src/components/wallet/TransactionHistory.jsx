import React from 'react';

const TransactionHistory = () => {
  // Mock transaction data
  const transactions = [
    { id: 1, date: '2024-03-15', amount: '100 USDT', network: 'ERC20', status: 'Completed', type: 'deposit' },
    { id: 2, date: '2024-03-14', amount: '50 USDT', network: 'TRC20', status: 'Pending', type: 'deposit' },
    { id: 3, date: '2024-03-13', amount: '200 USDT', network: 'BEP20', status: 'Confirmed', type: 'deposit' },
    { id: 4, date: '2024-03-12', amount: '-75 USDT', network: 'ERC20', status: 'Completed', type: 'withdrawal' },
  ];

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'confirmed':
        return 'text-blue-600 bg-blue-100';
      case 'failed':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getAmountClass = (amount) => {
    return amount.startsWith('-') ? 'text-red-600' : 'text-green-600';
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Transaction History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Network
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{tx.date}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${getAmountClass(tx.amount)}`}>
                  {tx.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{tx.network}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(tx.status)}`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
