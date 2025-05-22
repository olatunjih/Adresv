import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MessageAdminDashboardView from './MessageAdminDashboardView';

describe('MessageAdminDashboardView Component', () => {
  beforeEach(() => {
    render(<MessageAdminDashboardView />);
  });

  test('renders main heading "Message Administration Dashboard"', () => {
    expect(screen.getByRole('heading', { name: /Message Administration Dashboard/i, level: 3 })).toBeInTheDocument();
  });

  test('renders key section headings', () => {
    expect(screen.getByRole('heading', { name: /Announcement Management/i, level: 4 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Notification Templates/i, level: 4 })).toBeInTheDocument();
  });

  test('renders mock data/placeholder text within sections', () => {
    // Announcement Management
    expect(screen.getByText(/Scheduled Maintenance Alert/i)).toBeInTheDocument(); // Part of a mock announcement

    // Notification Templates (table content)
    expect(screen.getByText(/Welcome Email/i)).toBeInTheDocument(); // Part of a mock template
  });
});
