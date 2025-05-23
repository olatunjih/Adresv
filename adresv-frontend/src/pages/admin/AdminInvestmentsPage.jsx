import React, { useState } from 'react';

const mockPlans = [
  { id: 1, planType: 'Weekly Starter', roi: '2.5%', status: 'Active' },
  { id: 2, planType: 'Monthly Growth', roi: '10%', status: 'Active' },
  { id: 3, planType: 'Legacy Plan', roi: '7%', status: 'Inactive' }
];

const AdminInvestmentsPage = () => {
  // State for form inputs
  const [planName, setPlanName] = useState('');
  const [roiPercentage, setRoiPercentage] = useState('');
  const [duration, setDuration] = useState('');
  const [penaltyRules, setPenaltyRules] = useState('');

  const handlePreviewPlan = () => {
    console.log('Preview Investment Plan:', {
      name: planName,
      roi: roiPercentage,
      duration: duration,
      penalties: penaltyRules,
    });
    alert('Plan details logged to console for preview.');
  };

  const handleSavePlan = () => {
    console.log('Save Investment Plan:', {
      name: planName,
      roi: roiPercentage,
      duration: duration,
      penalties: penaltyRules,
    });
    // In a real app, this would send data to a backend and likely update the mockPlans list
    alert('Plan details logged to console for saving. This would typically save to a backend.');
    // Optionally clear form fields
    setPlanName('');
    setRoiPercentage('');
    setDuration('');
    setPenaltyRules('');
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
    input: { width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' },
    textarea: { width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px', minHeight: '80px' },
    button: { padding: '10px 15px', marginRight: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white' },
    filterButton: { padding: '8px 12px', marginRight: '5px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#f8f9fa' },
    placeholderText: { color: '#777', fontStyle: 'italic', margin: '10px 0' }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Admin Investments Management</h1>

      {/* Plan Directory Section */}
      <section style={styles.section}>
        <h2 style={styles.subTitle}>Investment Plan Directory</h2>
        <div style={{ marginBottom: '15px' }}>
          <button style={styles.filterButton}>View Active</button>
          <button style={styles.filterButton}>View Inactive</button>
          <button style={styles.filterButton}>View Archived</button>
          {/* Simple text input filter placeholder */}
          <input type="text" placeholder="Filter by Plan Type..." style={{ ...styles.input, width: 'auto', marginLeft: '10px', display: 'inline-block' }} />
        </div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Plan Type</th>
              <th style={styles.th}>Current ROI</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {mockPlans.map(plan => (
              <tr key={plan.id}>
                <td style={styles.td}>{plan.planType}</td>
                <td style={styles.td}>{plan.roi}</td>
                <td style={styles.td}>{plan.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Plan Creation/Edit Section */}
      <section style={styles.section}>
        <h2 style={styles.subTitle}>Create/Edit Investment Plan</h2>
        <form onSubmit={e => e.preventDefault()}>
          <div>
            <label htmlFor="planName">Plan Name:</label>
            <input type="text" id="planName" value={planName} onChange={e => setPlanName(e.target.value)} style={styles.input} />
          </div>
          <div>
            <label htmlFor="roiPercentage">ROI Percentage:</label>
            <input type="text" id="roiPercentage" value={roiPercentage} onChange={e => setRoiPercentage(e.target.value)} style={styles.input} />
          </div>
          <div>
            <label htmlFor="duration">Duration (e.g., "30 days", "12 weeks"):</label>
            <input type="text" id="duration" value={duration} onChange={e => setDuration(e.target.value)} style={styles.input} />
          </div>
          <div>
            <label htmlFor="penaltyRules">Penalty Rules (e.g., "Missed ROI deduction: 2% per day"):</label>
            <textarea id="penaltyRules" value={penaltyRules} onChange={e => setPenaltyRules(e.target.value)} style={styles.textarea} />
          </div>
          <button type="button" onClick={handlePreviewPlan} style={styles.button}>
            Preview Plan
          </button>
          <button type="button" onClick={handleSavePlan} style={{ ...styles.button, backgroundColor: '#28a745' }}>
            Save Plan
          </button>
        </form>
      </section>

      {/* Plan Performance Analytics Placeholder Section */}
      <section style={styles.section}>
        <h2 style={styles.subTitle}>Plan Performance Analytics</h2>
        <p style={styles.placeholderText}>[Graph: User participation over time will be shown here]</p>
        <p style={styles.placeholderText}>[Graph: ROI distribution trends will be shown here]</p>
      </section>
    </div>
  );
};

export default AdminInvestmentsPage;
