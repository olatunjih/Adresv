import React, { useState } from 'react';

const DailyQuiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const currentQuestion = {
    id: 1,
    text: 'What is the primary use case for Bitcoin?',
    options: [
      { id: 'A', text: 'Smart Contracts' },
      { id: 'B', text: 'Decentralized Storage' },
      { id: 'C', text: 'Peer-to-Peer Electronic Cash' },
      { id: 'D', text: 'Social Media Platform' },
    ],
    correctAnswer: 'C',
  };
  const questionNumber = 1;
  const totalQuestions = 5;
  const timeLeft = 15; // seconds

  const handleAnswerSelect = (optionId) => {
    setSelectedAnswer(optionId);
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      alert(`Selected answer: ${selectedAnswer}. Correct answer: ${currentQuestion.correctAnswer}`);
      // Logic for next question or quiz completion would go here
    } else {
      alert('Please select an answer.');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Daily Quiz</h2>
      
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-gray-600">Question {questionNumber} of {totalQuestions}</p>
        <p className="text-sm text-red-500 font-semibold">Time remaining: {timeLeft}s</p>
      </div>

      <div className="mb-6">
        <p className="text-lg text-gray-800">{currentQuestion.text}</p>
      </div>

      <div className="space-y-3 mb-6">
        {currentQuestion.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleAnswerSelect(option.id)}
            className={`w-full text-left p-3 rounded-md border
                        ${selectedAnswer === option.id 
                          ? 'bg-blue-500 text-white border-blue-500' 
                          : 'bg-white hover:bg-gray-50 border-gray-300'}
                        focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-150`}
          >
            <span className="font-medium mr-2">{option.id}.</span> {option.text}
          </button>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
      >
        Submit Answer
      </button>
    </div>
  );
};

export default DailyQuiz;
