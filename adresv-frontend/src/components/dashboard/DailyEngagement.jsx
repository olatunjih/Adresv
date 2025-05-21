import React from 'react';

const DailyEngagement = () => {
  // Placeholder data
  const participationStatus = "You are up to date with daily activities!";
  const pendingTasks = [
    { id: 1, text: "Complete today's quiz to boost your ROI by 1%!", buttonText: "Go to Quiz", link: "/daily-engagement#quiz" },
    { id: 2, text: "Participate in a mock trade for a 0.5% ROI bonus!", buttonText: "Join Mock Trade", link: "/daily-engagement#mock-trades" }
  ];

  return (
    <section className="p-6 bg-white shadow rounded-lg mb-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Daily Engagement Activities</h3>
      <p className="text-gray-600 mb-4">{participationStatus}</p>
      
      {pendingTasks.length > 0 && (
        <div>
          <h4 className="text-md font-semibold text-gray-600 mb-2">Pending Tasks:</h4>
          <ul className="space-y-3">
            {pendingTasks.map(task => (
              <li key={task.id} className="p-3 bg-orange-100 rounded-lg flex justify-between items-center">
                <span className="text-orange-700">{task.text}</span>
                {/* In a real app, these would be Links or trigger actions */}
                <button 
                  onClick={() => alert('Navigating to: ' + task.link)} 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-3 rounded-lg text-sm"
                >
                  {task.buttonText}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default DailyEngagement;
