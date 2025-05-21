import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from './Dashboard';

// Mock child components to isolate the Dashboard component tests
// and avoid issues with their internal logic or further nested components.
jest.mock('../components/dashboard/InvestmentOverview', () => () => <div data-testid="investment-overview">Investment Overview</div>);
jest.mock('../components/dashboard/DailyEngagement', () => () => <div data-testid="daily-engagement">Daily Engagement Activities</div>);
jest.mock('../components/dashboard/NotificationsSummary', () => () => <div data-testid="notifications-summary">Notifications Center</div>);
jest.mock('../components/dashboard/QuickAccess', () => () => <div data-testid="quick-access">Quick Access</div>);
jest.mock('../components/dashboard/GraphicalSummary', () => () => <div data-testid="graphical-summary">Graphical Summary</div>);
jest.mock('../components/dashboard/UserSecurity', () => () => <div data-testid="user-security">User Security</div>);


describe('Dashboard Page', () => {
  test('renders all sections correctly', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );

    // Check for welcome message
    expect(screen.getByText(/Welcome back, Abdulazeez!/i)).toBeInTheDocument();

    // Check for section headings (using the text from the mocked components)
    expect(screen.getByText('Investment Overview')).toBeInTheDocument();
    expect(screen.getByText('Daily Engagement Activities')).toBeInTheDocument();
    expect(screen.getByText('Notifications Center')).toBeInTheDocument();
    expect(screen.getByText('Quick Access')).toBeInTheDocument();
    expect(screen.getByText('Graphical Summary')).toBeInTheDocument();
    expect(screen.getByText('User Security')).toBeInTheDocument();
  });
});
