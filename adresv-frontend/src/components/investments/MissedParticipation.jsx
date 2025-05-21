import React from 'react';

const MissedParticipation = () => {
  // Placeholder data - examples of missed participation messages
  const missedActivities = [
    { id: 1, date: 'April 22, 2025', reason: 'Quiz not completed', impact: 'ROI reduced by 1.5% for Plan X' },
    { id: 2, date: 'April 20, 2025', reason: 'Mock trade not joined', impact: 'Missed 0.5% ROI bonus for Plan Y' },
  ];

  return (
    <section className="p-6 bg-white shadow rounded-lg mb-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-6">Missed Participation</h3>
      {missedActivities.length > 0 ? (
        <div className="space-y-4">
          {missedActivities.map(activity => (
            <div key={activity.id} className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="font-medium text-red-700">
                Missed participation on <span className="font-bold">{activity.date}</span>.
              </p>
              <p className="text-sm text-red-600">Reason: {activity.reason}.</p>
              <p className="text-sm text-red-600">Impact: {activity.impact}.</p>
            </div>
          ))}
          <p className="text-sm text-gray-500 mt-4">
            Ensure daily participation to maximize your ROI.
          </p>
        </div>
      ) : (
        <p className="text-gray-500">No missed participation events to show. Keep up the good work!</p>
      )}
    </section>
  );
};

export default MissedParticipation;
