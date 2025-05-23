import React, { useState } from 'react';

const initialMockTickets = [
  { id: 'ticket001', userId: 'userXyz', category: 'Withdrawals', status: 'Open', dateSubmitted: '2024-07-22', assignedAdmin: '', notes: '' },
  { id: 'ticket002', userId: 'userAbc', category: 'Account Issues', status: 'In Progress', dateSubmitted: '2024-07-21', assignedAdmin: 'AdminBob', notes: 'Contacted user for more details.' },
  { id: 'ticket003', userId: 'user123', category: 'Deposits', status: 'Resolved', dateSubmitted: '2024-07-20', assignedAdmin: 'AdminAlice', notes: 'Deposit confirmed and credited.' }
];

const statusOptions = ['Open', 'In Progress', 'Resolved'];

const AdminSupportTicketsPage = () => {
  const [tickets, setTickets] = useState(initialMockTickets);
  const [adminAssignments, setAdminAssignments] = useState({}); // { ticketId: 'adminName' }
  const [ticketNotes, setTicketNotes] = useState({}); // { ticketId: 'notesText' }

  const handleAssignTicket = (ticketId) => {
    const adminName = adminAssignments[ticketId] || 'Unassigned';
    console.log(`Ticket ID ${ticketId} assigned to: ${adminName}`);
    alert(`Ticket ${ticketId} assigned to ${adminName}. (Logged to console)`);
    // Optionally, update the main tickets state if you want to persist assignedAdmin there
    setTickets(prevTickets => prevTickets.map(t => t.id === ticketId ? {...t, assignedAdmin: adminName} : t));
  };

  const handleSaveNotes = (ticketId) => {
    const notes = ticketNotes[ticketId] || '';
    console.log(`Notes for Ticket ID ${ticketId}: "${notes}"`);
    alert(`Notes for Ticket ${ticketId} saved. (Logged to console)`);
    setTickets(prevTickets => prevTickets.map(t => t.id === ticketId ? {...t, notes: notes} : t));
  };

  const handleChangeStatus = (ticketId, newStatus) => {
    console.log(`Status for Ticket ID ${ticketId} changed to: ${newStatus}`);
    alert(`Status for Ticket ${ticketId} changed to ${newStatus}. (Logged to console)`);
    setTickets(prevTickets =>
      prevTickets.map(ticket =>
        ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
      )
    );
  };

  const handleCloseTicket = (ticketId) => {
    console.log(`Closed ticket ${ticketId} and notified user.`);
    alert(`Closed ticket ${ticketId} and notified user. (Logged to console)`);
    // Optionally change status to Resolved if not already, or handle differently
    setTickets(prevTickets =>
      prevTickets.map(ticket =>
        ticket.id === ticketId ? { ...ticket, status: 'Resolved' } : ticket // Example: auto-set to Resolved
      )
    );
  };
  
  const handleViewDetails = (ticket) => {
    console.log(`Viewing details for ticket ${ticket.id}: ${JSON.stringify(ticket)}`);
    alert(`Viewing details for ticket ${ticket.id}:\nUser ID: ${ticket.userId}\nCategory: ${ticket.category}\nStatus: ${ticket.status}\nSubmitted: ${ticket.dateSubmitted}\nAssigned: ${ticket.assignedAdmin || 'N/A'}\nNotes: ${ticket.notes || 'N/A'}`);
  };

  const handleAssignmentInputChange = (ticketId, value) => {
    setAdminAssignments(prev => ({ ...prev, [ticketId]: value }));
  };

  const handleNotesInputChange = (ticketId, value) => {
    setTicketNotes(prev => ({ ...prev, [ticketId]: value }));
  };


  // Basic inline styles
  const styles = {
    page: { padding: '20px', fontFamily: 'Arial, sans-serif' },
    section: { marginBottom: '30px', padding: '15px', border: '1px solid #eee' },
    title: { color: '#333', marginBottom: '20px' },
    subTitle: { color: '#555', marginBottom: '15px' },
    table: { width: '100%', borderCollapse: 'collapse', marginTop: '10px' },
    th: { border: '1px solid #ddd', padding: '10px', textAlign: 'left', backgroundColor: '#f2f2f2' },
    td: { border: '1px solid #ddd', padding: '10px', textAlign: 'left', verticalAlign: 'top' }, // verticalAlign for multiline content
    input: { padding: '6px', marginRight: '5px', border: '1px solid #ccc', borderRadius: '4px', width: '120px' },
    textarea: { width: 'calc(100% - 12px)', padding: '6px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '40px', boxSizing: 'border-box' },
    button: { padding: '6px 10px', marginRight: '5px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9em' },
    actionCell: { minWidth: '250px' }, // Ensure enough space for actions
    actionGroup: { marginBottom: '8px', display: 'flex', alignItems: 'center' }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Admin Support Ticket Management</h1>

      {/* Support Tickets List Section */}
      <section style={styles.section}>
        <h2 style={styles.subTitle}>User Support Tickets</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Ticket ID</th>
              <th style={styles.th}>User ID</th>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Date Submitted</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(ticket => (
              <tr key={ticket.id} onClick={() => handleViewDetails(ticket)} style={{cursor: 'pointer'}}>
                <td style={styles.td}>{ticket.id}</td>
                <td style={styles.td}>{ticket.userId}</td>
                <td style={styles.td}>{ticket.category}</td>
                <td style={styles.td}>{ticket.status}</td>
                <td style={styles.td}>{ticket.dateSubmitted}</td>
                <td style={{...styles.td, ...styles.actionCell}} onClick={e => e.stopPropagation()}> {/* Stop propagation to prevent row click */}
                  {/* Assign Ticket */}
                  <div style={styles.actionGroup}>
                    <input 
                      type="text" 
                      placeholder="Assign to Admin" 
                      style={styles.input}
                      value={adminAssignments[ticket.id] || ticket.assignedAdmin || ''}
                      onChange={e => handleAssignmentInputChange(ticket.id, e.target.value)}
                    />
                    <button onClick={() => handleAssignTicket(ticket.id)} style={{...styles.button, backgroundColor: '#ffc107'}}>Assign</button>
                  </div>
                  {/* Add Response/Notes */}
                  <div style={styles.actionGroup}>
                    <textarea 
                      placeholder="Add notes..." 
                      style={styles.textarea}
                      value={ticketNotes[ticket.id] || ticket.notes || ''}
                      onChange={e => handleNotesInputChange(ticket.id, e.target.value)}
                    />
                  </div>
                   <button onClick={() => handleSaveNotes(ticket.id)} style={{...styles.button, backgroundColor: '#007bff', color: 'white', marginTop: '2px', marginBottom:'8px'}}>Save Notes</button>
                  {/* Change Status */}
                  <div style={styles.actionGroup}>
                    <select 
                      value={ticket.status} 
                      onChange={e => handleChangeStatus(ticket.id, e.target.value)}
                      style={{...styles.input, width: 'auto', padding: '6px'}}
                    >
                      {statusOptions.map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                  {/* Close Ticket */}
                  <button 
                    onClick={() => handleCloseTicket(ticket.id)} 
                    style={{...styles.button, backgroundColor: '#dc3545', color: 'white', marginTop: '5px'}}
                    disabled={ticket.status === 'Resolved'} // Example: disable if already resolved
                  >
                    Close Ticket & Notify
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminSupportTicketsPage;
