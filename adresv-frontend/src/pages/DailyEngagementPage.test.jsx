import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DailyEngagementPage from './DailyEngagementPage';

// Mock child components to isolate DailyEngagementPage tests
jest.mock('../components/dailyengagement/DailyQuiz', () => () => <div>Mocked DailyQuiz Content</div>);
jest.mock('../components/dailyengagement/MockTrades', () => () => <div>Mocked MockTrades Content</div>);
jest.mock('../components/dailyengagement/Leaderboard', () => () => <div>Mocked Leaderboard Content</div>);

describe('DailyEngagementPage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter> {/* MemoryRouter is needed if the page or its children use Link or other router features */}
        <DailyEngagementPage />
      </MemoryRouter>
    );
  });

  test('renders "Daily Engagement Page" heading', () => {
    const headingElement = screen.getByRole('heading', { name: /Daily Engagement Page/i, level: 1 });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders mocked child components content', () => {
    expect(screen.getByText('Mocked DailyQuiz Content')).toBeInTheDocument();
    expect(screen.getByText('Mocked MockTrades Content')).toBeInTheDocument();
    expect(screen.getByText('Mocked Leaderboard Content')).toBeInTheDocument();
  });
});
