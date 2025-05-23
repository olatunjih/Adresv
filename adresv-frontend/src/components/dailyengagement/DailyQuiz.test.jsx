import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DailyQuiz from './DailyQuiz';

// Mock useEffect for timer to prevent issues with Jest's fake timers or async updates in basic tests
jest.useFakeTimers();

describe('DailyQuiz Component', () => {
  const mockQuestionText = "What is the most actively traded cryptocurrency by volume?";

  beforeEach(() => {
    render(<DailyQuiz />);
    // Mock alert as it's used in handleSubmit
    global.alert = jest.fn();
  });

  afterEach(() => {
    jest.clearAllTimers();
    delete global.alert;
  });

  test('renders the section title "Today\'s Quiz"', () => {
    expect(screen.getByText(/Today's Quiz/i)).toBeInTheDocument();
  });

  test('renders the mock question display area', () => {
    expect(screen.getByText(mockQuestionText)).toBeInTheDocument();
  });

  test('renders multiple-choice options based on mock data', () => {
    expect(screen.getByText('Bitcoin (BTC)')).toBeInTheDocument();
    expect(screen.getByText('Ethereum (ETH)')).toBeInTheDocument();
    expect(screen.getByText('Tether (USDT)')).toBeInTheDocument();
    expect(screen.getByText('Binance Coin (BNB)')).toBeInTheDocument();
  });

  test('renders timer display', () => {
    expect(screen.getByText(/Time Left:/i)).toBeInTheDocument();
    // Initial time might be 15s or another value depending on component's state
    expect(screen.getByText(/15s/i)).toBeInTheDocument(); 
  });

  test('renders progress tracker', () => {
    expect(screen.getByText(/Question:/i)).toBeInTheDocument();
    expect(screen.getByText(/1 of 5/i)).toBeInTheDocument(); // Based on mock data
  });

  test('renders the "Submit Answer" button and it is initially disabled', () => {
    const submitButton = screen.getByRole('button', { name: /Submit Answer/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  test('submit button becomes enabled after selecting an option', () => {
    const optionButton = screen.getByText('Bitcoin (BTC)'); // Select any option
    fireEvent.click(optionButton);
    
    const submitButton = screen.getByRole('button', { name: /Submit Answer/i });
    expect(submitButton).not.toBeDisabled();
  });

  test('selecting an option highlights it', () => {
    const optionButton = screen.getByText('Ethereum (ETH)');
    fireEvent.click(optionButton);
    // Check for a class that indicates selection, e.g., bg-blue-500
    expect(optionButton).toHaveClass('bg-blue-500'); 
  });
});
