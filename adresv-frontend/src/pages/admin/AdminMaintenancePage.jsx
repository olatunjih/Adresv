import React, { useState } from 'react';

const AdminMaintenancePage = () => {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [maintenanceMessage, setMaintenanceMessage] = useState('');

  const handleToggleMaintenanceMode = () => {
    const newModeState = !maintenanceMode;
    setMaintenanceMode(newModeState);
    console.log(`Maintenance Mode Enabled: ${newModeState}`);
  };

  const handleSaveMessage = () => {
    console.log('Saving Maintenance Message:', maintenanceMessage);
    alert('Maintenance message saved (check console).');
  };

  // Basic inline styles for clarity
  const styles = {
    page: { padding: '20px', fontFamily: 'Arial, sans-serif' },
    section: { marginBottom: '30px', padding: '15px', border: '1px solid #eee', backgroundColor: '#f9f9f9' },
    title: { color: '#2c3e50', marginBottom: '30px', textAlign: 'center' },
    subTitle: { color: '#34495e', marginBottom: '15px', borderBottom: '2px solid #3498db', paddingBottom: '5px' },
    label: { display: 'block', marginBottom: '5px', fontWeight: 'bold' },
    textarea: { width: 'calc(100% - 16px)', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px', minHeight: '100px' },
    button: { 
      padding: '10px 15px', 
      border: 'none', 
      borderRadius: '4px', 
      cursor: 'pointer', 
      backgroundColor: '#3498db', 
      color: 'white',
      fontSize: '1em'
    },
    toggleContainer: { display: 'flex', alignItems: 'center', marginBottom: '15px' },
    toggleLabel: { marginLeft: '10px', fontSize: '1.1em' },
    secretUrlsDisplay: { 
      padding: '10px', 
      backgroundColor: '#ecf0f1', 
      border: '1px dashed #bdc3c7', 
      borderRadius: '4px', 
      color: '#2c3e50',
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap' // To respect newlines in placeholder
    },
    placeholderText: { color: '#7f8c8d', fontStyle: 'italic', margin: '10px 0', lineHeight: '1.6' }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Admin Maintenance Management</h1>

      {/* System Toggles Section */}
      <section style={styles.section}>
        <h2 style={styles.subTitle}>Maintenance Mode Control</h2>
        <div style={styles.toggleContainer}>
          <input
            type="checkbox"
            id="maintenanceToggle"
            checked={maintenanceMode}
            onChange={handleToggleMaintenanceMode}
            style={{ transform: 'scale(1.5)' }} // Make checkbox bigger
          />
          <label htmlFor="maintenanceToggle" style={styles.toggleLabel}>
            Enable Platform-Wide Maintenance Mode
          </label>
        </div>
        <div>
          <p style={styles.label}>Secret Login/Registration URLs for Admin Testing:</p>
          <div style={styles.secretUrlsDisplay}>
            e.g., /login?admin_bypass=TOKEN_HERE
            <br />
            /register?admin_bypass=TOKEN_HERE
          </div>
        </div>
      </section>

      {/* Custom Maintenance Messages Section */}
      <section style={styles.section}>
        <h2 style={styles.subTitle}>Custom Maintenance Message</h2>
        <label htmlFor="maintenanceMessage" style={styles.label}>
          Compose message for users during maintenance:
        </label>
        <textarea
          id="maintenanceMessage"
          value={maintenanceMessage}
          onChange={e => setMaintenanceMessage(e.target.value)}
          style={styles.textarea}
          placeholder="Enter maintenance message here..."
        />
        <button onClick={handleSaveMessage} style={styles.button}>
          Save Message
        </button>
      </section>

      {/* System Monitoring (Placeholder) Section */}
      <section style={styles.section}>
        <h2 style={styles.subTitle}>System Monitoring</h2>
        <p style={styles.placeholderText}>
          [Real-time system performance stats (e.g., server uptime, active sessions) will be displayed here]
        </p>
        <p style={styles.placeholderText}>
          [Alerts for critical issues detected during maintenance will be shown here]
        </p>
      </section>
    </div>
  );
};

export default AdminMaintenancePage;
