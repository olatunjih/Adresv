import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminEngagementActivitiesPage from './AdminEngagementActivitiesPage';

describe('AdminEngagementActivitiesPage', () => {
  test('renders page title and all key management sections', () => {
    render(
      <MemoryRouter>
        <AdminEngagementActivitiesPage />
      </MemoryRouter>
    );

    // Main title
    expect(screen.getByRole('heading', { name: /admin engagement activities management/i })).toBeInTheDocument();

    // Activity Control Panel
    expect(screen.getByRole('heading', { name: /activity control panel/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/enable daily quiz/i)).toBeInTheDocument();

    // Daily Quiz Management
    expect(screen.getByRole('heading', { name: /daily quiz management/i })).toBeInTheDocument();
    // Check for mock quiz data in the table
    // The component renders multiple tables, so we check for the content directly.
    // A more robust selector might be needed if text is not unique.
    const tables = screen.getAllByRole('table');
    // Assuming the first table is for quizzes
    expect(tables[0]).toHaveTextContent('Crypto Basics'); // Mock quiz name
    expect(tables[0]).toHaveTextContent('Advanced Trading Terms'); // Another mock quiz name

    // Mock Trade Management
    expect(screen.getByRole('heading', { name: /mock trade management/i })).toBeInTheDocument();
    // Assuming the second table is for mock trades
    expect(tables[1]).toHaveTextContent('BTC Long Practice'); // Mock trade name
    expect(tables[1]).toHaveTextContent('ETH Short Practice'); // Another mock trade name

    // Leaderboard and Achievements
    expect(screen.getByRole('heading', { name: /leaderboard and achievements/i })).toBeInTheDocument();
    expect(screen.getByText(/\[Leaderboard display for quizzes and mock trades will be shown here\]/i)).toBeInTheDocument();
    // Check for the second placeholder text as well
    expect(screen.getByText(/\[Controls for awarding badges or incentives will be here\]/i)).toBeInTheDocument();
  });
});
