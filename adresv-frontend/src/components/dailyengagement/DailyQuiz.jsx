import React, { useState, useEffect } from 'react';

const DailyQuiz = () => {
  const mockQuestion = {
    id: 1,
    text: "What is the most actively traded cryptocurrency by volume?",
    options: [
      { id: 'a', text: 'Bitcoin (BTC)' },
      { id: 'b', text: 'Ethereum (ETH)' },
      { id: 'c', text: 'Tether (USDT)' },
      { id: 'd', text: 'Binance Coin (BNB)' },
    ],
    correctAnswer: 'c',
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15); // seconds
  const currentQuestionNumber = 1;
  const totalQuestions = 5;

  // Basic timer effect
  useEffect(() => {
    if (timeLeft === 0) return;
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    // Placeholder for answer submission logic
    alert(`Selected answer: ${selectedOption}. Correct answer was: ${mockQuestion.correctAnswer}`);
    // Reset timer, load next question, etc. (for future implementation)
    setTimeLeft(15);
    setSelectedOption(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Today's Quiz</h2>

      <div className="mb-4">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>Time Left: <span className="font-semibold text-red-500">{timeLeft}s</span></span>
          <span>Question: <span className="font-semibold">{currentQuestionNumber} of {totalQuestions}</span></span>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-lg text-gray-700 mb-4">{mockQuestion.text}</p>
        <div className="space-y-3">
          {mockQuestion.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              className={`w-full text-left p-3 rounded-md border transition-colors
                ${selectedOption === option.id 
                  ? 'bg-blue-500 text-white border-blue-600 ring-2 ring-blue-300' 
                  : 'bg-gray-50 hover:bg-gray-100 border-gray-300'
                }`}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!selectedOption}
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                   disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-150 ease-in-out"
      >
        Submit Answer
      </button>
    </div>
  );
};

export default DailyQuiz;
