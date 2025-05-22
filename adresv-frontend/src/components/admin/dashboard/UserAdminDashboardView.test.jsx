import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserAdminDashboardView from './UserAdminDashboardView';

describe('UserAdminDashboardView Component', () => {
  beforeEach(() => {
    render(<UserAdminDashboardView />);
  });

  test('renders main heading "User Administration Dashboard"', () => {
    expect(screen.getByRole('heading', { name: /User Administration Dashboard/i, level: 3 })).toBeInTheDocument();
  });

  test('renders key section headings', () => {
    expect(screen.getByRole('heading', { name: /User Account Overview/i, level: 4 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Login Activity Trends/i, level: 4 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Quick Actions/i, level: 4 })).toBeInTheDocument();
  });

  test('renders mock data/placeholder text within sections', () => {
    // User Account Overview
    expect(screen.getByText(/Total Active Accounts:/i)).toBeInTheDocument();
    expect(screen.getByText(/987 \(Mock\)/i)).toBeInTheDocument();

    // Login Activity Trends
    expect(screen.getByText(/A graph showing login activity trends/i)).toBeInTheDocument();

    // Quick Actions
    expect(screen.getByRole('button', {name: /Search Users/i})).toBeInTheDocument();
  });
});
