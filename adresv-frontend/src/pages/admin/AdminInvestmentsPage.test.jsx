import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminInvestmentsPage from './AdminInvestmentsPage';

describe('AdminInvestmentsPage', () => {
  test('renders page title, plan table, creation form, and analytics placeholders', () => {
    render(
      <MemoryRouter>
        <AdminInvestmentsPage />
      </MemoryRouter>
    );

    // Check for the main title
    expect(screen.getByRole('heading', { name: /admin investments management/i })).toBeInTheDocument();

    // Check for the plan directory table and headers
    // The component uses "Investment Plan Directory" as the heading for this section
    expect(screen.getByRole('heading', { name: /investment plan directory/i })).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Plan Type')).toBeInTheDocument();
    expect(screen.getByText('Current ROI')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();

    // Check for mock plan data
    expect(screen.getByText('Weekly Starter')).toBeInTheDocument(); // From mockPlans
    expect(screen.getByText('2.5%')).toBeInTheDocument(); // ROI for Weekly Starter

    // Check for the Plan Creation/Edit form section
    expect(screen.getByRole('heading', { name: /create\/edit investment plan/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/plan name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/roi percentage/i)).toBeInTheDocument();

    // Check for Plan Performance Analytics placeholders
    expect(screen.getByRole('heading', { name: /plan performance analytics/i })).toBeInTheDocument();
    expect(screen.getByText(/\[Graph: User participation over time will be shown here\]/i)).toBeInTheDocument();
    expect(screen.getByText(/\[Graph: ROI distribution trends will be shown here\]/i)).toBeInTheDocument();
  });
});
