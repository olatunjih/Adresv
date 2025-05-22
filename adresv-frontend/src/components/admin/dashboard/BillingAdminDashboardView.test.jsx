import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BillingAdminDashboardView from './BillingAdminDashboardView';

describe('BillingAdminDashboardView Component', () => {
  beforeEach(() => {
    render(<BillingAdminDashboardView />);
  });

  test('renders main heading "Billing Administration Dashboard"', () => {
    expect(screen.getByRole('heading', { name: /Billing Administration Dashboard/i, level: 3 })).toBeInTheDocument();
  });

  test('renders key section headings', () => {
    expect(screen.getByRole('heading', { name: /Financial Overview/i, level: 4 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Recent Subscriptions/i, level: 4 })).toBeInTheDocument();
  });

  test('renders mock data/placeholder text within sections', () => {
    // Financial Overview
    expect(screen.getByText(/Total Revenue \(MTD\):/i)).toBeInTheDocument();
    expect(screen.getByText(/\$12,345 \(Mock\)/i)).toBeInTheDocument();

    // Recent Subscriptions (table content)
    expect(screen.getByText(/UserAlpha/i)).toBeInTheDocument(); // Part of a mock subscription
  });
});
