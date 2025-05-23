import React, { useState } from 'react';

const UserDirectoryTable = () => {
  const initialMockUsers = [
    { id: "usr1", name: "John Doe", email: "john.doe@example.com", phone: "555-1234", role: "Investor", status: "Active", wallets: "ERC20: 0xabc... / TRC20: Tdef..." },
    { id: "usr2", name: "Jane Smith", email: "jane.smith@example.com", phone: "555-5678", role: "Trader", status: "Active", wallets: "ERC20: 0x123... / TRC20: T456..." },
    { id: "usr3", name: "Mike Johnson", email: "mike.j@example.com", phone: "555-8765", role: "VIP", status: "Banned", wallets: "ERC20: 0x789..." },
    { id: "usr4", name: "Sarah Williams", email: "sarah.w@example.com", phone: "555-4321", role: "New User", status: "Active", wallets: "TRC20: Txyz..." },
    { id: "usr5", name: "David Brown", email: "david.b@example.com", phone: "555-9876", role: "Investor", status: "Active", wallets: "ERC20: 0x456..." },
  ];

  const [users, setUsers] = useState(initialMockUsers);

  const mockRoles = ["All", "Investor", "Trader", "New User", "VIP"];
  const mockStatuses = ["All", "Active", "Banned"];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Banned':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleResetPassword = (userId, userName) => {
    console.log(`Attempting to reset password for user ${userId}: ${userName}`);
    alert(`Password reset initiated for ${userName} (backend integration needed).`);
  };

  const handleToggleBanStatus = (userId, userName, currentStatus) => {
    if (currentStatus === "Active") {
      console.log(`Banning user ${userId}: ${userName}`);
      alert(`Reason for ban would be requested here for user ${userName}. For now, proceeding with mock ban.`);
      setUsers(users.map(user => user.id === userId ? { ...user, status: "Banned" } : user));
    } else {
      console.log(`Unbanning user ${userId}: ${userName}`);
      alert(`Unbanning user ${userName}.`);
      setUsers(users.map(user => user.id === userId ? { ...user, status: "Active" } : user));
    }
  };

  const handleViewActivityLogs = (userId, userName) => {
    console.log(`Viewing activity logs for user ${userId}: ${userName}`);
    alert(`Displaying activity logs for ${userName} (new view or modal needed).`);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Platform User Directory</h2>

      {/* Filters Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
        <div>
          <label htmlFor="search-users" className="sr-only">Search by Name/Email</label>
          <input
            type="text"
            id="search-users"
            placeholder="Search by Name/Email..."
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="filter-role" className="sr-only">Filter by Role</label>
          <select
            id="filter-role"
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {mockRoles.map(role => <option key={role} value={role}>{role}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="filter-status" className="sr-only">Filter by Status</label>
          <select
            id="filter-status"
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {mockStatuses.map(status => <option key={status} value={status}>{status}</option>)}
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Linked Wallets</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-xs truncate" title={user.wallets}>
                  {user.wallets}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button 
                    onClick={() => handleResetPassword(user.id, user.name)}
                    className="text-indigo-600 hover:text-indigo-800 text-xs font-medium transition-colors duration-150"
                  >
                    Reset Pwd
                  </button>
                  <button 
                    onClick={() => handleToggleBanStatus(user.id, user.name, user.status)}
                    className={`text-xs font-medium transition-colors duration-150 ${
                      user.status === "Active" 
                        ? "text-red-600 hover:text-red-800" 
                        : "text-yellow-600 hover:text-yellow-800"
                    }`}
                  >
                    {user.status === "Active" ? "Ban" : "Unban"}
                  </button>
                  <button 
                    onClick={() => handleViewActivityLogs(user.id, user.name)}
                    className="text-blue-600 hover:text-blue-800 text-xs font-medium transition-colors duration-150"
                  >
                    Logs
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 && <p className="text-center text-gray-500 py-4">No users found.</p>}
      </div>
    </section>
  );
};

export default UserDirectoryTable;
