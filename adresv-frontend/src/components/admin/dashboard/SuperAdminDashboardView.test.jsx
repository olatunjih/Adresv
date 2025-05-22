import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SuperAdminDashboardView from './SuperAdminDashboardView';

describe('SuperAdminDashboardView Component', () => {
  beforeEach(() => {
    render(<SuperAdminDashboardView />);
  });

  test('renders main heading "Super Admin Dashboard"', () => {
    expect(screen.getByRole('heading', { name: /Super Admin Dashboard/i, level: 3 })).toBeInTheDocument();
  });

  test('renders key section headings', () => {
    expect(screen.getByRole('heading', { name: /Platform Metrics/i, level: 4 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Admin Activity Logs/i, level: 4 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /System Toggles/i, level: 4 })).toBeInTheDocument();
  });

  test('renders mock data/placeholder text within sections', () => {
    // Platform Metrics
    expect(screen.getByText(/Total Active Users:/i)).toBeInTheDocument();
    expect(screen.getByText(/1,234 \(Mock\)/i)).toBeInTheDocument();

    // Admin Activity Logs
    expect(screen.getByText(/User 'AdminUser1' updated role for 'UserXYZ' to 'Investor'. \(Mock\)/i)).toBeInTheDocument();

    // System Toggles
    expect(screen.getByText(/User Registration/i)).toBeInTheDocument(); // Label of a toggle
    expect(screen.getByText(/\(Toggles are currently disabled placeholders.\)/i)).toBeInTheDocument();
  });
});
