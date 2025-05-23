import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Leaderboard from './Leaderboard';

describe('Leaderboard Component', () => {
  beforeEach(() => {
    render(<Leaderboard />);
  });

  test('renders the section title "Leaderboard"', () => {
    expect(screen.getByText(/^Leaderboard$/i)).toBeInTheDocument(); // Use regex for exact match or specific h2
  });

  test('renders view-switching buttons', () => {
    expect(screen.getByRole('button', { name: /Daily Quiz Champions/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Mock Trade Masters/i })).toBeInTheDocument();
  });

  test('renders table headers for the default view (Daily Quiz)', () => {
    expect(screen.getByRole('columnheader', { name: /Rank/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Username/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Score/i })).toBeInTheDocument(); // Default label
  });

  test('displays quiz leaderboard data by default', () => {
    // Check for a username specific to quiz mock data
    expect(screen.getByText('CryptoKing88')).toBeInTheDocument();
    expect(screen.getByText('4/5 Correct, 5s Avg Time')).toBeInTheDocument();
  });

  test('switches to Mock Trades view and updates table headers and data', () => {
    const mockTradesButton = screen.getByRole('button', { name: /Mock Trade Masters/i });
    fireEvent.click(mockTradesButton);

    // Header should change
    expect(screen.getByRole('columnheader', { name: /Achievement/i })).toBeInTheDocument();
    expect(screen.queryByRole('columnheader', { name: /Score/i })).not.toBeInTheDocument();

    // Data should change - check for a username specific to trades mock data
    expect(screen.getByText('TradeTitan')).toBeInTheDocument();
    expect(screen.getByText('+150% Profit')).toBeInTheDocument();
    // Ensure quiz data is not present
    expect(screen.queryByText('CryptoKing88')).not.toBeInTheDocument();
  });

  test('switches back to Daily Quiz view when the button is clicked again', () => {
    const mockTradesButton = screen.getByRole('button', { name: /Mock Trade Masters/i });
    fireEvent.click(mockTradesButton); // Switch to Trades

    const dailyQuizButton = screen.getByRole('button', { name: /Daily Quiz Champions/i });
    fireEvent.click(dailyQuizButton); // Switch back to Quiz

    expect(screen.getByRole('columnheader', { name: /Score/i })).toBeInTheDocument();
    expect(screen.queryByRole('columnheader', { name: /Achievement/i })).not.toBeInTheDocument();
    expect(screen.getByText('CryptoKing88')).toBeInTheDocument();
  });
});
