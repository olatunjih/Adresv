import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GlobalAdminDashboardView from './GlobalAdminDashboardView';

describe('GlobalAdminDashboardView Component', () => {
  beforeEach(() => {
    render(<GlobalAdminDashboardView />);
  });

  test('renders main heading "Global Administration Dashboard"', () => {
    expect(screen.getByRole('heading', { name: /Global Administration Dashboard/i, level: 3 })).toBeInTheDocument();
  });

  test('renders key section headings', () => {
    expect(screen.getByRole('heading', { name: /Platform Health Overview/i, level: 4 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Content Management Quick Actions/i, level: 4 })).toBeInTheDocument();
  });

  test('renders mock data/placeholder text within sections', () => {
    // Platform Health Overview
    expect(screen.getByText(/API Gateway Status:/i)).toBeInTheDocument();
    expect(screen.getByText(/Operational/i)).toBeInTheDocument(); // Assuming at least one is operational

    // Content Management Quick Actions
    expect(screen.getByRole('button', {name: /Manage Announcements/i})).toBeInTheDocument();
  });
});
