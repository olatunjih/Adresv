import React from 'react';

const TransactionHistory = () => {
  // Mock transaction data
  const transactions = [
    { id: 1, date: '2024-03-15', amount: '100 USDT', network: 'ERC20', status: 'Completed' },
    { id: 2, date: '2024-03-14', amount: '50 USDT', network: 'TRC20', status: 'Pending' },
    { id: 3, date: '2024-03-13', amount: '200 USDT', network: 'BEP20', status: 'Confirmed' },
    { id: 4, date: '2024-03-12', amount: '-75 USDT', network: 'ERC20', status: 'Completed' }, // Example of a withdrawal
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Confirmed':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">Transaction History</h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
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
            {transactions.map((tx, index) => (
              <tr key={tx.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tx.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.network}</td>
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
