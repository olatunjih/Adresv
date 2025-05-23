import React, { useState } from 'react';

const mockNotifications = [
  { id: 1, title: 'System Maintenance Alert', timestamp: '2024-07-20 10:00 AM', status: 'Delivered', readRate: '90%' },
  { id: 2, title: 'New Investment Plan Available', timestamp: '2024-07-19 03:00 PM', status: 'Delivered', readRate: '75%' },
  { id: 3, title: 'Daily ROI Update', timestamp: '2024-07-18 09:00 AM', status: 'Failed', readRate: 'N/A' }
];

const mockDrafts = ['Upcoming Promotion', 'Holiday Greetings'];

const AdminNotificationsPage = () => {
  const [notificationTitle, setNotificationTitle] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [deliverySchedule, setDeliverySchedule] = useState('sendNow'); // 'sendNow' or 'scheduleLater'

  const handlePreview = () => {
    console.log('Preview Notification:', {
      title: notificationTitle,
      body: messageBody,
      audience: targetAudience,
      schedule: deliverySchedule,
    });
    alert('Notification details logged to console for preview.');
  };

  const handleSend = () => {
    console.log('Send Notification:', {
      title: notificationTitle,
      body: messageBody,
      audience: targetAudience,
      schedule: deliverySchedule,
    });
    // Here you would typically add logic to send the notification
    // and then add it to the mockNotifications list or a real backend.
    alert('Send action logged to console. In a real app, this would send the notification.');
    // Clear form after sending (optional)
    setNotificationTitle('');
    setMessageBody('');
    setTargetAudience('');
    setDeliverySchedule('sendNow');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Notifications Management</h1>

      {/* Compose Notifications Section */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #eee' }}>
        <h2>Compose Notification</h2>
        <form onSubmit={e => e.preventDefault()}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="notificationTitle" style={{ display: 'block', marginBottom: '5px' }}>Title (Max 100 chars):</label>
            <input
              type="text"
              id="notificationTitle"
              value={notificationTitle}
              onChange={e => setNotificationTitle(e.target.value)}
              maxLength="100"
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="messageBody" style={{ display: 'block', marginBottom: '5px' }}>Message Body:</label>
            <textarea
              id="messageBody"
              value={messageBody}
              onChange={e => setMessageBody(e.target.value)}
              rows="5"
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="targetAudience" style={{ display: 'block', marginBottom: '5px' }}>Target Audience:</label>
            <input
              type="text"
              id="targetAudience"
              value={targetAudience}
              onChange={e => setTargetAudience(e.target.value)}
              placeholder="e.g., All users, Investors, user123"
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Delivery Schedule:</label>
            <div>
              <input
                type="radio"
                id="sendNow"
                name="deliverySchedule"
                value="sendNow"
                checked={deliverySchedule === 'sendNow'}
                onChange={e => setDeliverySchedule(e.target.value)}
                style={{ marginRight: '5px' }}
              />
              <label htmlFor="sendNow" style={{ marginRight: '15px' }}>Send Now</label>
              <input
                type="radio"
                id="scheduleLater"
                name="deliverySchedule"
                value="scheduleLater"
                checked={deliverySchedule === 'scheduleLater'}
                onChange={e => setDeliverySchedule(e.target.value)}
                style={{ marginRight: '5px' }}
              />
              <label htmlFor="scheduleLater">Schedule for Later</label>
              {/* Basic text input for schedule time if "Schedule for Later" is selected */}
              {deliverySchedule === 'scheduleLater' && (
                <input 
                  type="text" 
                  placeholder="Enter date/time" 
                  style={{ marginLeft: '10px', padding: '8px' }} 
                />
              )}
            </div>
          </div>
          <button type="button" onClick={handlePreview} style={{ marginRight: '10px', padding: '10px 15px' }}>
            Preview Notification
          </button>
          <button type="button" onClick={handleSend} style={{ padding: '10px 15px' }}>
            Send Notification
          </button>
        </form>
      </section>

      {/* Notification History Section */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #eee' }}>
        <h2>Notification History</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Title</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Timestamp</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Delivery Status</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Read Rate</th>
            </tr>
          </thead>
          <tbody>
            {mockNotifications.map(notification => (
              <tr key={notification.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{notification.title}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{notification.timestamp}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{notification.status}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{notification.readRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Drafts Section */}
      <section style={{ padding: '15px', border: '1px solid #eee' }}>
        <h2>Drafts</h2>
        {mockDrafts.length > 0 ? (
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            {mockDrafts.map((draftTitle, index) => (
              <li key={index}>{draftTitle}</li>
            ))}
          </ul>
        ) : (
          <p>Drafts functionality will be here.</p>
        )}
      </section>

      {/* Basic styling for sections for visibility */}
      <style jsx>{`
        h1, h2 {
          color: #333;
        }
        label {
          font-weight: bold;
        }
        // Add any other minimal global styles if necessary, or rely on Tailwind if configured
      `}</style>
    </div>
  );
};

export default AdminNotificationsPage;
