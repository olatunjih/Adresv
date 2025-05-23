import React, { useState } from 'react';

const mockTransactions = [
  { id: 't1', userId: 'user001', amount: '100 USDT', network: 'ERC20', transactionId: '0xabc123...', status: 'Completed', date: '2024-07-20' },
  { id: 't2', userId: 'user002', amount: '500 USDT', network: 'TRC20', transactionId: 'TXxyz789...', status: 'Pending', date: '2024-07-21' },
  { id: 't3', userId: 'user003', amount: '50 USDT', network: 'ERC20', transactionId: '0xdef456...', status: 'Failed', date: '2024-07-19' }
];

const mockDisputes = [
  { id: 'd1', transactionId: '0xdef456...', reason: 'User claims funds not reflected despite successful transaction.', adminNotes: '' },
  { id: 'd2', transactionId: 'TXuvw456...', reason: 'Incorrect amount deposited by user.', adminNotes: 'User contacted, awaiting clarification.' }
];

const AdminWalletTransactionsPage = () => {
  // State for admin notes in disputes
  const [disputeNotes, setDisputeNotes] = useState({}); // Keyed by dispute ID

  const handleNoteChange = (disputeId, note) => {
    setDisputeNotes(prevNotes => ({
      ...prevNotes,
      [disputeId]: note,
    }));
  };

  const handleSaveNote = (disputeId) => {
    const note = disputeNotes[disputeId] || ''; // Get the note from state or default to empty
    const dispute = mockDisputes.find(d => d.id === disputeId); // Find the dispute to include its details
    console.log(`Saving note for Dispute ID ${disputeId} (Transaction ID: ${dispute?.transactionId}): "${note}"`);
    alert(`Note for Dispute ID ${disputeId} saved (logged to console).`);
    // In a real app, you'd update the mockDisputes or send to a backend.
    // For this example, we're just logging.
  };

  const handleApproveDispute = (disputeId) => {
    const dispute = mockDisputes.find(d => d.id === disputeId);
    console.log(`Dispute Approved for Transaction ID: ${dispute?.transactionId}`);
    alert(`Dispute Approved for Transaction ID: ${dispute?.transactionId} (logged to console).`);
  };

  const handleRejectDispute = (disputeId) => {
    const dispute = mockDisputes.find(d => d.id === disputeId);
    console.log(`Dispute Rejected for Transaction ID: ${dispute?.transactionId}`);
    alert(`Dispute Rejected for Transaction ID: ${dispute?.transactionId} (logged to console).`);
  };

  // Basic inline styles for clarity
  const styles = {
    page: { padding: '20px', fontFamily: 'Arial, sans-serif' },
    section: { marginBottom: '30px', padding: '15px', border: '1px solid #eee' },
    title: { color: '#333', marginBottom: '20px' },
    subTitle: { color: '#555', marginBottom: '15px' },
    table: { width: '100%', borderCollapse: 'collapse', marginTop: '10px' },
    th: { border: '1px solid #ddd', padding: '10px', textAlign: 'left', backgroundColor: '#f2f2f2' },
    td: { border: '1px solid #ddd', padding: '10px', textAlign: 'left' },
    filterSection: { display: 'flex', gap: '10px', marginBottom: '15px', alignItems: 'center' },
    input: { padding: '8px', border: '1px solid #ccc', borderRadius: '4px' },
    select: { padding: '8px', border: '1px solid #ccc', borderRadius: '4px' },
    button: { padding: '8px 12px', marginRight: '5px', border: 'none', borderRadius: '4px', cursor: 'pointer' },
    approveButton: { backgroundColor: '#28a745', color: 'white' },
    rejectButton: { backgroundColor: '#dc3545', color: 'white' },
    saveNoteButton: { backgroundColor: '#007bff', color: 'white', marginTop: '5px' },
    textarea: { width: 'calc(100% - 10px)', padding: '5px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '40px', marginTop: '5px' },
    placeholderText: { color: '#777', fontStyle: 'italic', margin: '10px 0' }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Admin Wallet & Transactions Management</h1>

      {/* Transaction Overview Section */}
      <section style={styles.section}>
        <h2 style={styles.subTitle}>Transaction Overview</h2>
        <div style={styles.filterSection}>
          <input type="text" placeholder="Date Range (e.g., YYYY-MM-DD - YYYY-MM-DD)" style={styles.input} />
          <select style={styles.select} defaultValue="">
            <option value="" disabled>Network</option>
            <option value="All">All</option>
            <option value="ERC20">ERC20</option>
            <option value="TRC20">TRC20</option>
          </select>
          <select style={styles.select} defaultValue="">
            <option value="" disabled>Status</option>
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Completed">Completed</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>User ID</th>
              <th style={styles.th}>Amount</th>
              <th style={styles.th}>Network</th>
              <th style={styles.th}>Transaction ID</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Date</th>
            </tr>
          </thead>
          <tbody>
            {mockTransactions.map(tx => (
              <tr key={tx.id}>
                <td style={styles.td}>{tx.userId}</td>
                <td style={styles.td}>{tx.amount}</td>
                <td style={styles.td}>{tx.network}</td>
                <td style={styles.td}>{tx.transactionId}</td>
                <td style={styles.td}>{tx.status}</td>
                <td style={styles.td}>{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Dispute Management Section */}
      <section style={styles.section}>
        <h2 style={styles.subTitle}>Dispute Management</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Transaction ID</th>
              <th style={styles.th}>User Reason</th>
              <th style={styles.th}>Admin Notes</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockDisputes.map(dispute => (
              <tr key={dispute.id}>
                <td style={styles.td}>{dispute.transactionId}</td>
                <td style={styles.td}>{dispute.reason}</td>
                <td style={styles.td}>
                  <textarea
                    style={styles.textarea}
                    placeholder="Enter notes..."
                    defaultValue={dispute.adminNotes} // Use defaultValue for initial text
                    onChange={e => handleNoteChange(dispute.id, e.target.value)}
                  />
                   <button onClick={() => handleSaveNote(dispute.id)} style={{...styles.button, ...styles.saveNoteButton}}>
                    Save Notes
                  </button>
                </td>
                <td style={styles.td}>
                  <button onClick={() => handleApproveDispute(dispute.id)} style={{...styles.button, ...styles.approveButton}}>
                    Approve Dispute
                  </button>
                  <button onClick={() => handleRejectDispute(dispute.id)} style={{...styles.button, ...styles.rejectButton, marginLeft: '5px'}}>
                    Reject Dispute
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Analytics Section Placeholder */}
      <section style={styles.section}>
        <h2 style={styles.subTitle}>Analytics</h2>
        <p style={styles.placeholderText}>[Graph: Total deposits and withdrawals over time]</p>
        <p style={styles.placeholderText}>[Graph: Percentage of failed vs. successful transactions]</p>
        <p style={styles.placeholderText}>[Graph: Average resolution time for disputes]</p>
      </section>
    </div>
  );
};

export default AdminWalletTransactionsPage;
