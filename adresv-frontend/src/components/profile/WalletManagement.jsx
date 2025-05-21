import React from 'react';

const WalletManagement = () => {
  // Placeholder data
  const wallets = [
    { id: 1, network: 'ERC20 (Ethereum)', address: '0x123...abc', status: 'Verified', name: 'Main Ethereum Wallet' },
    { id: 2, network: 'TRC20 (TRON)', address: 'TXYZ...789', status: 'Verified', name: 'TRON Wallet 1' },
    { id: 3, network: 'ERC20 (Ethereum)', address: '0x987...def', status: 'Unverified', name: 'Secondary ETH' },
  ];

  return (
    <section className="p-6 bg-white shadow rounded-lg mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Wallet Management</h3>
        {/* Placeholder for 'Add New Wallet' button - non-functional for now */}
        <button 
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg text-sm"
          onClick={() => alert('Add New Wallet clicked - functionality to be added')}
        >
          Add New Wallet
        </button>
      </div>
      
      {wallets.length > 0 ? (
        <div className="space-y-4">
          {wallets.map(wallet => (
            <div key={wallet.id} className="p-4 border border-gray-200 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <p className="font-semibold text-gray-800">{wallet.name} <span className="text-xs text-gray-500">({wallet.network})</span></p>
                <p className="text-sm text-gray-600 break-all">{wallet.address}</p>
                <span 
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    wallet.status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {wallet.status}
                </span>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-4 flex-shrink-0">
                {/* Placeholders for Edit/Unlink buttons - non-functional */}
                <button className="text-blue-500 hover:underline text-sm mr-3" onClick={() => alert('Edit Wallet clicked')}>Edit</button>
                <button className="text-red-500 hover:underline text-sm" onClick={() => alert('Unlink Wallet clicked')}>Unlink</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No wallets linked yet.</p>
      )}
    </section>
  );
};

export default WalletManagement;
