import React, { useState } from 'react';

const mockQuizzes = [
  { id: 'q1', name: 'Crypto Basics', numQuestions: 5, accuracy: '75%' },
  { id: 'q2', name: 'Advanced Trading Terms', numQuestions: 10, accuracy: '60%' }
];

const mockTrades = [
  { id: 'mt1', name: 'BTC Long Practice', conditions: 'Entry: $60k, Exit: $62k', fee: '1 USDT' },
  { id: 'mt2', name: 'ETH Short Practice', conditions: 'Entry: $3k, Exit: $2.9k', fee: '0.5 USDT' }
];

const AdminEngagementActivitiesPage = () => {
  // Activity Control Panel State
  const [enableDailyQuiz, setEnableDailyQuiz] = useState(true);
  const [enableMockTrades, setEnableMockTrades] = useState(true);
  const [dailyQuizRoi, setDailyQuizRoi] = useState(0.1);
  const [mockTradesRoi, setMockTradesRoi] = useState(0.25);

  // Quiz Form State
  const [quizName, setQuizName] = useState('');
  const [quizQuestion, setQuizQuestion] = useState('');
  const [quizOptions, setQuizOptions] = useState(['', '', '', '']);
  const [quizCorrectAnswer, setQuizCorrectAnswer] = useState('');
  const [quizTimer, setQuizTimer] = useState(60);

  // Mock Trade Form State
  const [tradeName, setTradeName] = useState('');
  const [tradeEntryConditions, setTradeEntryConditions] = useState('');
  const [tradeExitConditions, setTradeExitConditions] = useState('');
  const [tradeFee, setTradeFee] = useState('');

  // Toggle handlers
  const handleToggleDailyQuiz = () => {
    setEnableDailyQuiz(!enableDailyQuiz);
    console.log('Enable Daily Quiz toggled to:', !enableDailyQuiz);
  };
  const handleToggleMockTrades = () => {
    setEnableMockTrades(!enableMockTrades);
    console.log('Enable Mock Trades toggled to:', !enableMockTrades);
  };

  // ROI input handlers
  const handleDailyQuizRoiChange = (e) => {
    const value = parseFloat(e.target.value);
    setDailyQuizRoi(value);
    console.log('Daily Quiz ROI Contribution set to:', value);
  };
  const handleMockTradesRoiChange = (e) => {
    const value = parseFloat(e.target.value);
    setMockTradesRoi(value);
    console.log('Mock Trades ROI Contribution set to:', value);
  };

  // Quiz actions
  const handleSaveQuiz = () => {
    const quizData = { quizName, quizQuestion, quizOptions, quizCorrectAnswer, quizTimer };
    console.log('Saving Quiz:', quizData);
    alert('Quiz data logged to console.');
    // Reset form (optional)
    setQuizName(''); setQuizQuestion(''); setQuizOptions(['','','','']); setQuizCorrectAnswer(''); setQuizTimer(60);
  };

  // Mock Trade actions
  const handleSaveMockTrade = () => {
    const tradeData = { tradeName, tradeEntryConditions, tradeExitConditions, tradeFee };
    console.log('Saving Mock Trade:', tradeData);
    alert('Mock Trade data logged to console.');
    // Reset form (optional)
    setTradeName(''); setTradeEntryConditions(''); setTradeExitConditions(''); setTradeFee('');
  };
  
  const handleOptionChange = (index, value) => {
    const newOptions = [...quizOptions];
    newOptions[index] = value;
    setQuizOptions(newOptions);
  };


  // Basic inline styles
  const styles = {
    page: { padding: '20px', fontFamily: 'Arial, sans-serif' },
    section: { marginBottom: '30px', padding: '15px', border: '1px solid #eee' },
    title: { color: '#333', marginBottom: '20px' },
    subTitle: { color: '#555', marginBottom: '15px' },
    table: { width: '100%', borderCollapse: 'collapse', marginTop: '10px' },
    th: { border: '1px solid #ddd', padding: '10px', textAlign: 'left', backgroundColor: '#f2f2f2' },
    td: { border: '1px solid #ddd', padding: '10px', textAlign: 'left' },
    input: { width: 'calc(100% - 16px)', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' },
    textarea: { width: 'calc(100% - 16px)', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px', minHeight: '60px' },
    button: { padding: '10px 15px', marginRight: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white' },
    label: { display: 'block', marginBottom: '5px', fontWeight: 'bold' },
    formGroup: { marginBottom: '15px' },
    placeholderText: { color: '#777', fontStyle: 'italic', margin: '10px 0' }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Admin Engagement Activities Management</h1>

      {/* Activity Control Panel Section */}
      <section style={styles.section}>
        <h2 style={styles.subTitle}>Activity Control Panel</h2>
        <div style={styles.formGroup}>
          <input type="checkbox" id="enableDailyQuiz" checked={enableDailyQuiz} onChange={handleToggleDailyQuiz} />
          <label htmlFor="enableDailyQuiz" style={{ marginLeft: '5px' }}>Enable Daily Quiz</label>
        </div>
        <div style={styles.formGroup}>
          <input type="checkbox" id="enableMockTrades" checked={enableMockTrades} onChange={handleToggleMockTrades} />
          <label htmlFor="enableMockTrades" style={{ marginLeft: '5px' }}>Enable Mock Trades</label>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="dailyQuizRoi" style={styles.label}>Daily Quiz ROI Contribution (%):</label>
          <input type="number" id="dailyQuizRoi" value={dailyQuizRoi} onChange={handleDailyQuizRoiChange} style={{ ...styles.input, width: '100px' }} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="mockTradesRoi" style={styles.label}>Mock Trades ROI Contribution (%):</label>
          <input type="number" id="mockTradesRoi" value={mockTradesRoi} onChange={handleMockTradesRoiChange} style={{ ...styles.input, width: '100px' }} />
        </div>
      </section>

      {/* Daily Quiz Management Section */}
      <section style={styles.section}>
        <h2 style={styles.subTitle}>Daily Quiz Management</h2>
        <table style={styles.table}>
          <thead>
            <tr><th style={styles.th}>Quiz Name</th><th style={styles.th}>Number of Questions</th><th style={styles.th}>User Accuracy Rate</th></tr>
          </thead>
          <tbody>
            {mockQuizzes.map(quiz => (
              <tr key={quiz.id}><td style={styles.td}>{quiz.name}</td><td style={styles.td}>{quiz.numQuestions}</td><td style={styles.td}>{quiz.accuracy}</td></tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => console.log('Create New Quiz clicked')} style={{ ...styles.button, marginTop: '10px' }}>Create New Quiz</button>
        <button onClick={() => console.log('Edit Selected Quiz clicked')} style={{ ...styles.button, marginTop: '10px' }}>Edit Selected Quiz</button>
        
        <div style={{ marginTop: '20px', padding: '10px', border: '1px dashed #ccc' }}>
          <h3 style={{color: '#666'}}>Create/Edit Quiz Form</h3>
          <div style={styles.formGroup}><label htmlFor="quizName" style={styles.label}>Quiz Name:</label><input type="text" id="quizName" value={quizName} onChange={e => setQuizName(e.target.value)} style={styles.input} /></div>
          <div style={styles.formGroup}><label htmlFor="quizQuestion" style={styles.label}>Question Text:</label><textarea id="quizQuestion" value={quizQuestion} onChange={e => setQuizQuestion(e.target.value)} style={styles.textarea} /></div>
          {quizOptions.map((option, index) => (
            <div key={index} style={styles.formGroup}>
              <label htmlFor={`quizOption${index + 1}`} style={styles.label}>{`Option ${index + 1}:`}</label>
              <input type="text" id={`quizOption${index + 1}`} value={option} onChange={e => handleOptionChange(index, e.target.value)} style={styles.input} />
            </div>
          ))}
          <div style={styles.formGroup}><label htmlFor="quizCorrectAnswer" style={styles.label}>Correct Answer (text or option number):</label><input type="text" id="quizCorrectAnswer" value={quizCorrectAnswer} onChange={e => setQuizCorrectAnswer(e.target.value)} style={styles.input} /></div>
          <div style={styles.formGroup}><label htmlFor="quizTimer" style={styles.label}>Timer (seconds):</label><input type="number" id="quizTimer" value={quizTimer} onChange={e => setQuizTimer(parseInt(e.target.value))} style={styles.input} /></div>
          <button onClick={handleSaveQuiz} style={{ ...styles.button, backgroundColor: '#28a745' }}>Save Quiz</button>
        </div>
      </section>

      {/* Mock Trade Management Section */}
      <section style={styles.section}>
        <h2 style={styles.subTitle}>Mock Trade Management</h2>
        <table style={styles.table}>
          <thead>
            <tr><th style={styles.th}>Trade Name</th><th style={styles.th}>Entry/Exit Conditions</th><th style={styles.th}>Participation Fee</th></tr>
          </thead>
          <tbody>
            {mockTrades.map(trade => (
              <tr key={trade.id}><td style={styles.td}>{trade.name}</td><td style={styles.td}>{trade.conditions}</td><td style={styles.td}>{trade.fee}</td></tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => console.log('Create New Mock Trade clicked')} style={{ ...styles.button, marginTop: '10px' }}>Create New Mock Trade</button>
        <button onClick={() => console.log('Edit Selected Mock Trade clicked')} style={{ ...styles.button, marginTop: '10px' }}>Edit Selected Mock Trade</button>

        <div style={{ marginTop: '20px', padding: '10px', border: '1px dashed #ccc' }}>
          <h3 style={{color: '#666'}}>Create/Edit Mock Trade Form</h3>
          <div style={styles.formGroup}><label htmlFor="tradeName" style={styles.label}>Trade Name:</label><input type="text" id="tradeName" value={tradeName} onChange={e => setTradeName(e.target.value)} style={styles.input} /></div>
          <div style={styles.formGroup}><label htmlFor="tradeEntryConditions" style={styles.label}>Entry Conditions:</label><textarea id="tradeEntryConditions" value={tradeEntryConditions} onChange={e => setTradeEntryConditions(e.target.value)} style={styles.textarea} /></div>
          <div style={styles.formGroup}><label htmlFor="tradeExitConditions" style={styles.label}>Exit Conditions:</label><textarea id="tradeExitConditions" value={tradeExitConditions} onChange={e => setTradeExitConditions(e.target.value)} style={styles.textarea} /></div>
          <div style={styles.formGroup}><label htmlFor="tradeFee" style={styles.label}>Fee:</label><input type="text" id="tradeFee" value={tradeFee} onChange={e => setTradeFee(e.target.value)} style={styles.input} /></div>
          <button onClick={handleSaveMockTrade} style={{ ...styles.button, backgroundColor: '#28a745' }}>Save Mock Trade</button>
        </div>
      </section>

      {/* Leaderboard and Achievements Section */}
      <section style={styles.section}>
        <h2 style={styles.subTitle}>Leaderboard and Achievements</h2>
        <p style={styles.placeholderText}>[Leaderboard display for quizzes and mock trades will be shown here].</p>
        <p style={styles.placeholderText}>[Controls for awarding badges or incentives will be here].</p>
      </section>
    </div>
  );
};

export default AdminEngagementActivitiesPage;
