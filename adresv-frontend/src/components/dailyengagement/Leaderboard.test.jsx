import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Leaderboard from './Leaderboard';

describe('Leaderboard Component', () => {
  beforeEach(() => {
    render(<Leaderboard />);
  });

  test('renders "Leaderboard" heading', () => {
    expect(screen.getByRole('heading', { name: /Leaderboard/i, level: 2 })).toBeInTheDocument();
  });

  test('renders "Quiz Rankings" and "Mock Trade Rankings" tabs', () => {
    expect(screen.getByRole('button', { name: /Quiz Rankings/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Mock Trade Rankings/i })).toBeInTheDocument();
  });

  test('displays Quiz Rankings by default and shows quiz data', () => {
    // Check for a user from the quiz rankings (default view)
    expect(screen.getByText('UserAlpha')).toBeInTheDocument();
    expect(screen.getByText(/Score: 1250/i)).toBeInTheDocument();
    // Ensure trade-specific data is not visible initially
    expect(screen.queryByText('TraderX')).not.toBeInTheDocument();
    expect(screen.queryByText(/PnL: \$5200/i)).not.toBeInTheDocument();
  });

  test('clicking "Mock Trade Rankings" tab displays trade data', () => {
    const tradeTabButton = screen.getByRole('button', { name: /Mock Trade Rankings/i });
    fireEvent.click(tradeTabButton);

    // Check for a user from the trade rankings
    expect(screen.getByText('TraderX')).toBeInTheDocument();
    expect(screen.getByText(/PnL: \$5,200/i)).toBeInTheDocument(); // Note: toLocaleString() adds comma
    // Ensure quiz-specific data is not visible
    expect(screen.queryByText(/Score: 1250/i)).not.toBeInTheDocument();
    // UserAlpha is in both, but their score shouldn't be visible, only PnL if it's different
    // Let's check for a user unique to trade rankings if UserAlpha's PnL is also displayed
    expect(screen.getByText('CryptoQueen')).toBeInTheDocument();
  });

  test('switching back to "Quiz Rankings" tab displays quiz data again', () => {
    const tradeTabButton = screen.getByRole('button', { name: /Mock Trade Rankings/i });
    fireEvent.click(tradeTabButton); // Switch to trade

    const quizTabButton = screen.getByRole('button', { name: /Quiz Rankings/i });
    fireEvent.click(quizTabButton); // Switch back to quiz

    expect(screen.getByText('UserAlpha')).toBeInTheDocument();
    expect(screen.getByText(/Score: 1250/i)).toBeInTheDocument();
    expect(screen.queryByText('TraderX')).not.toBeInTheDocument();
  });
});
