import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DailyEngagementPage from './DailyEngagementPage';

// Mock child components
jest.mock('../components/dailyengagement/DailyQuiz', () => () => <div data-testid="daily-quiz-mock">Daily Quiz Mock</div>);
jest.mock('../components/dailyengagement/MockTrades', () => () => <div data-testid="mock-trades-mock">Mock Trades Mock</div>);
jest.mock('../components/dailyengagement/Leaderboard', () => () => <div data-testid="leaderboard-mock">Leaderboard Mock</div>);

describe('DailyEngagementPage', () => {
  test('renders the main title and child component placeholders', () => {
    render(
      <MemoryRouter>
        <DailyEngagementPage />
      </MemoryRouter>
    );

    // Check for the main title (adjust text if necessary based on actual component)
    expect(screen.getByText(/Daily Engagement Tasks/i)).toBeInTheDocument();

    // Check for mocked child components
    expect(screen.getByTestId('daily-quiz-mock')).toBeInTheDocument();
    expect(screen.getByText('Daily Quiz Mock')).toBeInTheDocument();

    expect(screen.getByTestId('mock-trades-mock')).toBeInTheDocument();
    expect(screen.getByText('Mock Trades Mock')).toBeInTheDocument();

    expect(screen.getByTestId('leaderboard-mock')).toBeInTheDocument();
    expect(screen.getByText('Leaderboard Mock')).toBeInTheDocument();
  });
});
