import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For enhanced matchers like toBeInTheDocument
import DailyQuiz from './DailyQuiz';

describe('DailyQuiz Component', () => {
  beforeEach(() => {
    // Mock alert as it's used in the handleSubmit
    global.alert = jest.fn();
    render(<DailyQuiz />);
  });

  test('renders "Daily Quiz" heading', () => {
    expect(screen.getByRole('heading', { name: /Daily Quiz/i, level: 2 })).toBeInTheDocument();
  });

  test('renders the mock question text', () => {
    expect(screen.getByText('What is the primary use case for Bitcoin?')).toBeInTheDocument();
  });

  test('renders answer options', () => {
    expect(screen.getByText(/Smart Contracts/i)).toBeInTheDocument();
    expect(screen.getByText(/Peer-to-Peer Electronic Cash/i)).toBeInTheDocument();
  });

  test('renders timer text', () => {
    expect(screen.getByText(/Time remaining: \d+s/i)).toBeInTheDocument();
  });

  test('renders progress text', () => {
    expect(screen.getByText(/Question \d+ of \d+/i)).toBeInTheDocument();
  });

  test('renders "Submit Answer" button', () => {
    expect(screen.getByRole('button', { name: /Submit Answer/i })).toBeInTheDocument();
  });

  test('allows an answer to be selected and form to be submitted', () => {
    // Find an answer option button (e.g., the one containing "Peer-to-Peer Electronic Cash")
    const answerButton = screen.getByRole('button', { name: /C\. Peer-to-Peer Electronic Cash/i });
    fireEvent.click(answerButton);

    // Check if the button style changed (optional, depends on implementation detail)
    // For this component, selected answer gets 'bg-blue-500 text-white'
    expect(answerButton).toHaveClass('bg-blue-500', 'text-white');

    const submitButton = screen.getByRole('button', { name: /Submit Answer/i });
    fireEvent.click(submitButton);

    expect(global.alert).toHaveBeenCalledWith('Selected answer: C. Correct answer: C');
  });

  test('shows alert if no answer selected on submit', () => {
    const submitButton = screen.getByRole('button', { name: /Submit Answer/i });
    fireEvent.click(submitButton);
    expect(global.alert).toHaveBeenCalledWith('Please select an answer.');
  });
});
