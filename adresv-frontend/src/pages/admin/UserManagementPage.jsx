import React, { useState } from 'react';

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', role: 'Investor', status: 'Active', wallets: 'ERC20: 0x123..., TRC20: TABC...' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210', role: 'Trader', status: 'Banned', wallets: 'ERC20: 0x456..., TRC20: TDEF...' },
  { id: 3, name: 'Alice Brown', email: 'alice.brown@example.com', phone: '555-555-5555', role: 'Investor', status: 'Active', wallets: 'ERC20: 0x789..., TRC20: TGHI...' }
];

const UserManagementPage = () => {
  const [users, setUsers] = useState(mockUsers);
  const [banReason, setBanReason] = useState(''); // To store reason for banning

  const handlePasswordReset = (userId) => {
    const user = users.find(u => u.id === userId);
    console.log(`Password reset initiated for user ${user.name} (ID: ${userId})`);
    alert(`Password reset initiated for user ${user.name}`);
  };

  const handleToggleBanStatus = (userId) => {
    setUsers(prevUsers =>
      prevUsers.map(user => {
        if (user.id === userId) {
          const newStatus = user.status === 'Active' ? 'Banned' : 'Active';
          if (newStatus === 'Banned') {
            console.log(`Banned user ${user.name} (ID: ${userId}). Reason: ${banReason || 'Not specified'}`);
            alert(`Banned user ${user.name}. Reason: ${banReason || 'Not specified'}`);
          } else {
            console.log(`Unbanned user ${user.name} (ID: ${userId})`);
            alert(`Unbanned user ${user.name}`);
          }
          return { ...user, status: newStatus };
        }
        return user;
      })
    );
    setBanReason(''); // Clear reason after action
  };

  const handleViewActivityLogs = (userId) => {
    const user = users.find(u => u.id === userId);
    console.log(`View activity logs for user ${user.name} (ID: ${userId})`);
    alert(`View activity logs for user ${user.name}`);
  };

  // Basic styling for elements
  const styles = {
    page: { padding: '20px', fontFamily: 'Arial, sans-serif' },
    title: { color: '#333', marginBottom: '20px' },
    searchFilterSection: { marginBottom: '20px', padding: '15px', border: '1px solid #eee', display: 'flex', gap: '10px', alignItems: 'center' },
    input: { padding: '8px', marginRight: '10px', border: '1px solid #ccc', borderRadius: '4px' },
    select: { padding: '8px', marginRight: '10px', border: '1px solid #ccc', borderRadius: '4px' },
    table: { width: '100%', borderCollapse: 'collapse', marginTop: '10px' },
    th: { border: '1px solid #ddd', padding: '10px', textAlign: 'left', backgroundColor: '#f2f2f2', color: '#333' },
    td: { border: '1px solid #ddd', padding: '10px', textAlign: 'left' },
    actionButton: { padding: '5px 10px', marginRight: '5px', border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white' },
    banButton: { backgroundColor: '#dc3545' },
    unbanButton: { backgroundColor: '#28a745' },
    reasonInput: { marginLeft: '10px', padding: '5px', border: '1px solid #ccc', borderRadius: '4px', width: '150px' }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>User Management</h1>

      {/* Search and Filter Placeholders */}
      <section style={styles.searchFilterSection}>
        <input type="text" placeholder="Search by Name" style={styles.input} />
        <input type="text" placeholder="Filter by Registration Date (e.g., YYYY-MM-DD)" style={styles.input} />
        <select style={styles.select} defaultValue="">
          <option value="" disabled>Filter by Account Status</option>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Banned">Banned</option>
        </select>
      </section>

      {/* User Directory Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone Number</th>
            <th style={styles.th}>Role</th>
            <th style={styles.th}>Account Status</th>
            <th style={styles.th}>Linked Wallets</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.email}</td>
              <td style={styles.td}>{user.phone}</td>
              <td style={styles.td}>{user.role}</td>
              <td style={styles.td}>{user.status}</td>
              <td style={styles.td}>{user.wallets}</td>
              <td style={styles.td}>
                <button onClick={() => handlePasswordReset(user.id)} style={styles.actionButton}>
                  Reset Password
                </button>
                <button
                  onClick={() => handleToggleBanStatus(user.id)}
                  style={{ ...styles.actionButton, ...(user.status === 'Active' ? styles.banButton : styles.unbanButton) }}
                >
                  {user.status === 'Active' ? 'Ban' : 'Unban'}
                </button>
                {user.status === 'Active' && (
                  <input
                    type="text"
                    placeholder="Reason for ban"
                    value={banReason}
                    onChange={e => setBanReason(e.target.value)}
                    style={styles.reasonInput}
                  />
                )}
                <button onClick={() => handleViewActivityLogs(user.id)} style={{ ...styles.actionButton, backgroundColor: '#6c757d', marginTop: '5px' }}>
                  View Activity Logs
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagementPage;
